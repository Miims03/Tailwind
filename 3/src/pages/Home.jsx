import React from 'react'

function Home() {
  return (
    <div className='h-auto flex flex-col justify-center items-center '>
      {/* // <div className='bg-red-500 h-screen w-full'>  */}
      <h1 className='mt-5 text-5xl font-bold text-gray-900'>Home</h1>
      <div className='mt-10 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-1/2'>
        <a href="" className='shadow-lg bg-green-600 rounded-lg font-semibold text-zinc-50 hover:bg-green-700 duration-300 active:bg-green-800 w-full h-10
        flex justify-center items-center text-xl animate-fadein'> Click here!</a>
        <a href="" className='shadow-lg bg-red-600 rounded-lg font-semibold text-zinc-50 hover:bg-red-700 duration-300 active:bg-red-800 w-full h-10
        flex justify-center items-center text-xl animate-fadeinn '> Click here!</a>
        <a href="" className='shadow-lg bg-blue-600 rounded-lg font-semibold text-zinc-50 hover:bg-blue-700 duration-300 active:bg-blue-800 w-full h-10
        flex justify-center items-center text-xl animate-fadeinnn'> Click here!</a>
      </div>
    </div>
  )
}

export default Home