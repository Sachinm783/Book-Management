import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24  flex items-center bg-purple-400'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
      {/* lefţside */}

<div className='md:w-1/2 space-y-8 h-full'> 
    <h2 className='text-6x1 font-bold leading-snug text-black'>Buy and Sell Your Books<span className='text-blue-700'>for the best prices</span></h2>
<p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab excepturi impedit magni. Quo dolore minus saepe, eum ullam provident? Tenetur id fugit in ex placeat quaerat reiciendis maiores soluta nulla.</p>
<div>
    <input type="search" name="search" id="search" placeholder='search a book' className='py-2 px-2 rounded-s-sm outline-none' /> 
<button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
</div>
</div>
{/* {right side} */}
<div>
    <BannerCard></BannerCard>
</div>

</div>
    </div>
  )
}

export default Banner
