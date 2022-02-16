import './Topbar.scss';
import {FaGithubSquare,FaInstagramSquare,FaLinkedin,FaSearch} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarLeft'>
            <a href="#a"><i className='iconLeft'><FaGithubSquare/></i></a>
            <a href="#b"><i className='iconLeft'><FaInstagramSquare/></i></a>
            <a href="#c"><i className='iconLeft'><FaLinkedin/></i></a>
        </div>

        <div className='topbarCenter'>
            <ul className='topbarList'>
                <li className='topbarItem'>Home</li>
                <li className='topbarItem'>About</li>
                <li className='topbarItem'>Contact</li>
                <li className='topbarItem'>Logout</li>
            </ul>
        </div>
        <div className='topbarRight'>
            <img className="topbarImage"src='/obito.png' alt='obito'/>
            <i className='iconRight'><FaSearch/></i>
        </div>
    </div>
  )
}

export default Topbar