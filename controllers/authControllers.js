const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/userModel")

const login = async (req, res) => {
const { email,password } = req.body

const user = await User.findOne({email: email})

if(!user){
    return res.status(401).send("Unauthorized access!")
}
const passwordsMatch = bcrypt.compareSync(password, user.password);

if(passwordsMatch) {
    const token = token = jwt.sign({ _id: user._id,email: user.email }, '7cda6e1ef706a0e029c2ed49a6cd1f37347f03d6d48d2aae9500af9f6a294604bcc2545c28dd41021662c7900d0924748ae39f35ba8b7a9799627823c64befd8');
}
else{
    res.status(401).send("Unathorized access")
}
}

module.exports = {
  login
}