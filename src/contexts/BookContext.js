import React, { useState, useEffect, createContext } from 'react'

export const BookContext = createContext();
require('dotenv').config();
export const BookProvider = (props) => {
 const [books, setBooks] = useState([]);
 var [favorites, setFavorites] = useState([]);

 const localStorage = window.localStorage;

 //const [search, setSearch] = useState('');
 //const [searchResults, setSearchResults] = useState([]);


 useEffect(() => {
  getBooks();
 }, [])


 const getBooks = async () => {
  let response = await fetch(
   'https://www.googleapis.com/books/v1/volumes?q=react&maxResults=40'
  );
  let data = await response.json();
  setBooks(data.items);
 }





 function handleCardClick(e) {
  console.log("card click");
 }


 function handleAddToFavorites(e) {
  debugger;
  e.stopPropagation();
  var clickedFavoritesBtn = e.target;
  var btnClassName = clickedFavoritesBtn.className;
  console.log(clickedFavoritesBtn.className);
  var bookId = e.target.parentNode.parentNode.id;

  switch (btnClassName) {
   case "far fa-heart":
    console.log("tuuuu 1");
    clickedFavoritesBtn.className = "fas fa-heart";
    favorites = JSON.parse(localStorage.favorites);
    console.log("Favorites from local storage added to favorites:", favorites);
    setFavorites([...favorites, bookId]);
    console.log("New item added to favorites:", favorites);
    break;
   case "fas fa-heart":
    console.log("tuuuu 2");
    clickedFavoritesBtn.className = "far fa-heart";
    //a.filter(e => e.name === "tc_001");
    favorites = JSON.parse(localStorage.favorites);
    console.log("Favorites before unfavorite:", favorites);
    favorites = favorites.filter(id => id !== bookId);
    console.log("Favorites after unfavorite:", favorites);
    setFavorites(favorites);
    break;
   default:
    break;
  }


 }





 return (<BookContext.Provider value={{ books, handleAddToFavorites, favorites, localStorage, handleCardClick }}>
  {props.children}
 </BookContext.Provider>);
}