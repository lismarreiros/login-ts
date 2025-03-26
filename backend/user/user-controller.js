import User from "./user-entities.js";
import bcrypt from 'bcryptjs'

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser =  async (req, res) => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new User(email, hashedPassword)
      const newUser = await this.userService.addUser(user);
      res.status(201).send(newUser);
    
    } catch (err) {
      return res.status(400).send({ error: err.message })
    }

  }

  getUser = (req, res) => {
    const { id } = req.params;
    const user = this.userService.getUser(id);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send(user);
  } 
}

export default UserController;