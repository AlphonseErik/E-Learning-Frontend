import { GET_STUDENT_LIST, GET_TEACHER_LIST, GET_CLASS_LIST } from "../../redux/action/type";
import UserService from "../../services/userService";
import ClassService from "../../services/classService";

const userService = new UserService();
const classService = new ClassService();

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

function fetchClassroom(){
    return(dispatch)=>{
        classService.fetchClassList().then((res)=>{
            dispatch({
                type: GET_CLASS_LIST,
                payload:res.data
            })
        })
        .catch((err) => {
            console.log(err);
          });
    }
}

export { fetchStudent, fetchTeacher, fetchClassroom };
