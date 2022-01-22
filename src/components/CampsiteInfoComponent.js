import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import CampsiteComments from './CampsiteCommentsComponent';

class CampsiteInfo extends Component{
    constructor(props){
        super(props);
        //Was trying to hold showComments all the way up in the orig campsite Object, bailed on that maybe revisit.
        //Got the functionality working for holding the showComments on the list all the way up in App, so this state is more just legacy if I want to go back
        this.state = {
            showComment: false
        };
    }
    //Look into getting comment button to toggle.
    renderCampsite(campsite){
        let buttonText = "";
        // setting the text to show in the button, based on the allSites showComment prop
        if (this.props.allSites[campsite.id].showComment){
            buttonText = "Hide Comments";
        }else{
            buttonText = "Show Comments";
        }
        // create the campsite info card, with a button to toggle if we want to show comments
        return(
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                        <Button id='btnToggleComments' className='button bg-primary' onClick={() =>this.toggleOneSite(campsite)}>{buttonText}</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
    // Legacy Code if I want to go back, currently unused
    //This method would toggle the comments on whichever site was selected, regardless of if you clicked it for that individual site, which isn't what I wanted
    toggleComments(campsite){
        console.log(`Comment Currently Visible: ${this.state.showComment}`);
        //flip the visibility
        this.setState({showComment: !this.state.showComment})
    }

    //This fuction toggles wheter to show the comment for a specific site, and hold that value for that specific site, not all
    toggleOneSite(campsite){
        //lets get a list of all the sites
        let mySites = this.props.allSites;
        //find the site we're currently dealing with and flip the showComment property
        mySites[campsite.id].showComment = !mySites[campsite.id].showComment;
        //call up the chain to set the campsites state with updated show comment Prop
        this.props.toggleVis(mySites);
    }

    renderComments(comments){
        console.log("Rendering Comments Section...")
        //If we have comments then
        if (comments){
            //Honestly don't remember why I did this, but if I don't have it, thows "comments.map is not a function" error
            let comments = this.props.campsite.comments;
          
            //This if was for the toggling comments on every campsite, didn't like that as much
            //if (this.state.showComment){

            //If we want to show the comments for this particular campsite create the comments div
            if (this.props.allSites[this.props.campsite.id].showComment){
                return(
                    <div id='txtComments' className='col-md-5 m1'>
                        <h4>Comments</h4>
                        {comments.map(comment=> {
                            return (
                            <div>
                                <p>{comment.text}<br/>
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                            );  
                        })
                        }
                    </div>
                    
                );
            //else return an empty Div
            }else {
                return(
                    <div></div>
                );
            }
        }
    }
    render(){
        console.log("Rendering Selected Campsite Info...");
        if (this.props.campsite){
                //Not using CamsiteCommentsCompenent for turning in project
                // return(
                //     <div className='row'>
                //         {this.renderCampsite(this.props.campsite)}
                //         <CampsiteComments campsite = {this.props.campsite} showComment={this.state.showComment}/>
                //     </div>
                // );
                //create the Campsite Info Row using the renderCampsite and renderComments functions
                return(
                    <div className='row'>
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite)}
                    </div>
                );    
        }
        return <div/>;
    }
}

export default CampsiteInfo;