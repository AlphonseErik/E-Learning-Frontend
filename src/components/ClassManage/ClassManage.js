import React from "react";
import TextField from "@material-ui/core/TextField";
import { Modal, Button } from "react-bootstrap";

const table = {
  width: "875px",
};

const ClassManage = (props) => {
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Class Management
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <div className="panel panel-warning">
                <div className="panel-heading">
                  <h4 className="panel-title">Add New Class Room</h4>
                </div>
                <div className="panel-body">
                  <form>
                    <div className="form-group">
                      <label>Class Name:</label>
                      <TextField
                        required
                        size="small"
                        id="outlined-required"
                        label="Teacher name"
                        defaultValue=""
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <label>Teacher</label>
                      <select className="form-control">
                        <option>John</option>
                        <option>Emily</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Student</label>
                      <select className="form-control">
                        <option>Jeremy</option>
                        <option>HAHA</option>
                      </select>
                    </div>
                    <div className="btn">
                      <button type="submit" className="btn btn-warning ml-4">
                        Save
                      </button>
                      <button type="button" className="btn btn-primary ml-3">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xs-8">
              <div>
                <div className="row mt-3 ml-4">
                  <div className="table" style={table}>
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr className="text-center">
                          <th>NO</th>
                          <th>Class Name</th>
                          <th>Status</th>
                          <th>Update</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>CLass T01</td>
                          <td className="text-center">
                            <span label label-danger>
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

export default ClassManage;
