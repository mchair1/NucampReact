import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './/DirectoryCompent';
import CampsiteInfo from './CampsiteInfoComponent';
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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites = {this.state.campsites} toggleVis = {this.toggleCommentVis} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfo campsite = {this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} allSites = {this.state.campsites} toggleVis= {this.toggleCommentVis}/>
            </div>
        );
    }
}

export default Main;
