import React, { useState, createContext } from 'react'

export const BookContext = createContext();


export const BookProvider = (props) => {
 const [books, setBooks] = useState([{
  title: "Unlocking Android",
  isbn: 1933988673,
  authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"]
 },
 {

  title: "Android in Action, Second Edition",
  isbn: 1935182722,
  authors: ["W. Frank Ableson", "Robi Sen"]
 },
 {

  title: "Specification by Example",
  isbn: 1617290084,
  authors: ["Gojko Adzic"]
 },
 {

  title: "Flex 3 in Action",
  isbn: 1933988746,
  authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"]
 },
 {

  title: "Flex 4 in Action",
  isbn: 1935182420,
  authors: ["Satnam Alag"]
 },
 {
  title: "Zend Framework in Action",
  isbn: 1933988320,
  authors: ["Rob Allen", "Nick Lo", "Steven Brown"]
 }
 ]);
 return (<BookContext.Provider value={[books]}>
  {props.children}
 </BookContext.Provider>);
}