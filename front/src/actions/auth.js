import { loginAPI } from "../helpers/auth"
import { LOGIN_SUCCESS } from "./types";

export const loginAction = (obj) => (dispatch) => {
    return loginAPI.then((data) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {user: data.user}
        });
        return Promise.resolve();
    },
    (error))

}