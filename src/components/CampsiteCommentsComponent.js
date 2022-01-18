import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button} from 'reactstrap';

class CampsiteComments extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let comments = this.props.campsite.comments;
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

export default CampsiteComments;