import { useEffect, useState } from 'react'
import logoLight from './../assets/images/logo-black.png'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    e.preventDefault()
    const response = await window.auth.login({ username, password })
    setMessage(response.message)
    if (response.success) {
      onLogin(response.user)
      localStorage.setItem('user', JSON.stringify(response.user))
      window.location.reload()
    } else {
      setError(response.message)
    }
  }

  const handleRegister = async () => {
    e.preventDefault()
    const response = await window.auth.register({ username, password })
    setMessage(response.message)
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="shadow-lg p-4 rounded-4" style={{ width: '20rem' }}>
          <img src={logoLight} className="img-fluid d-flex mx-auto mb-3" width={80} alt="" />
          <h2 className="text-center  mb-3">LOGIN</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 rounded-4 mb-2"
              onClick={handleLogin}
            >
              Login
            </button>
            <button type="" className="btn btn-sm btn-outline-primary w-100 rounded-4 mb-3">
              Register
            </button>
            {message && <p className="text-red-500">{message}</p>}
            {console.log(message)}
          </form>
          <div className="d-flex align-items-center">
            <a className="" type="button">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
