import reduxAction from "../../redux/action/action"
import { SIGNIN } from "../../redux/action/type"


export function checkCretidential({ }) {
    return async dispatch => {
        dispatch(reduxAction(SIGNIN, JSON.parse(credentials)))
    }
}