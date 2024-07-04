'use client'

import Image from "next/image"

const Home = () => {
  const onClickMenu = () => {
    window.location.href = '/menu'
  }
  return (
    <div className='flex flex-col items-center justify-center w-svw h-svh'>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[300px] max-h-[325px]">
        <Image src="/bottom-right.png" alt='bottom right' fill />
      </div>
      <div className='absolute top-0 left-0 w-[50vw] h-[50vw] max-w-[300px] max-h-[325px] rotate-180'>
        <Image src="/bottom-right.png" alt='top left' fill />
      </div>
      <div className='absolute top-0 right-0 w-[50vw] h-[11.07vw]'>
        <Image src="/top-right.png" alt='top right' fill />
      </div>
      <div className='absolute left-0 bottom-0 w-[50vw] h-[16.64vw]'>
        <Image src="/bottom-left.png" alt='bottom left' fill />
      </div>
      <div className='w-4/5 max-w-[600px] landscape:max-h-[50svh]'>
        <Image src="/logo.png" alt='logo almavida' width={1341} height={791} />
      </div>
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
