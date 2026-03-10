import React from 'react'

function Home() {
  return (
    <div className='flex flex-col m-4 justify-center'>
        <h1 className='text-4xl text-center font-extrabold text-fuchsia-950 pt-10'>Welcome to User Management system </h1>
        <div className='flex m-10'>
            <img className='w-80 p-5' src="https://thumbs.dreamstime.com/b/computer-clip-art-angry-user-png-jpg-sublimation-cartoon-digital-download-to-destroy-his-baseball-bat-file-368880593.jpg" alt="" />
            <div className='text-2xl text-amber-50 p-5 bg-amber-950 rounded'>
            <p className='p-3'>
            # This is a simple user management system built with React for the frontend and Node.js for the backend.</p>
            <p className='p-3'> # You can add new users, view a list of existing users, and see detailed information about each user. </p>
            <p className='p-3'> # The application is designed to be easy to use and provides a clean interface for managing user data.</p>
            </div>
         </div>
        
        <h2 className='text-4xl text-center font-extrabold text-fuchsia-950 pt-10'>
            Happy Managing!
        </h2>
    </div>
  )
}

export default Home