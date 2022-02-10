import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button,Modal, ModalHeader, ModalBody, Label,Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';
import CampsiteComments from './CampsiteCommentsComponent';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';


    //Look into getting comment button to toggle.
    function RenderCampsite({campsite}){
        // create the campsite info card, with a button to toggle if we want to show comments
        return(
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={baseUrl+campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    function RenderComments({comments, postComment, campsiteId}){
        console.log("Rendering Comments Section...")
        //If we have comments then
        if (comments){
                      
            //This if was for the toggling comments on every campsite, didn't like that as much
            //if (this.state.showComment){

            //If we want to show the comments for this particular campsite create the comments div
            
                return(
                    <div id='txtComments' className='col-md-5 m-1'>
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
                        <CommentForm campsiteId={campsiteId} postComment={postComment} />
                    </div>
                    
                );
        }
    }
    function CampsiteInfo(props){
        console.log("Rendering Selected Campsite Info...");
        if (props.isLoading){
            console.log("isLoading...");
            return (
                <div className='container'>
                    <div className='row'>
                        <Loading/>
                    </div>
                </div>
            );
        }else if(props.errMess){
            return(
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
            );
        }
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
                        <RenderComments comments={props.comments} postComment={props.postComment} campsiteId={props.campsite.id}/>
                    </div>
                </div>
            );    
        }
        return <div></div>;

            //This fuction toggles wheter to show the comment for a specific site, and hold that value for that specific site, not all

    }
    const maxLength = len=> val => !val || (val.length<= len);
    const minLength = len => val => val && (val.length >= len);
    const required = val => val&& val.length;

    class CommentForm extends Component{
        constructor(props){
            super(props)
            //might not need this
            this.state = {
                isCommentOpen: false
            }

            this.handleSubmit = this.handleSubmit.bind(this);
            //might not need this
            this.toggleComment = this.toggleComment.bind(this);
        }
        //Might not need this
        toggleComment(){
            this.setState({
                isCommentOpen: !this.state.isCommentOpen
            });
        }
        handleSubmit(values){
            this.toggleComment();
            this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
            console.log(this.props.campsite.id, values.rating, values.author, values.text);
        }
        render(){
            return(
            <div>
                <Button outline onClick={this.toggleComment}><i className='fa fa-lg fa-pencil'/> Submit Comment</Button>
                <Modal isOpen={this.state.isCommentOpen} toggle={this.toggleComment}>
                    <ModalHeader toggle={this.toggleComment}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className='form-group'>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select className = 'form-control' name='rating' id='rating' model='.rating'>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Control.select>
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='author'>Your Name</Label>
                                <Control.text className='form-control' name='author' id='author' model='.author'
                                    validators={{
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className='text-danger'
                                    model='.author'
                                    show='touched'
                                    component='div'
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <Label htmlFor='text'>Comment</Label>
                                <Control.textarea className='form-control' name='text' id='text' model='.text' rows='6'></Control.textarea>
                            </div>
                            <Button type='submit' color='primary' >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
            );

        }
    }


export default CampsiteInfo;