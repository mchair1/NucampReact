import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button} from 'reactstrap';

class CampsiteInfo extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     selectedCampsite: null
        // };
    }
    //Look into getting comment button to toggle.
    renderCampsite(campsite){
        return(
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                        <Button id='btnToggleComments' className='button bg-primary' onClick={() => this.toggleComments()}>Show Comments</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
    toggleComments(campsite){
        campsite.setState({showComments:true});
        this.render();
    }
    renderComments(comments){
        if (comments){
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
        }
    }
    render(){
        if (this.props.campsite){
                return(
                    <div className='row'>
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                );    
        }
        return <div/>;
    }
}

export default CampsiteInfo;