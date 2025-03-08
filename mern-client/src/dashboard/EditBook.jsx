import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button,Label, TextInput, Textarea } from "flowbite-react";
import { Form } from "react-router-dom";

const EditBook = () => {
  const {id} = useParams();
const {bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl} = useLoaderData()
  



const bookCategories = [
  "Fiction",
  "Non-Fiction",
  "History",
  "Programming",
  "Science Fiction",
  "Fantasy",
  "Horror",
  "Bibiliography",
  "AutoBiography",
  "Mistry",
  "Self-Health",
  "Memoir",
  "Business",
  "Educational",
  "comic",
  "Children Books",
  "Travel",
  "Research",
  "Religion",
  "Hanuman"
]
const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);

const handleChangeSelectedValue = (event) => {
  console.log(event.target.value);
  setSelectedBookCategory(event.target.value);

}
// book handle submission
const handleUpdate = (event)=> {
event.preventDefault();
const Form= event.target;

const bookTitle = Form.bookTitle.value;
const authorName=Form.authorName.value;
const imageUrl=Form.imageUrl.value;
const category=Form.categoryName.value;
const bookDescription=Form.bookDescription.value;
const bookPdfUrl=Form.bookPdfUrl.value;
const updateBookObj={
bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
}
// console.log(bookObj)

// Update book data
fetch(`http://localhost:3090/book/${id}`,{
  method:"PATCH",
  headers:{
    "Content-Type": "application/json"
  },
body: JSON.stringify(updateBookObj)
}).then(res=>res.json()).then(data=>{
  


alert("Book is Updated successfully!!!")
})

}
return (
  
    <div className='px-4 my-10'>
    <h2 className='mb-8 text-3x1 font-bold'><br/>Update the Book Data </h2>
    <br/><Form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
   {/* first row */}
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="bookTitle" value="Book Title" />
      </div>
      <TextInput id="bookTitle" defaultValue={bookTitle} name="bookTitle" type="text" placeholder="Book Name" required />
    </div>
    {/* AUTHOR NAME SECTION */}
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="authorName" value="Author Name" />
      </div>
      <TextInput id="authorName" defaultValue={authorName} name="authorName" type="text" placeholder="Author Name" required />
    </div>
    </div>
    {/* second row */}
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
      <div className="mb-2 block">
        <Label htmlFor="imageUrl" value="Book Img URl" />
      </div>
      <TextInput id="imageUrl" defaultValue={imageUrl} name="imageUrl" type="text" placeholder="Book img url" required />
    </div>
    {/* CATEGORY NAME SECTION */}
    <div className='lg:w-1/2'>
    <div className="mb-2 block">
        <Label htmlFor="inputState" value="Book Category" />
      </div>
      <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
        {
          bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
        }
      </select>
    </div>
    </div>
{/* BOOKdescriptions */}
<div>
      <div className="mb-2 block">
        <Label htmlFor="bookDescription" value="book Description" />
      </div>
      <Textarea id="bookDescription" defaultValue={bookDescription} name="bookDescription"placeholder="Write your Book description..." className="w-full" required rows={6} />
    </div>
{/* Book pdf Link */}
<div>
      <div className="mb-2 block">
        <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
      </div>
      <TextInput id="bookPdfUrl"  defaultValue={bookPdfUrl} name="bookPdfUrl" type="text" placeholder="Book pdf url" required />
    </div>
<Button type="submit" className='mt-15'>Update Book</Button>




</Form>
   
  </div>
  
)
}

export default EditBook
