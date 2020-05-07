import {
  GET_STUDENT_LIST,
  GET_TEACHER_LIST,
  GET_CLASS_LIST,
  DELETE_TEACHER,
  DELETE_STUDENT,
} from "../../redux/action/type";
import UserService from "../../services/userService";
import ClassService from "../../services/classService";

const userService = new UserService();
const classService = new ClassService();

function fetchStudent() {
  try {
    return (dispatch) => {
      userService
        .fetchAllStudent()
        .then((res) => {
          dispatch({
            type: GET_STUDENT_LIST,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
}

function fetchTeacher() {
  try {
    return (dispatch) => {
      userService
        .fetchAllTeacher()
        .then((res) => {
          dispatch({
            type: GET_TEACHER_LIST,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
}

function fetchClassroom() {
  try {
    return (dispatch) => {
      classService
        .fetchClassList()
        .then((res) => {
          dispatch({
            type: GET_CLASS_LIST,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
}

function deleteStudent(ID) {
  try {
    return (dispatch) => {
      userService
        .deletedUser(ID)
        .then((res) => {
          dispatch({
            type: DELETE_STUDENT,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
}

function deleteTeacher(ID) {
  try {
    return (dispatch) => {
      userService
        .deletedUser(ID)
        .then((res) => {
          dispatch({
            type: DELETE_TEACHER,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
}

export {
  fetchStudent,
  fetchTeacher,
  fetchClassroom,
  deleteStudent,
  deleteTeacher,
};
