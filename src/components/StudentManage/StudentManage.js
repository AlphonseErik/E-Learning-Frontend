import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import UserService from "../../services/userService";
import { GET_STUDENT_LIST } from "../../redux/action/type";
import { connect } from "react-redux";

const table = {
  width: "875px",
};

const StudentManage = props => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Student Management
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-xs-8">
              <div className="row mt-3 ml-4">
                <div className="table" style={table}>
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr className="text-center">
                        <th>NO</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Jeremy</td>
                        <td className="text-center">
                          <span>
                            Actived
                          </span>
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-warning">
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary ml-3"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default connect()(StudentManage);
