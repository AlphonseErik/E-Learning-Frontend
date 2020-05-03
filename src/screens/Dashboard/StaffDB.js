import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

class StaffDB extends Component {
    render() {
        return (
            <div className= "container">
                <div class="row">
                    <div className="col-md-4" >
                    <img className="card-img-top" src="http://placehold.it/550x300"/>
                    <div class="card-body">
                            <p class="card-text">Teacher Management</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                    <img className="card-img-top" src="http://placehold.it/550x300"/>
                    <div class="card-body">
                            <p class="card-text">Student Management</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" >
                    <img className="card-img-top" src="http://placehold.it/550x300"/>
                    <div class="card-body">
                            <p class="card-text">ClassRoom Management</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
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