const db = require('../config/db');

class Lead {
  static async create({ name, email, company = null, message = null }) {
    const [result] = await db.execute(
      'INSERT INTO leads (name, email, company, message) VALUES (?, ?, ?, ?)',
      [name, email, company, message]
    );
    return result.insertId;
  }

  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM leads');
    return rows;
  }
}

module.exports = Lead;