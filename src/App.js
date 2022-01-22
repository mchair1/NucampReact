import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryCompent';
import './App.css';
import { CAMPSITES } from './shared/campsites';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
        
        //Hooray Google
        this.toggleCommentVis= this.toggleCommentVis.bind(this);

    }

    //toggle show comments for a specific campsite, probably a better way but this works
    toggleCommentVis(campsiteList) {
        console.log("Updateing Campsite list...")
        this.setState({campsites: campsiteList});
    };

    //this was just a simple test method for passing methods down
    passTest(){
        console.log("In Pass Test");
    };
    
    //Render the Navbar Component and a directory Component
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites = {this.state.campsites} toggleVis = {this.toggleCommentVis}/>
            </div>
        );
    }
}

export default App;
