import './Sidebar.scss'
import {FaGithubSquare,FaInstagramSquare,FaLinkedin} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img className='sidebarImg' src='naruto.png' alt="naruto" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Illum quisquam itaque officia nostrum praesentium ratione adipisci et veritatis impedit,
          nihil nam fuga accusantium saepe quod quam earum totam sequi minima!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Item 1</li>
          <li className="sidebarListItem">Item 2</li>
          <li className="sidebarListItem">Item 3</li>
          <li className="sidebarListItem">Item 4</li>
          <li className="sidebarListItem">Item 5</li>
          <li className="sidebarListItem">Item 6</li>
        </ul>
      </div>
      <div className="sibebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className='sidebarIcon'><FaGithubSquare /></i>
          <i className='sidebarIcon'><FaInstagramSquare /></i>
          <i className='sidebarIcon'><FaLinkedin /></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar