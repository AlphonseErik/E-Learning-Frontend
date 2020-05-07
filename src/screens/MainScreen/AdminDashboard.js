import React from "react";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "@material-ui/core";
import TeacherManage from "../../components/Manage/TeacherManage/TeacherManagement";
import ClassManage from "../../components/Manage/ClassManage/ClassManage";
import StudentManage from "../../components/Manage/StudentManage/StudentManage";

const AdminDashboard = (props) => {
  let [modalShowClass, setModalShowClass] = React.useState(false);
  let [modalShowTeacher, setModalShowTeacher] = React.useState(false);
  let [modalShowStudent, setModalShowStudent] = React.useState(false);

  let closeModal = () => {
    setModalShowClass(false);
    setModalShowTeacher(false);
    setModalShowStudent(false);
  };

  const renderClass = () => {
    return (
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
                  variant="contained"
                  color="primary"
                  onClick={() => setModalShowClass(true)}
                >
                  View
                </Button>
                <ClassManage
                  {...props}
                  show={modalShowClass}
                  onHide={closeModal}
                />
              </ButtonToolbar>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStudent = () => {
    return (
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
                  variant="contained"
                  color="primary"
                  onClick={() => setModalShowStudent(true)}
                >
                  View
                </Button>
                <StudentManage show={modalShowStudent} onHide={closeModal} />
              </ButtonToolbar>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTeacher = () => {
    return (
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
                  variant="contained"
                  color="primary"
                  onClick={() => setModalShowTeacher(true)}
                >
                  View
                </Button>
                <TeacherManage show={modalShowTeacher} onHide={closeModal} />
              </ButtonToolbar>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {renderTeacher()}
        {renderStudent()}
        {renderClass()}
      </div>
    </div>
  );
};

export default AdminDashboard;
