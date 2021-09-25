import React from 'react'
import '../App.css';
import Book from './Book';

function Books({ books }) {

   return (

      <div className="books">
         {books.map(book => (
            <Book book={book} id={book.id} key={book.id} />
         ))}
      </div>
   )
}

export default Books
