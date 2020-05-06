import React, { Component } from "react";
import { ButtonToolbar, Button } from "react-bootstrap";

import TeacherManagement from "../../components/TeacherManage/TeacherManagement";
import ClassManage from "../../components/ClassManage/ClassManage";
import StudentManage from "../../components/StudentManage/StudentManage";

class StaffDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Direct: [],
      addModalShow: false,
    };
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src="http://placehold.it/550x300"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">Teacher Management</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <ButtonToolbar>
                      <Button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => this.setState({ addModalShow: true })}
                      >
                        View
                      </Button>
                      <TeacherManagement
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                      />
                    </ButtonToolbar>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="card-img-top"
                src="http://placehold.it/550x300"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">Student Management</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <ButtonToolbar>
                      <Button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => this.setState({ addModalShow: true })}
                      >
                        View
                      </Button>
                      <StudentManage
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                      />
                    </ButtonToolbar>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                className="card-img-top"
                src="http://placehold.it/550x300"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">ClassRoom Management</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <ButtonToolbar>
                      <Button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => this.setState({ addModalShow: true })}
                      >
                        View
                      </Button>
                      <ClassManage
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                      />
                    </ButtonToolbar>
                  </div>
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
