import { app } from 'electron'
import { join } from 'path'
import Database from 'better-sqlite3'

const dbPath = join(app.getPath('userData'), 'database.sqlite')
const db = new Database(dbPath, (err) => {
  if (err) console.error('Error opening database:', err.message)
  else console.log('Connected to SQLite database.')
})

export default db
