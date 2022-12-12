
import bottomRight from '../assets/bottom-right.png'
import topRight from '../assets/top-right.png'
import bottomLeft from '../assets/bottom-left.png'
import logo from '../assets/logo.png'

const Home = () => {
    return (
        <div className='splash-container'>
            <img src={bottomRight} alt='bottom right' className='bottom-right' />
            <img src={bottomRight} alt='top left' className='top-left' />
            <img src={topRight} alt='top right' className='top-right' />
            <img src={bottomLeft} alt='bottom left' className='bottom-left' />
            <img src={logo} alt='logo almavida' className='logo' />
        </div>
    )
}

export default Home
