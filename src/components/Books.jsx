import React, { useContext } from 'react'
import '../App.css';
import Book from './Book';
import { BookContext } from '../contexts/BookContext';



function Books() {
   const value = useContext(BookContext);
   let books = value[0];
   console.log(books);
   return (
      <div className="books">
         {books.map(book => (
            <Book book={book} key={book.id} />
         ))}
      </div>
   )
}

export default Books
