import React from "react";
import TextField from "@material-ui/core/TextField";
import { Modal } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { fetchStudent, fetchTeacher, fetchClassroom } from "../action";
import { connect } from "react-redux";

const table = {
  width: "720px",
};

const ClassManage = (props) => {
  React.useEffect(() => {
    const fetchData = () => {
      try {
        props.dispatch(fetchStudent());
        props.dispatch(fetchTeacher());
        props.dispatch(fetchClassroom());
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const renderTeacherOption = () => {
    if (props.teacher) {
      return (
        <select className="form-control">
          {props.teacher.docs.map((item, index) => {
            return <option key={index}>{item.fullName}</option>;
          })}
        </select>
      );
    }
    return (
      <select className="form-control">
        <option>John</option>
        <option>Emily</option>
      </select>
    );
  };

  const renderStudentOption = () => {
    if (props.student) {
      return (
        <select className="form-control">
          {props.student.docs.map((item, index) => {
            return <option key={index}>{item.fullName}</option>;
          })}
        </select>
      );
    }
    return (
      <select className="form-control">
        <option>Jeremy</option>
        <option>HAHA</option>
      </select>
    );
  };

  const renderClass = () => {
    if (props.class) {
      return (
        <tbody>
          {props.class.docs.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.className}</td>
                <td className="text-center">
                  {item.isActive ? (
                    <span className="text text-success">Active</span>
                  ) : (
                    <span className="text text-danger">Deactive</span>
                  )}
                </td>
                <td className="text-center">
                  <Button variant="contained" disabled className="ml-3">
                    Edit
                  </Button>
                  <Button variant="contained" disabled className="ml-3">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      );
    }
  };

  let { show, onHide } = props;

  return (
    <Modal
      {...{ show, onHide }}
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
                      <TextField
                        required
                        size="small"
                        id="outlined-required"
                        label="Class name"
                        defaultValue=""
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <label>Teacher</label>
                      {renderTeacherOption()}
                    </div>
                    <div className="form-group">
                      <label>Student</label>
                      {renderStudentOption()}
                      {/* <select className="form-control">
                        <option>Jeremy</option>
                        <option>HAHA</option>
                      </select> */}
                    </div>
                    <div>
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        disabled
                      >
                        Save
                      </Button>
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
                          <th>No.</th>
                          <th>Class Name</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      {renderClass()}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" color="primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  student: state.student.studentList,
  teacher: state.teacher.teacherList,
  class: state.class.classList,
});

export default connect(mapStateToProps)(ClassManage);
