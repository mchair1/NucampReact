import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';


class Directory extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCampsite: null
        };
        
    }
    //method to change the selected campsite.
    onCampsiteSelect(campsite){
        this.setState({selectedCampsite: campsite});
    }
    // run through the campsite list, creating a default card for each.
    // adding a click event on each card to change the selected campsite which will force a rerender
    render() {
        console.log("Rendering Campsite List Cards...")
        // running through the campsites with map and creating the directory object
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className='col-md-5 m-1'>
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        // return the Directory and selected campsite info.
        // Also passing down toggleVis function
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo campsite = {this.state.selectedCampsite} allSites = {this.props.campsites} toggleVis= {this.props.toggleVis}/>
            </div>
        );
    }
}

export default Directory;