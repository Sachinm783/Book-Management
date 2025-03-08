import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contacts/AuthProvider';
const Cards = ({books}) => {
  const{bookTitle,authorName,imageUrl,category,_id} = books;
const{user}= useContext(AuthContext)
// console.log(user)
  const handleAddtoCart = (books)=>{
    // console.log("btn add to card",books)
    if(user && user?.email){
      const cartItem={BookItemId: _id, bookTitle,authorName,imageUrl,category,email:user.email};
   console.log(cartItem)
    }
  }

  return (
    
    <div to={'/Shop/${item._id}'} className='card shadow-xl relative mr-5 md:my-5'>

        <div className="card w-96 bg-base-100 shadow-xl">
          <Link to={`/Shop/${books._id}`}>
  <figure><img src={books.imageUrl} alt="" className='hover:scale-105 transition-all duration-300 md:h-72'/>
  </figure>
  </Link>
  <div className="card-body">
    <Link to={`/Shop/${books._id}`}><h2 className="card-title">{books.bookTitle}</h2></Link>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between items-center mt-2">
      <h5 className="font-semibold">
        <span className='text-sm text-red-500'>$</span>{books.price}
      </h5>
      <button className="btn btn-primary" onClick={()=>handleAddtoCart(books)}>ADD 2 CARt</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Cards;