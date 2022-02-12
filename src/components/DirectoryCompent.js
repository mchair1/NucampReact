import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderDirectoryItem({campsite}){
    return(
        <Card >
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={baseUrl + campsite.image} alt={campsite.name}/>
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props){
    // run through the campsite list, creating a default card for each.
    // adding a click event on each card to change the selected campsite which will force a rerender
    
        console.log("Rendering Campsite List Cards...")
        // running through the campsites with map and creating the directory object
        const directory = props.campsites.campsites.map(campsite => {
            return (
                <div key={campsite.id} className='col-md-5 m-1'>
                    <RenderDirectoryItem campsite={campsite}/>
                </div>
            );
        });

        if (props.campsites.isLoading){
            return(
                <div className='container'>
                    <div className='row'>
                        <Loading/>
                    </div>
                </div>
            );
        }else if(props.campsites.errMess){
               return(
               <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h4>{props.campsites.errMess}</h4>
                        </div>
                    </div>
                </div>
               );
        }
        return (
            <div className="container">
                  <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Directory</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Directory</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {directory}
                </div>
                
            </div>
        );
}

export default Directory;