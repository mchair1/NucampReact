import React, { Component } from 'react';
import Directory from './/DirectoryCompent';
import CampsiteInfo from './CampsiteInfoComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
        
        //Hooray Google
        this.toggleCommentVis= this.toggleCommentVis.bind(this);

    }
    //method to change the selected campsite.
    onCampsiteSelect(campsiteId){
        this.setState({selectedCampsite: campsiteId});
    }
    //toggle show comments for a specific campsite, probably a better way but this works
    toggleCommentVis(campsiteList) {
        console.log("Updateing Campsite list...")
        this.setState({campsites: campsiteList});
    };

    //Render the Navbar Component and a directory Component
    render() {
        return (
            <div>
                <Header />
                <Directory campsites = {this.state.campsites} toggleVis = {this.toggleCommentVis} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfo campsite = {this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} allSites = {this.state.campsites} toggleVis= {this.toggleCommentVis}/>
                <Footer />
            </div>
        );
    }
}

export default Main;
