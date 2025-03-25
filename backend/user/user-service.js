import UserRepository from "./user-repository.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  addUser = (user) => {
    return this.userRepository.insert(user);
  }

  getUser = (id) => {
    return this.userRepository.findById(id);
  }
}

export default UserService;