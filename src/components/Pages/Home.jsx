import './Home.scss'
import Topbar from '../Topbar/Topbar'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Posts from '../Posts/Posts'

const Home = () => {
  return (
    <>
      <Topbar/>
      <Header/>
      <div className='home'>
          <Posts/>
          <Sidebar/>
      </div>
    </>
    
  )
}

export default Home;