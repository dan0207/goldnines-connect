import { app } from 'electron'
import { join } from 'path'
import Database from 'better-sqlite3'

const dbPath = join(app.getPath('userData'), 'database.sqlite')
const db = new Database(dbPath, { verbose: console.log })

export default db
