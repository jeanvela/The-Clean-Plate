const User = require('../models/Users')
const Role = require('../models/Roles')

const authHandler = async (req, res) => {
    const { email, roles } = req.body;
  
    try {
      const foundEmail = await User.findOne({ email: email });
  
      if (!foundEmail) {
        const newUser = new User({
          email,
        });
  
        if (roles) {
          const foundRoles = await Role.find({ name: { $in: roles } });
          newUser.roles = foundRoles.map((role) => role._id);
        } else {
          const role = await Role.find({ name: 'user' });
          newUser.roles = [role._id];
        }
  
        await newUser.save();
  
        res.status(200).json(newUser);
      } else {
        res.status(400).json({ message: 'The email already exists' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = {
    authHandler,
  };
  


