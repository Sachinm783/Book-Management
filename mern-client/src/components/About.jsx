import React from 'react'
import img3 from "../assets/img3.jpeg"

const About = () => {
  return (
    <div className='container bg-pink-400 lg:px-24 mt-16 py-12  px-4 my-16'>
      <br/>
      
<img  className="md:w-10/11 max-w-[450px] max-h-[450px] py-9 px-9 "  src={img3} alt=""/>
<h3 className='md-10 text-lg md:w-5/6'>1. User-Friendly Interface:
- The front-end is developed using React, providing a responsive and intuitive user interface that works seamlessly on various devices, from desktops to smartphones.

<br/>

2. Inventory Management:
- The application includes a comprehensive inventory management system that allows store managers to add, edit, and delete books, track stock levels, and manage book details such as title, author, genre, price, and more.
<br/>


3. User Authentication:
- User authentication and authorization are implemented to ensure secure access to the system. Customers can create accounts, log in, and place orders, while store managers have access to advanced features for managing the inventory.
<br/>


4. Responsive Design:
- The website is designed to be responsive, ensuring a consistent and user-friendly experience across various devices and screen sizes.
<br/>

5. Admin Dashboard:
- Store managers can access a dedicated admin dashboard where they can view real-time inventory status, monitor sales, and manage orders, customers, and user accounts.</h3>
</div>
  )
}

export default About


