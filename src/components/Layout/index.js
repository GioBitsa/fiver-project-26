import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags"></span>
{/* Removed /body and /html so it wont appear on front page */}
        <Outlet />
        <span className="tags bottom-tags">
          
          {/* Removed /body and /html so it wont appear on front page */}
          <br />
          <span className="bottom-tag-html"></span>
          {/* Removed /body and /htmlfrom &lt;&gt; so it wont appear on front page */}
        </span>
      </div>
    </div>
  )
}

export default Layout
