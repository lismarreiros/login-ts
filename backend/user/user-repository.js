import db from '../db.js'
class UserRepository {
  insert(user) {
    const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
    const stmt = db.prepare(query);
    const result = stmt.run(user.email, user.password);
    return { id: result.lastInsertRowid, email: user.email };
  }

  findById(id) {
    const query = `SELECT id, email FROM users WHERE id = ?`;
    const stmt = db.prepare(query);
    const user = stmt.get(id);
    return user;
  } 
}

export default UserRepository