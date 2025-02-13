import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ServiceDesk from './pages/ServiceDesk'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

// import ThemeProvider from './components/ThemeProvider'   //for theme

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/servicedesk" element={<ServiceDesk />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
