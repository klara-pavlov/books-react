import React from 'react'
import '../App.css';
function Book(props) {
 return (
  <div className="bookCard">
   <div className="imgHolder">
    <img src={props.book.volumeInfo.imageLinks === undefined
     ? "https://via.placeholder.com/120"
     : props.book.volumeInfo.imageLinks.thumbnail}
     alt="img" />
   </div>
   <div className="bookCardContent">
    <h2>{props.book.volumeInfo.title}</h2>
    <h4>{[props.book.volumeInfo.authors]}</h4>
    <p>{props.book.searchInfo === undefined
     ? ""
     : props.book.searchInfo.textSnippet}</p>
   </div>
   <button className="favoriteBtn"><i className="far fa-heart"></i></button>
  </div>
 )
}

export default Book

