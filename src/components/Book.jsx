import React from 'react'
import '../App.css';
function Book(props) {
 return (
  <div className="bookCard">
   <button className="favoriteBtn"><i className="far fa-heart"></i></button>
   <img src="https://via.placeholder.com/300x300" alt="jsx-a11y/alt-text" />
   <div className="bookCardContent">
    <h2>{props.title}</h2>
    <h4>{[props.authors]}</h4>
    <h6>{props.isbn}</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod tempore quia.</p>

   </div>
  </div>
 )
}

export default Book

