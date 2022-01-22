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
        
        //Not using this toggleComments anymore
        //this.toggleCommentVis.bind(this);

    }

    //Went with holding the Show Comments in the Campsite Info class
    // toggleCommentVis(campsite) {
    //     console.log("inToggleComments ID: "+ campsite.name);
    //     let myCampsites = this.state.campsites;
    //     console.log(myCampsites[campsite.id].showComment);
    //     // console.alert(myCampsites[campsite.id].showComment);
    //     this.setState({campsites: myCampsites})
    //     //this.setState(sitethis.state.campsites[campsite.id].showComment,!this.state.campsites[campsite.id].showComment);
    //     //this.setState({campsites[campsite.id].showComment, !campsite.campsites[campsite.id].showComment});
    // };
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites = {this.state.campsites}/>
            </div>
        );
    }
}

export default App;
