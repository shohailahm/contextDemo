import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setbooks] = useState([{
        title: 'wild Darkness', id: 1
    }, {
        title: 'alan walker hits', id: 2
    },
    {
        title: 'marshmello', id: 3
    }])
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;