import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from './db'

const SECRET_KEY = 'Michaela'

export function loginUser(username, password) {
  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
    if (err) return callback(err)
    if (!user) return callback(new Error('User not found'))

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return callback(err)
      if (!isMatch) return callback(new Error('Invalid password'))

      const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
        expiresIn: '1h'
      })
      callback(null, { token, user: { id: user.id, username: user.username } })
    })
  })
}

// export function registerUser(username, password) {
//   const hashedPassword = bcrypt.hashSync(password, 10)
//   try {
//     const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)')
//     stmt.run(username, hashedPassword)
//     return { success: true, message: 'User registered successfully' }
//   } catch (error) {
//     return { success: false, message: 'Username already exists' }
//   }
// }
