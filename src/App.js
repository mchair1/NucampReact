import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {
    //Render the Navbar Component and a directory Component
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}

export default App;
