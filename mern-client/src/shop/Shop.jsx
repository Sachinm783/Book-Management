import { Card } from "flowbite-react";
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contacts/AuthProvider';
const Shop = ({book}) => {
  
  
  const [books, setBooks]=useState([]);
const {user} = useContext(AuthContext)
// console.log(user)
// add to cart
  const handleAddtoCart= (book)=>{
      //  console.log("btn is clicked",book)
  }

useEffect(()=>{
  fetch("http://localhost:3090/all-books").then(res=> res.json()).then(data => setBooks(data));
},[])
   
    return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5x1 font-bold text-center'>All,books are here!</h2>
    
    <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
{
  books.map(book=>  <Card
  >
    <img src={book.imageUrl} alt="" className='h-96' />
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   <p className='text-center'> 
    {book.bookTitle}
   </p>
    </h5>
    <p className="font-normal text-center  text-gray-700 dark:text-gray-400">
      <p>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    </p>
    {/* payment link */}
    <div class='mt-3'>
    <a href="https://www.ebooks.com/cart/paymentmethodselect/">
        <button class='bg-red-700 font-semibold text-white py-2 px-4 rounded mb-4'>BUY</button>
    </a>
    {/* https://archive.org/details/adventureofsherl0000unse/page/4/mode/2up?ref=ol&view=theater */}
    {/* BHAGAVAD GITA BOOK URL-https://www.flipbookpdf.net/web/site/9ea4270b799228cfd901b4e96de7ee5d316f614d202405.pdf.html */}
    {/* HARRY POTTER -https://heyzine.com/flip-book/b9e076f06e.html#page/1 */}
    <a href="https://heyzine.com/flip-book/b9e076f06e.html#page/1r">
        <button class='bg-yellow-300 font-semibold text-white py-2 px-4 rounded mt-4'>PREVIEW</button>
    </a>
</div>


  </Card>
)
}

    </div>
     </div>
  )
}

export default Shop
