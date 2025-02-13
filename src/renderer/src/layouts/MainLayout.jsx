import { Outlet, Link } from 'react-router-dom'
import TopNavigation from '../components/TopNavigation'
import SideNavigation from '../components/SideNavigation'

function MainLayout() {
  return (
    <>
      <div className="">
        {/* <TopNavigation /> */}
        <SideNavigation />
        {/* <Outlet /> */}
      </div>
    </>
  )
}

export default MainLayout
