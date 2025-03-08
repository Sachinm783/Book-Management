import React, {useEffect, useState} from 'react'
import BookCards from '../components/BookCards';
import {} from "react-icons/fa"

const BestSellerBooks = () => {
    const[books, setbooks]=useState([]);

    useEffect( ()=>{
fetch("http://localhost:3090/all-books").then(res=>res.json()).then(data=>setbooks(data.slice(3,8)))

    },[])
  return (
    
    <div>
        <BookCards books={books} headline="BEst SEller BOoks"/> {/* // fliter booksś */}
        
    </div>
  

  )
}

export default BestSellerBooks 