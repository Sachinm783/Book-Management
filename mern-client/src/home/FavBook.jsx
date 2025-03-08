import React from 'react'
import FavBookImg from  "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 1g:px-24 my-20 flex flex-col md:flex-row justify-between item-center gap-12 bg-yellow-200'>
      <div className='md: w-1/2'>
        <img src={FavBookImg} alt=""  className='rounded md:w-10/12'/>

      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5x1 font-bold my-5 md:w-3/4 loading-snug'>FIND YOUR FAVORITE <span className='text-blue-700 font-bold '>Book HERE!</span></h2>
        
<p className='md-10 text-lg md:w-5/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium neque, eligendi praesentium, commodi, aliquam nulla numquam doloremque ratione distinctio tempore nam vero? Nulla, hic veniam laborum dignissimos sit ratione et!</p>
{/* {stats} */}

       <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>  
       <div>
          <h3 className='text-3x1 font-bold'>800+</h3>
          <p className='text-base'>Book Listening</p>
        </div>
        <div>
          <h3 className='text-3x1 font-bold'>600+</h3>
          <p className='text-base'>Register users</p>
        </div>
        <div>
          <h3 className='text-3x1 font-bold'>1500+</h3>
          <p className='text-base'>spl downloaded</p>
        </div>
       </div>
<Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook