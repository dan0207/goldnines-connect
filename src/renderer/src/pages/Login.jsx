import { useState } from 'react'
import logoBlack from '../assets/images/logos/logo-black.png'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = () => {
    console.log('Success')
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="shadow-lg p-4 rounded-4" style={{ width: '20rem' }}>
          <img src={logoBlack} className="img-fluid d-flex mx-auto mb-3" width={80} alt="" />
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
              {console.log(username)}
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
              {console.log(password)}
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 rounded-4 mb-2" onClick={handleLogin}>
              Login
            </button>
            <button className="btn btn-sm btn-outline-primary w-100 rounded-4 mb-3">
              Register
            </button>
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
