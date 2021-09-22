import React, { useContext } from 'react'
import '../App.css';
import Book from './Book';
import { BookContext } from '../contexts/BookContext';

function Books() {
   const value = useContext(BookContext);
   let books = value[0];
   return (
      <div className="books">
         {books.map(book => (
            <Book title={book.title} authors={book.authors} isbn={book.isbn} key={book.isbn} />
         ))}
      </div>
   )
}

export default Books
