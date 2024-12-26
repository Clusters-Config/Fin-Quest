import React from 'react'

const Learning_path = () => {
  return (
    <>
    <div>
        <div >
            <h1 className='text-center text-3xl mt-8 text-blue-900 font-extrabold'>Your Personalised Learning Path</h1>
            <p className='text-center text-1xl mt-3'> Embark on a journey designed to make you a financial expert,step by step!</p>
        </div>
          <h2 className='ml-9 mt-9 text-xl text-blue-900 font-bold'>Progress Tracker</h2>
          <div className=' bg-gray-100 rounded-full h-7  mt-5 mx-10'>
            <div className='bg-green-600 h-7 rounded-full w-8/12 ' ><h3 className='text-center text-white text-sm pt-1'>70% Completed</h3></div>
          </div>
        <div>
        <div className=''>
          <h1 className='ml-9 mt-12 text-xl text-blue-900 font-bold'>Learning Timeline</h1>
          <div className='bg-white w-auto h-auto mx-9 rounded-xl mt-8 pb-6'>
            <div className='pt-1 flex'>
              <div className='w-9 h-9 bg-green-600 rounded-full mx-7 mt-7 '><h1 className='py-1 px-3.5 text-white'>1</h1></div>
              <div className='mt-5' >
                  <h1 className='text-xl font-extrabold'>Basic Financial Concepts</h1>
                  <p  className='text-sm'>Learn the  eessentials of saving, budgeting and opening accounts.</p>
              </div>
            </div>
            <div className='pt-2 flex'>
              <div className='w-9 h-9 bg-yellow-600 rounded-full mx-7 mt-7 '><h1 className='py-1 px-3.5 text-white'>2</h1></div>
              <div className='mt-6' >
                  <h1 className='text-xl font-extrabold'>Understanding Interest Rates</h1>
                  <p className='text-sm'>Explore how interest works for loans and savings.</p>
              </div>
            </div>
            <div className='pt-2 flex'>
              <div className='w-9 h-9 bg-blue-600 rounded-full mx-7 mt-7 '><h1 className='py-1 px-3.5 text-white'>3</h1></div>
              <div className='mt-6' >
                  <h1 className='text-xl font-extrabold'>Investment Basics</h1>
                  <p className='text-sm'>Dive into simple investment strategies to grow your wealth.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
    </div>
    </>
    
  )
}

export default Learning_path;