import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitle">
          <span className='headerSm'>React</span>
          <span className='headerXl'>Blog</span>
          <img className="headerImg" src='banner.png' alt=''/>
        </div>
    </div>
  )
}

export default Header