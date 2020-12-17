import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  PROD,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET
} from "../../constants/ActionTypes";
import axios from 'util/Api'

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignUp = (values) => {

  return (dispatch) => {

    dispatch({ type: FETCH_START });

    axios.post(`${PROD}/costomersignup`, values).then(({ data }) => {
      console.log("data:", data);
      if (data) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
        axios.defaults.headers.common['authorization'] = "Bearer " + data.token;
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_TOKEN_SET, payload: data.token });
        dispatch({ type: USER_DATA, payload: data.user });
      }
    }).catch(function (err) {
      // debugger
      // const errors = err?.response?.data
      // message.error(errors.error)

      // console.log('Error****:', errors)
      // debugger
      dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
      console.log("Error****:", err?.response?.data?.error);
    });
  }
};

export const userSignIn = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.post(`${PROD}/costomersignin`, {
      email: email,
      password: password,
    }
    ).then(({ data }) => {
      console.log("userSignIn: ", data);
      if (data) {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
        axios.defaults.headers.common['Authorization'] = "Bearer " + data.token;
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_TOKEN_SET, payload: data.token });
        dispatch({ type: USER_DATA, payload: data.user });

      }
    }).catch(function (err) {

      dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
      console.log("Error****:", err?.response?.data?.error);
    });
  }
};

export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.post('auth/me',
    ).then(({ data }) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_DATA, payload: data.user });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    }).catch(function (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log("Error****:", error.message);
    });
  }
};


export const userSignOut = () => {

  return (dispatch) => {
    dispatch({ type: FETCH_START });

    // axios.post('auth/logout').then(({data}) => {
    //   console.log("log out",data)
    //   if (data.result) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch({ type: FETCH_SUCCESS });
    dispatch({ type: SIGNOUT_USER_SUCCESS });
    window.location = "/";

    //   } else {
    //     dispatch({type: FETCH_ERROR, payload: data.error});
    //   }
    // }).catch(function (error) {
    //   dispatch({type: FETCH_ERROR, payload: error.message});
    //   console.log("Error****:", error.message);
    // });
  }
};
