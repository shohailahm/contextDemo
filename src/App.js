import React from 'react';
import Navbar from './components/navbar';
import BookList from './components/booklist';
import ThemeContextProvider from './contexts/themecontext';
import ThemeToggle from './components/themeToggle';
import AuthContextProvider from './contexts/AuthContext';
import SongList from './components/songList';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
      {/* <SongList /> */}

    </div>
  );
}

export default App;
