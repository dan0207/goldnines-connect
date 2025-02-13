import { useEffect, useState } from 'react'
import Users from './components/Users'
import Login from './components/Login'
function App() {
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  if (!user) <Users user={user} onLogout={handleLogout} />

  return <Login onLogin={setUser} />
}

export default App
