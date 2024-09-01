const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyparser.json());

mongoose.connect('mongodb://localhost:27017/dreamcatcher', { useNewUrlParser: true, useUnifiedTopology: true });

const adminSchema = new mongoose.Schema({
    username: String,
    password: String, // Store hashed password in practice
});

const userSchema = new mongoose.Schema({
    name: String,
    mobileNumber: String,
});

const cartSchema = new mongoose.Schema({
    userName: String,
    items: [
        {
            name: String,
            price: Number,
        }
    ]
});

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);
const Cart = mongoose.model('Cart', cartSchema);

const hardcodedAdmin = { username: 'admin', password: 'password' }; // Hardcoded credentials

app.post('/api/admin', async (req, res) => {
    const { username, password } = req.body;
    console.log(`Received username: ${username}, password: ${password}`); // Log received credentials

    if (username === hardcodedAdmin.username && password === hardcodedAdmin.password) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({});
        const carts = await Cart.find({});
        const usersWithItems = users.map(user => {
            const userCart = carts.find(cart => cart.userName === user.name);
            return {
                ...user.toObject(),
                items: userCart ? userCart.items : [],
            };
        });
        res.json(usersWithItems);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { name, mobileNumber } = req.body;
        const newUser = new User({ name, mobileNumber });
        await newUser.save();
        res.status(201).json({ message: 'User added successfully' });
    } catch (e) {
        res.status(500).json({ error: 'Failed to add user' });
    }
});

app.post('/api/add-to-cart', async (req, res) => {
    try {
        const { name, price, user } = req.body;
        let userCart = await Cart.findOne({ userName: user });
        if (!userCart) {
            userCart = new Cart({ userName: user, items: [] });
        }
        userCart.items.push({ name, price });
        await userCart.save();
        res.status(201).json({ message: 'Item added to cart successfully' });
    } catch (e) {
        res.status(500).json({ error: 'Failed to add item to cart' });
    }
});

app.get('/api/cart/:userName', async (req, res) => {
    try {
        const userName = req.params.userName;
        const userCart = await Cart.findOne({ userName });

        if (userCart) {
            res.status(200).json(userCart.items);
        } else {
            res.status(404).json({ message: 'No cart found for this user' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
});

app.put('/api/cart/:userName', async (req, res) => {
    try {
        const { userName } = req.params;
        const { items } = req.body;
        let userCart = await Cart.findOne({ userName });

        if (userCart) {
            userCart.items = items;
            await userCart.save();
            res.status(200).json({ message: 'Cart updated successfully' });
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update cart' });
    }
});

app.delete('/api/users/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      await User.findByIdAndDelete(userId);
      await Cart.findOneAndDelete({ userName: userId }); // Optional: Remove the user's cart as well
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  });

  const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  
  app.post('/api/contacts', async (req, res) => {
    try {
        const { name, phone, email, address, desc } = req.body;
        const newContact = new Contact({ name, phone, email, address, desc });
      await newContact.save();
      res.status(201).json({ message: 'Contact information saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save contact information' });
    }
  });

  app.get('/api/contacts', async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch contacts' });
    }
  });

  app.delete('/api/contacts/:id', async (req, res) => {
    try {
      const contactId = req.params.id;
      await Contact.findByIdAndDelete(contactId);
      res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete contact' });
    }
  });




const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
