import bcrypt from 'bcryptjs'
import db from './db'

export function loginUser(username, password) {
  const stmt = db.prepare('SELECT * FROM users WHERE username = ?')
  const user = stmt.get(username)

  if (!user) return { success: false, message: 'User not found' }

  const validPassword = bcrypt.compareSync(password, user.password)

  if (!validPassword) return { success: false, message: 'Incorrect password' }

  return { success: true, message: 'Login successful', user }
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
