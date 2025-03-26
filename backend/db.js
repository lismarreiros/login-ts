import Database from 'better-sqlite3';

const db = new Database('./users.db', { verbose: console.log });

const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    );
  `;
  db.prepare(query).run();
};

createTable();

export default db;
