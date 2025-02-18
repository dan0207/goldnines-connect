import { useContext } from 'react'
import logoBlack from '../assets/images/logos/logo-black.png'
import logoWhite from '../assets/images/logos/logo-white.png'
import id from '../assets/images/photos/id.jpg'
import ThemeContext from '../contexts/ThemeContext'
import ThemeSwitch from './ThemeSwitch'

function SideNavigation() {
  const { darkMode, toggleDarkTheme } = useContext(ThemeContext)

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 bg-body-tertiary vh-100 shadow-lg"
        style={{ width: '250px' }}
      >
        <a
          href="/"
          className="d-flex align-items-center justify-content-center link-body-emphasis p-3 mt-2 text-decoration-none"
        >
          <img src={!darkMode ? logoBlack : logoWhite} width={35} height={35} />
          <span className="ms-2 fs-4">Michaela</span>
        </a>

        <hr className="m-0" />
        <ul className="nav nav-pills flex-column mb-auto p-3">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15.21 2H8.75A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.21 2m1.89 10.69h-.14a.76.76 0 0 1-.74-.62l-.18-1l-1.31 2a1.71 1.71 0 0 1-2.32.5l-2.27-1.44a.18.18 0 0 0-.13 0a.2.2 0 0 0-.13.08L7.56 15.3a.77.77 0 0 1-.6.3a.74.74 0 0 1-.45-.15a.75.75 0 0 1-.15-1l2.32-3.09a1.71 1.71 0 0 1 2.25-.43l2.28 1.44a.23.23 0 0 0 .28-.06l1.34-2l-1.08.15a.753.753 0 0 1-.28-1.48l2.76-.51h.36a.12.12 0 0 1 .08 0l.15.08l.15.12c.036.043.066.09.09.14a.47.47 0 0 1 .06.15l.52 2.8a.75.75 0 0 1-.54.93"
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="me-2" width="20" height="20" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.5 5c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C19 6.393 19 7.096 19 8.5V18c0 1.886 0 2.828-.586 3.414C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586C5 20.828 5 19.886 5 18V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C6.393 5 7.096 5 8.5 5" />
                  <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2Z" />
                  <path strokeLinecap="round" d="M9 12h6m-6 4h4" />
                </g>
              </svg>
              Service Desk
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="me-2" width="20" height="20" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="M27 22v-5a2.002 2.002 0 0 0-2-2h-8v-5h3a2.002 2.002 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2h-8a2.002 2.002 0 0 0-2 2v4a2.002 2.002 0 0 0 2 2h3v5H7a2.002 2.002 0 0 0-2 2v5H2v8h8v-8H7v-5h8v5h-3v8h8v-8h-3v-5h8v5h-3v8h8v-8ZM12 4h8v4h-8ZM8 28H4v-4h4Zm10 0h-4v-4h4Zm10 0h-4v-4h4Z"
                />
              </svg>
              Directory
            </a>
          </li>
        </ul>
        <hr className="m-0" />
        <div className="dropdown p-3 d-flex">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle me-auto"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={id} alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>Dan</strong>
          </a>
          <ThemeSwitch />
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default SideNavigation
