import React, { useContext } from 'react'
import '../App.css';
import { BookContext } from '../contexts/BookContext';

function Book(props) {

  const { handleAddToFavorites, localStorage, handleCardClick } = useContext(BookContext);


  return (
    <div className="bookCard" id={props.id} onClick={handleCardClick}>
      <div className="imgHolder">
        <img src={props.book.volumeInfo.imageLinks === undefined
          ? "https://via.placeholder.com/120"
          : props.book.volumeInfo.imageLinks.thumbnail}
          alt="img" />
      </div>
      <div className="bookCardContent">
        <h2>{props.book.volumeInfo.title}</h2>
        <h4>{[props.book.volumeInfo.authors]}</h4>
        {/*<p>{props.book.searchInfo === undefined
          ? ""
        : props.book.searchInfo.textSnippet}</p>*/}
      </div>
      {/* */}
      <button className="favoriteBtn" onClick={handleAddToFavorites}><i className={JSON.parse(localStorage.favorites).indexOf(props.id) > -1 ? "fas fa-heart" : "far fa-heart"}></i></button>
    </div>
  )
}

export default Book

