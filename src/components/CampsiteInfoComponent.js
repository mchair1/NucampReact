import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import CampsiteComments from './CampsiteCommentsComponent';

class CampsiteInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            showComment: false
        };
        
    }
    //Look into getting comment button to toggle.
    renderCampsite(campsite){
        let buttonText = "";
        if (this.state.showComment){
            buttonText = "Hide Comments";
        }else{
            buttonText = "Show Comments";
        }
        return(
            
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                        <Button id='btnToggleComments' className='button bg-primary' onClick={() =>this.toggleComments(campsite)}>{buttonText}</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    toggleComments(campsite){
        console.log(this.state.showComment);
        this.setState({showComment: !this.state.showComment})
    }

    renderComments(comments){
        if (comments){
            let comments = this.props.campsite.comments;
            console.log(`${this.props.campsite.name} : ${this.state.showComment}`);
            
            if (this.state.showComment){
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
            }else {
                return(
                    <div></div>
                );
            }
        }
    }
    render(){
        console.log("About to render Selected Campsite Info");
        if (this.props.campsite){
                //Not using CamsiteCommentsCompenent for turning in project
                // return(
                //     <div className='row'>
                //         {this.renderCampsite(this.props.campsite)}
                //         <CampsiteComments campsite = {this.props.campsite} showComment={this.state.showComment}/>
                //     </div>
                // );    
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