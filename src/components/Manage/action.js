import { GET_STUDENT_LIST, GET_TEACHER_LIST } from "../../redux/action/type";
import UserService from "../../services/userService";

const userService = new UserService();

function fetchStudent() {
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
}

function fetchTeacher() {
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
  }

export { fetchStudent, fetchTeacher };
