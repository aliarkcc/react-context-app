import React, { createContext, useState } from "react";

export const BookContext = createContext()

export default function BookContextProvider(props) {

    const [books, setBooks] = useState([
        { ad: 'Var Mısın', id: 1, },
        { ad: 'Haycan Çiftliği', id: 2, },
        { ad: 'Bir Ömür Nasıl Yaşanır?', id: 3 }
    ])

    return (
        <BookContext.Provider value={{ books: books }}>
            {props.children}
        </BookContext.Provider>
    )
}
