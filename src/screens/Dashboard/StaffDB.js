import React, { Component } from "react";
import { Paper } from "@material-ui/core";

const StaffDB = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img className="card-img-top" src="http://placehold.it/550x300" />
          <div className="card-body">
            <p className="card-text">Teacher Management</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img className="card-img-top" src="http://placehold.it/550x300" />
          <div className="card-body">
            <p className="card-text">Student Management</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img className="card-img-top" src="http://placehold.it/550x300" />
          <div className="card-body">
            <p className="card-text">ClassRoom Management</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDB;