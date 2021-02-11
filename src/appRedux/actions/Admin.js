import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    HIDE_MESSAGE,
    INIT_URL,
    PROD,
    ROLES_LIST,
    SHOW_MESSAGE,

} from "../../constants/ActionTypes";
import axios from 'util/Api'

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
};
const Token = JSON.parse(localStorage.getItem('token'))
if (Token) {
    axios.defaults.headers.common['authorization'] = "Bearer " + Token;

}
export const addRole = values => async dispatch => {

    try {
        dispatch({ type: FETCH_START });

        const res = await axios.post(`${PROD}/api/Roles`,
            {
                rolename: values.roleName
            });

        if (res) {

            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: SHOW_MESSAGE, payload: "sucessfull" })
            dispatch({
                type: HIDE_MESSAGE
            });
            dispatch(getRoles())
        }
    } catch (err) {
        const errors = err.response.data;
        // message.error(errors);
        dispatch({
            type: FETCH_ERROR,
            payload: errors
        });
        dispatch({
            type: HIDE_MESSAGE
        });
        console.log("Error****:", errors);
    }
}

export const getRoles = () => async dispatch => {

    try {



        const res = await axios.get(`${PROD}/api/Roles`,
        );

        if (res) {
            dispatch({ type: ROLES_LIST, payload: res.data })
        }
    } catch (err) {
        console.log(err);
        const errors = err.response.data;
        // message.error(errors);
        dispatch({
            type: FETCH_ERROR,
            payload: errors
        });
        dispatch({
            type: HIDE_MESSAGE
        });
        console.log("Error****:", errors);
    }
}


export const deleteRole = (id) => async dispatch => {

    try {
        const res = await axios.delete(`${PROD}/api/Roles/${id}`);

        if (res) {

            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: SHOW_MESSAGE, payload: "Role Deleted" })
            dispatch({ type: HIDE_MESSAGE });
            dispatch(getRoles())
        }
    } catch (err) {
        console.log(err);
        const errors = err.response.data;
        // message.error(errors);
        dispatch({
            type: FETCH_ERROR,
            payload: errors
        });
        dispatch({
            type: HIDE_MESSAGE
        });
        console.log("Error****:", errors);
    }
}

export const editRole = (val) => async dispatch => {

    try {
        const res = await axios.put(`${PROD}/api/Roles/${val.id}`,
            val
        );

        if (res) {

            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: SHOW_MESSAGE, payload: "Role Updated" })
            dispatch({ type: HIDE_MESSAGE });
            dispatch(getRoles())
        }
    } catch (err) {
        const errors = err.response.data;
        // message.error(errors);
        dispatch({
            type: FETCH_ERROR,
            payload: errors
        });
        dispatch({
            type: HIDE_MESSAGE
        });
        console.log("Error****:", errors);
    }
}
