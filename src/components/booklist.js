import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themecontext';
import { BookContext } from '../contexts/BookContext';
const BookList = () => {
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const { books } = useContext(BookContext);
    return (
        <div className="booklist" style={{ color: theme.syntax, backgroundColor: theme.bg }}>
            <ul>
                {
                    books.map((book) => (
                        <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BookList;