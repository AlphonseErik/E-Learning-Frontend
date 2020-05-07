import React from "react";
import { Modal } from "react-bootstrap";
import { Button, TextField } from "@material-ui/core";
import { registerTeacherAction } from "../../../redux/action/userAction";
import { connect } from "react-redux";

const table = {
  width: "720px",
};

const TeacherManagement = (props) => {
  let [user, setUser] = React.useState({
    userRegister: {
      username: "",
      password: "",
      fullName: "",
      mobilePhone: "",
      email: "",
    },
    errors: {
      username: "",
      password: "",
      fullName: "",
      mobilePhone: "",
      email: "",
    },
    ...props,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    let errorMessage = "";
    if (value === "") {
      errorMessage = name.toUpperCase() + " is required!!!";
    }
    //Check error
    let useruserRegister = { ...user.userRegister, [name]: value };
    let errorsUpdate = { ...user.errors, [name]: errorMessage };
    setUser({
      userRegister: useruserRegister,
      errors: errorsUpdate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    for (let errorName in user.errors) {
      if (user.errors[errorName] !== "") {
        valid = false;
      }
    }
    for (let valueNotFind in user.userRegister) {
      if (user.userRegister[valueNotFind] === "") {
        valid = false;
      }
    }
    console.log(user.userRegister);
    const accesstoken = localStorage.getItem("accesstoken");
    console.log(accesstoken);
    if (valid) {
      props.dispatch(
        registerTeacherAction(user.userRegister, props.history, accesstoken)
      );
    } else {
      alert("Please check your input");
    }
  };

  const formRegister = () => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="text"
          label="Teacher name"
          variant="outlined"
          name="fullName"
          onChange={handleChange}
        />
        <p className="text text-danger">{user.errors.fullName}</p>
        <TextField
          required
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
        />
        <p className="text text-danger">{user.errors.email}</p>
        <TextField
          required
          type="text"
          label="Mobile Phone"
          variant="outlined"
          name="mobilePhone"
          onChange={handleChange}
        />
        <p className="text text-danger">{user.errors.mobilePhone}</p>
        <TextField
          required
          type="text"
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleChange}
        />
        <p className="text text-danger">{user.errors.username}</p>
        <TextField
          required
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
        />
        <p className="text text-danger">{user.errors.password}</p>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
        >
          Save
        </Button>
      </form>
    );
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
          Teacher Management
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="panel panel-warrning">
                <div className="panel-heading">
                  <h4 className="panel-title">Add New Teacher</h4>
                </div>
                <div className="panel-body">{formRegister()}</div>
              </div>
            </div>
            <div className="col-8">
              <div className="row mt-3 ml-4">
                <div className="table" style={table}>
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr className="text-center">
                        <th>No.</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John</td>
                        <td className="text-center">
                          <span>Actived</span>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="ml-3"
          onClick={onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(TeacherManagement);
