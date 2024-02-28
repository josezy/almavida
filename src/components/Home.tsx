
import bottomRight from '../assets/bottom-right.png'
import topRight from '../assets/top-right.png'
import bottomLeft from '../assets/bottom-left.png'
import logo from '../assets/logo.png'

const Home = () => {
    const onClickMenu = () => {
        window.location.href = '/menu'
    }
    return (
        <div className='flex flex-col items-center justify-center w-svw h-svh'>
            <img src={bottomRight} alt='bottom right' className='absolute bottom-0 right-0 w-[50vw] max-w-[300px]' />
            <img src={bottomRight} alt='top left' className='absolute top-0 left-0 w-[50vw] max-w-[300px] rotate-180' />
            <img src={topRight} alt='top right' className='absolute top-0 right-0 w-[50vw]' />
            <img src={bottomLeft} alt='bottom left' className='absolute left-0 bottom-0 w-[50vw]' />
            <img src={logo} alt='logo almavida' className='w-4/5 max-w-[800px] landscape:max-h-[50svh] landscape:w-auto' />
            <div
                className='text-5xl md:text-7xl text-darkBlue font-bold hover:underline hover:opacity-80 cursor-pointer z-10'
                onClick={onClickMenu}
            >
                Menú
            </div>
        </div>
    )
}

export default Home
