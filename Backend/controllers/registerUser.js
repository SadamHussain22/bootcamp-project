import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../modal/signupmodal.js";
import nodemailer from "nodemailer";
 
export const registerUser = asyncHandler(async (req, res) => {
  console.log("req",req.body) // Removed unnecessary parentheses
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role: "user"
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});
export const changePassword = async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;

  try {
      
      if (!email || !currentPassword || !newPassword) {
          return res.status(400).json({
              success: false,
              message: "Please provide all fields to update your account.",
          });
      }
      // find email in DB
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({
              success: false,
              message: "no user found against this email",
          });
      }
      // check if old and new passwords are same or not
      const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({
              success: false,
              message: "current password is incorrect",
          });
      }

      // hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      //update the new password 
      user.password = hashedPassword;
      await user.save();

      return res.status(200).json({
          success: true,
          message: "your password has been updated successfully"
      });
  } catch (error) {
      return res.status(500).json({
          success: false,
          message: "Internal Server Error",
      });
  }
};

export const forgotPassword = async (req, res) => {
  try {
      const transporter = nodemailer.createTransport({
          host: "gmail",
          port: 6666,
          secure: true,
          auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: "sadamhussainjoiya36@gmail.com",
              pass: "sadam12345",
          },
      });
      // send mail with defined transport object
      const info = await transporter.sendMail({
          from: '"Fred Foo 👻" <sadamhussainjoiya36@gmail.com>', // sender address
          to: "sadamhussainjoiya36@gmail.com, sadamhussainjoiya36@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      const { email } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }
      const resetToken = crypto.randomBytes(20).toString("hex");
      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = Date.now() + 360000;

      console.log("Reset Token:", resetToken);
      await user.save();

      // send an email to the user with the reset token
      //nodemailer

      res.json({
          email: user.email,
          message: "Your password reset token sent to your mail",
      });
  } catch (error) {
      res.status(500).json({
          error: "forgot password request failed",
      });
  }
};

 
