import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CampsiteComments from './CampsiteCommentsComponent';


    //Look into getting comment button to toggle.
    function RenderCampsite({campsite}){
        // create the campsite info card, with a button to toggle if we want to show comments
        return(
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    function RenderComments({comments}){
        console.log("Rendering Comments Section...")
        //If we have comments then
        if (comments){
                      
            //This if was for the toggling comments on every campsite, didn't like that as much
            //if (this.state.showComment){

            //If we want to show the comments for this particular campsite create the comments div
            
                return(
                    <div id='txtComments' className='col-md-5 m1'>
                        <h4>Comments</h4>
                        {comments.map(comment=> {
                            return (
                            <div key={comment.id}>
                                <p>{comment.text}<br/>
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                            );  
                        })
                        }
                    </div>
                    
                );
        }
    }
    function CampsiteInfo(props){
        

        console.log("Rendering Selected Campsite Info...");
        if (props.campsite){
            return(
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <RenderCampsite campsite={props.campsite}/>
                        <RenderComments comments={props.comments}/>
                    </div>
                </div>
            );    
        }
        return <div></div>;

            //This fuction toggles wheter to show the comment for a specific site, and hold that value for that specific site, not all

    }


export default CampsiteInfo;