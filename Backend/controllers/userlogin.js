import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../modal/signupmodal.js";
 
export const login = async (req, res) => {
    try {
        // extract email and password from request body
        const { email, password } = req.body;

        // find user by email in database
        const user = await User.findOne({ email });

        // if no user found, return an error
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // compare provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'invalid password' });
        }

        // generate a JSON web Token for authentation

        const token = jwt.sign({ userId: user._id }, "secret-keys", {
            expiresIn: "1h",
        });
        //localStorage.setItem('token',token)
        //responce with success
        res.json({
            email: user.email,
            message: "Login successful",
            token,
            success: true,
            statusCode: 200
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: "login failed",
            success: false,
            statusCode: 500,
        });
    }
};
 
