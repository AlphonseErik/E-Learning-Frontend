import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

import TeacherManagement from '../TeacherManage/TeacherManagement'
import ClassManage from '../ClassManage/ClassManage';
import StudentManage from '../StudentManage/StudentManage';





class StaffDB extends Component {
    constructor(props) {
        super(props);
        this.state ={Direct:[], addModalShow: false
        }
    }

    
    
    render() {
       
       let addModalClose = () => this.setState({addModalShow:false});
       
        return (
            <div className= "container">
                <div class="row">
                    <div className="col-md-4" >
                    <img className="card-img-top" src="http://placehold.it/550x300" alt=""/>
                    <div class="card-body">
                            <p class="card-text">Teacher Management</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <ButtonToolbar>
                                <Button type="button" 
                                        class="btn btn-sm btn-outline-danger"
                                        onClick={()=> this.setState({addModalShow: true})}>
                                            View
                                </Button>
                                <TeacherManagement
                                    show={this.state.addModalShow}
                                    onHide={addModalClose}/>                                 
                                </ButtonToolbar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                    <img className="card-img-top" src="http://placehold.it/550x300" alt=""/>
                    <div class="card-body">
                            <p class="card-text">Student Management</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <ButtonToolbar>
                                <Button type="button" 
                                        class="btn btn-sm btn-outline-danger"
                                        onClick={()=>this.setState({addModalShow:true})}>
                                        View
                                </Button>
                                <StudentManage
                                    show={this.state.addModalShow}
                                    onHide={addModalClose}/>
                                </ButtonToolbar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                    <img className="card-img-top" src="http://placehold.it/550x300" alt=""/>
                    <div class="card-body">
                            <p class="card-text">ClassRoom Management</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <ButtonToolbar>
                                <Button type="button" 
                                        class="btn btn-sm btn-outline-danger"
                                        onClick={()=>this.setState({addModalShow:true})}>
                                            View
                                </Button>
                                <ClassManage
                                    show={this.state.addModalShow}
                                    onHide={addModalClose}/>
                                </ButtonToolbar>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

           

              
            </div>
        );
    }
}

export default StaffDB;