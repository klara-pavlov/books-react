import React, { useContext } from 'react'

import Books from './Books'
import { BookContext } from '../contexts/BookContext';
function Favorites() {

    const { books, localStorage, favorites, errMessage } = useContext(BookContext);
    let favoriteBooks = [];
    if (localStorage.favorites) {
        favoriteBooks = books.filter(item => localStorage.favorites.indexOf(item.id) !== -1);
    }
    console.log("Favorites right before adding to local storage:", favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log("Local storage:", localStorage.favorites);

    return (
        <div className="favorites">
            <section className="titleSection">
                <h2>Favorites</h2>
                <p>Favorites page displays all books added to favorites.</p></section>
            <Books books={favoriteBooks} />
            <section className="errorMsgSection">
                <h1>{errMessage}</h1>
            </section>
        </div>
    )
}

export default Favorites
