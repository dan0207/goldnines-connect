import { useEffect, useState } from 'react'

function Users(users, onLogout) {
  // const [users, setUsers] = useState([])

  useEffect(() => {
    window.api.users.read().then(setUsers)
  }, [])

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.username})
          </li>
        ))}
      </ul>
      <button onClick={onLogout} className="bg-red-500 text-white p-2 mt-4">
        Logout
      </button>
    </div>
  )
}

export default Users
