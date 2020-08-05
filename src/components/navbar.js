import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themecontext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isAuth;
    return (
        <>
            {isLoggedIn ?
                <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
                    <h1 >Context App</h1>
                    <ul >
                        <li >Home</li>
                        <li>contact</li>
                        <li>about</li>
                        <li onClick={authContext.toggleAuth}>Logout</li>
                    </ul>
                </nav> :
                <button onClick={authContext.toggleAuth}>Login</button>}
        </>
    );
}

export default Navbar;