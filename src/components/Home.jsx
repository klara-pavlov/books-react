import React, { useContext } from 'react'
import Books from './Books'
import { BookContext } from '../contexts/BookContext'
function Home() {
    const { books, favorites, localStorage } = useContext(BookContext);
    console.log("Favorites right before adding to local storage:", favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log("Local storage:", localStorage.favorites);
    return (
        <div className="homePage">
            <section className="titleSection">
                <h2>Home</h2>
                <p>This is home page with all the <b>React.js books</b>. Feel free to bookmark favorite books. :) </p></section>
            <Books books={books} />
        </div>
    )
}

export default Home
