import Addcard from "../modal/addcard.js"; // Assuming your schema is defined in a separate file

// Create a new shopping cart item
const  createCartItem = async (req, res) => {
  try {
    const newItem = new Addcard(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create shopping cart item' });
  }
};

// Get all shopping cart items
const  getAllCartItems = async (req, res) => {
  console.log("getAllCARTITEMS CALLED")
  try {
    const  data = await Addcard.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not fetch shopping cart items' });
  }
};

// Update a shopping cart item by ID
const  updateCartItem = async (req, res) => {
  try {
     const id = req.query.id;
     const udata={...req.body}
     console.log("&*&^^*&^&^*&& Updated data: ",udata)
    const updatedItem = await Addcard.findById( id);
  // console.log("&*********&*&&*&&*&*& updated ITEM" , updatedItem)
    if(updatedItem){
      const updateddata = await Addcard.findByIdAndUpdate(udata)
      res.status(200).json(updateddata);
    }
    else{
      res.status(500).json({ error: 'Data not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update shopping cart item' });
  }
};

// Delete a shopping cart item by ID
const deleteCartItem = async (req, res) => {
  try {
    const id = req.query.id;
   
    await Addcard.findByIdAndRemove(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete shopping cart item' });
  }
};
export {createCartItem,getAllCartItems,updateCartItem,deleteCartItem}