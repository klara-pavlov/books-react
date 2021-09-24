import React, { useState, useEffect, createContext, useHistory } from 'react'

export const BookContext = createContext();
require('dotenv').config();
export const BookProvider = (props) => {
 const [books, setBooks] = useState([]);
 //const [search, setSearch] = useState('');
 //const [searchResults, setSearchResults] = useState([]);
 //const [favorites, setFavorites] = useState([]);


 useEffect(() => {
  getBooks();
 }, [])


 const getBooks = async () => {
  let response = await fetch(
   'https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40'
  );
  debugger;
  let data = await response.json();
  setBooks(data.items);
  console.log(data.items);
 }

 return (<BookContext.Provider value={[books]}>
  {props.children}
 </BookContext.Provider>);
}