import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//react icons 
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contacts/AuthProvider';
const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]= useState(false);
    const [isSticky,setIsSticky]=useState(false);

    const {user}= useContext(AuthContext);
    console.log(user)
    //toggle menu
    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
const handleScroll=()=>{
    if(window.scrollY>100){
        setIsSticky(true);
    }
    else{
        setIsSticky(false);
    }
}

window.addEventListener("scroll",handleScroll);
return()=>{
    window.addEventListener("scroll",handleScroll);
}
    },[])

    //navigation items
    const navItems=[
        {link:"Home",path:"/"},
        {link:"About",path:"/about"},
        {link:"Shop",path:"/shop"},
        {link:"Sell Your Book",path:"/admin/dashboard"},
    ]


  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-yellow-300":""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/*logo*/}
                <Link to="/" className='text-2x1 font-bold text-blue-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link>
  {/* nav items for large devices */ }
  
 <ul className='md:flex space-x-12 hidden'>
{
    navItems.map(({link,path})=> <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
}

 </ul>

 {/*btn for lg devices*/}
 <div className='space-x-12 hidden lg:flex items-center'>
    {/* search button  */}
    <button className="btn btn-ghost btn-circle hidden lg:flex">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>



    {/* cart is added */}
  {/* menu btn */}
    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
 
 
 
 
 {/* {
    user? user.email: ""
 } */}
 
 </div>
{/* menu btn for the mobile device  */}
<div className='md:hidden'>
<button onClick={toggleMenu} className='text-black focus:outline-none'>
    {
        isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
    }
</button>

</div>
        </div>
{/* cart items  */}



{/** navitems for small devices  */}
<div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen? "block fixed top-0 right-0 left-0" : "hidden"}`}>
    {
        navItems.map(({link,path})=> <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer'>{link}</Link>)
    } 
</div>

        </nav>
    </header>
  )
}

export default Navbar
