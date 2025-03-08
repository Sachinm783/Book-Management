import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
//react icons 
import { Avatar } from "flowbite-react";
import { FaStar } from "react-icons/fa6";
import proPic from "../assets/profile.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 1g:px-24'> 
    <h2 className='text-5x1 font-bold text-center mb-10 loading-sung'>Our Customers </h2>
   <div>

   <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2x1 bg-white py-6 px-7 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gxp-2'>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>



                </div>
                <div className='mt-3'>
                    <p className='mb-5'>THE WEBSITE IS COMPLETELY USER-FRIENDLY AND SELLS GENUINE BOOKS. ❤️👌✌️</p>
                        <Avatar 
                         alt="avatar of Jese"
                         img={proPic}
                        className='w-10  rounded'
                         />
                         <h5 className='text-lg font-medium'>SHUBU</h5>
                         <p className='text-base'>REVIEWER</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-6 px-7 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gxp-2'>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>



                </div>
                <div className='mt-3'>
                    <p className='mb-5'>USER,FRIENDLY WEB SUPPORT , CREATIVE IDEA💕.</p>
                        <Avatar 
                         alt="avatar of Jese"
                         img={proPic}
                        className='w-10  rounded'
                         />
                         <h5 className='text-lg font-medium'>MANASA</h5>
                         <p className='text-base'>REVIEWER</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-6 px-7 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gxp-2'>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>



                </div>
                <div className='mt-3'>
                    <p className='mb-5'> GOOD BOOKS AVAILABLE .</p>
                        <Avatar 
                         alt="avatar of Jese"
                         img={proPic}
                        className='w-10  rounded'
                         />
                         <h5 className='text-lg font-medium'>RADCHU</h5>
                         <p className='text-base'>REVIEWER</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-6 px-7 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gxp-2'>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>



                </div>
                <div className='mt-3'>
                    <p className='mb-5'>BOOKS RECEIVED SUCCESSFULLY WITHOUT DAMAGE TQ LITERARY ✌️👌.</p>
                        <Avatar 
                         alt="avatar of Jese"
                         img={proPic}
                        className='w-10  rounded'
                         />
                         <h5 className='text-lg font-medium'>PAVI</h5>
                         <p className='text-base'>REVIEWER</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2x1 bg-white py-6 px-7 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gxp-2'>
<FaStar/>
<FaStar/>
<FaStar/>
<FaStar/>



                </div>
                <div className='mt-3'>
                    <p className='mb-5'>USEFULL.ALL BOOKS ARE AVAILABLE👌.</p>
                        <Avatar 
                         alt="avatar of Jese"
                         img={proPic}
                        className='w-10  rounded'
                         />
                         <h5 className='text-lg font-medium'>BB</h5>
                         <p className='text-base'>REVIEWER</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>

   </div>
   
    </div>
  )
}

export default Review