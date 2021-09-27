import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import { BookContext } from '../contexts/BookContext';


function NavBar() {

  const { books, favorites } = useContext(BookContext);
  const handleOpenClose = (e) => {

    let x = document.getElementById("myNavBar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
    e.preventDefault();
  }

  return (
    <div className="navbarWrapper">

      <nav>
        <ul className="navbar" id="myNavBar">
          <li><Link to="/">Home ({books.length})</Link></li>
          <li><Link to="/favorites">Favorites({favorites.length})</Link></li>
          <li className="menuIcon">
            <a href="#menu" onClick={handleOpenClose}>
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar
