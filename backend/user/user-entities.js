import crypto from 'crypto';

class User {
  constructor(email, password) {
    this.id = crypto.randomUUID();
    this.email = email;
    this.password = password
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
    };
  }
}

export default User;