import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
    //Render the Navbar Component and a directory Component
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
