import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';


function RenderDirectoryItem({campsite, onClick}){
    return(
        <Card onClick={()=> onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props){
    // run through the campsite list, creating a default card for each.
    // adding a click event on each card to change the selected campsite which will force a rerender
    
        console.log("Rendering Campsite List Cards...")
        // running through the campsites with map and creating the directory object
        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className='col-md-5 m-1'>
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
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
                
            </div>
        );
}

export default Directory;