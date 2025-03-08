import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';
import { FaFilter } from 'react-icons/fa6';

const OtherBooks = () => {
    const[books,setbooks]=useState([]);
    const[sortOption,setSortOption]=useState("default");
    useEffect( ()=>{
        fetch("http://localhost:3090/all-books").then(res=>res.json()).then(data=>setbooks(data.slice(0,8)))
        },[])

// sorting based on a-z
const handleSortChange = (Option) =>{
  setSortOption(Option);
  let sortedItems=[...books];

  // logic
  switch(Option){
    case "A-Z":
sortedItems.sort((a,b) => a.name.localCompare(b.name))
    break;

    case "Z-A":
      sortedItems.sort((a,b) => b.name.localCompare(a.name))
      break;
      default:
        break;
  }
  
}





          return (
            
            <div className='bg-purple-400'>
              <div className='flex justify-end mb-4 rounded-sm'>
                {/* filter */}
          <div className='bg-black p-2'>
<FaFilter className='h-4 w-4 text-white'/>
 </div>
{/* sorting */}
<select name="sort" id="sort"
 onChange={(e)=>handleSortChange(e.target.value)}
 value={sortOption}
 className='bg-black text-white px-2 py-1 rounded-sm' 
>
<option value="default">Default</option>
<option value="A-Z">A-Z</option>
<option value="Z-A">Z-A</option>
</select>
        </div>
                <BookCards books={books} headline="OTHER BOOKS"/>
            </div>
          )
        }

export default OtherBooks


