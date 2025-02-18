import { Outlet, Link } from 'react-router-dom'
import TopNavigation from '../components/TopNavigation'
import SideNavigation from '../components/SideNavigation'

function MainLayout() {
  return (
    <>
      <div className="d-flex">
        <SideNavigation />
        <div className="m-4 shadow-lg border rounded-3 w-100 bg-light-subtle">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
