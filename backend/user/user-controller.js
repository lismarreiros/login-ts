import User from "./user-entities.js";

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = (req, res) => {
    const { email, password } = req.body;
    const user = { email, password };

    const newUser = this.userService.addUser(user);
    res.status(201).send(newUser);
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