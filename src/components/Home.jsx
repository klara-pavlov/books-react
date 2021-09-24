import React, { useContext } from 'react'
import Books from './Books'
import { BookContext } from '../contexts/BookContext';
function Home() {
    //const value = useContext(BookContext);
    //let books = value[0];
    //let booksLength = books.lenght;

    return (
        <div className="homePage">
            <h2>Books ()</h2>
            <p>This is home page with all the books.</p>
            <Books />
        </div>
    )
}

export default Home
