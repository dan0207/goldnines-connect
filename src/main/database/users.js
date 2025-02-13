import db from './db.js'

const UsersAPI = {
  createUser: (user) => {
    try {
      const stmt = db.prepare('INSERT INTO users (name, email, role) VALUES (?, ?, ?)')
      const info = stmt.run(user.name, user.email, user.role || 'User')
      return { success: true, id: info.lastInsertRowid }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  readUsers: () => db.prepare('SELECT * FROM users').all(),

  updateUser: (user) => {
    try {
      const stmt = db.prepare('UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?')
      const info = stmt.run(user.name, user.email, user.role, user.id)
      return { success: info.changes > 0 }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  deleteUser: (id) => {
    try {
      const stmt = db.prepare('DELETE FROM users WHERE id = ?')
      const info = stmt.run(id)
      return { success: info.changes > 0 }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}

export default UsersAPI
