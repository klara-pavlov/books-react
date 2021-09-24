import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import { BookContext } from '../contexts/BookContext';


function NavBar() {

  //const value = useContext(BookContext);
  //let books = value[0];
  //let booksLength = books.length;
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
    <div className="app-header_navbar">

      <nav>
        <ul className="navbar" id="myNavBar">
          <li><Link to="/">Books ()</Link></li>
          <li><Link to="/favorites">Favorites()</Link></li>
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
