import React, { Component } from 'react'
import { ThemeContext } from '../contexts/themecontext'

export default class ThemeToggle extends Component {
    static contextType = ThemeContext;

    render() {
        const { toggleTheme } = this.context;
        return (
            <button onClick={toggleTheme}>Toggle The Theme</button>
        )
    }
}
