import {
    FETCH_START,
    FETCH_SUCCESS,
    PROD,
    VEHICLE_HISTORY,
    VEHICLE_ABOUT_EXPIRE,
    CUST_VEHICLES_GET, GETTING_MODELS, LOCATIONS_GET, APPOINTMENT_GET, COMPANY_NAMES, FETCH_ERROR, NEXT_VEH_SERVICE, myStats, othersStats, escalationLevels
} from '../../constants/ActionTypes'
import axios from 'util/Api'
import { message } from 'antd'

const Token = JSON.parse(localStorage.getItem('token'))
// if (Token) {
//     axios.defaults.headers.common['authorization'] = "Bearer " + Token;

// }
export const gettingCustVehicles = (customerId) => async dispatch => {
    try {
        dispatch({ type: FETCH_START })

        axios.post(`${PROD}/getCostomerVehicles`, { "costomerId": customerId }).then(res => {
            dispatch({ type: FETCH_SUCCESS })
            dispatch({ type: CUST_VEHICLES_GET, payload: res.data })
        })

    } catch (err) {

        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);


    }
}

export const addingCustVehicles = (values) => async dispatch => {
    try {
        debugger
        dispatch({ type: FETCH_START })



        axios.post(`${PROD}/addVehicle`, values).then(res => {
            debugger
            dispatch({ type: FETCH_SUCCESS })
            message.success('Vehicle Added')

            dispatch({ type: CUST_VEHICLES_GET, payload: res.data })
        })
    } catch (err) {
        const errors = err?.response?.data
        message.error(errors)

        console.log('Error****:', errors)
    }
}

export const gettingCompanyNames = () => async dispatch => {
    try {
        dispatch({ type: FETCH_START })
        axios.get(`${PROD}/getEngineCompany`).then(res => {
            dispatch({ type: FETCH_SUCCESS })
            dispatch({ type: COMPANY_NAMES, payload: res.data })

        })
    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}


export const gettingModels = (value) => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.post(`${PROD}/getModel`, { engineCompanyName: value }).then(res => {
            dispatch({ type: FETCH_SUCCESS })
            console.log("res data from get model", res.data)
            dispatch({ type: GETTING_MODELS, payload: res.data })
        })
    } catch (err) {
        const errors = err?.response?.data
        message.error(errors)

        console.log('Error****:', errors)
    }
}

export const gettingLocations = () => async dispatch => {
    try {

        dispatch({ type: FETCH_START })

        axios.get(`${PROD}/getAllLocations`).then(res => {
            dispatch({ type: FETCH_SUCCESS })

            dispatch({ type: LOCATIONS_GET, payload: res.data })
        })
    } catch (err) {
        const errors = err?.response?.data
        message.error(errors)

        console.log('Error****:', errors)
    }
}

export const gettingAppointments = (id) => async dispatch => {
    try {
        dispatch({ type: FETCH_START })

        axios.post(`${PROD}/getBookingsForCostomer`, { Costomer_ID: id }).then(res => {
            dispatch({ type: FETCH_SUCCESS })

            dispatch({ type: APPOINTMENT_GET, payload: res.data })
        })
    } catch (err) {
        const errors = err?.response?.data
        message.error(errors)

        console.log('Error****:', errors)
    }
}


export const addingAppointments = values => async dispatch => {

    try {

        dispatch({ type: FETCH_START });


        axios.post(`${PROD}/addCostomerBooking`,

            values

        ).then(res => {

            dispatch({ type: FETCH_SUCCESS });
            message.success('Appointment Added')

            dispatch(gettingAppointments(values?.Costomer_ID))
        })
    } catch (err) {
        const errors = err?.response?.data;
        message.error(errors);

        console.log("Error****:", errors);
    }
}

export const deletingAppointments = (id, userId) => async dispatch => {
    try {
        dispatch({ type: FETCH_START })
        axios.post(`${PROD}/cancelCostomerBooking`, { id }).then(res => {
            message.success('Appointment Canceled!')
            dispatch({ type: FETCH_SUCCESS })
            dispatch(gettingAppointments(userId))
        })

    } catch (err) {
        const errors = err?.response?.data
        message.error(errors)

        console.log('Error****:', errors)
    }
}

export const updateProfile = values => async dispatch => {
    try {
        dispatch({ type: FETCH_START })
        axios.post(`${PROD}/updateProfile`, values).then(res => {
            message.success('Profile Updated')
            dispatch({ type: FETCH_SUCCESS })
            localStorage.setItem("user", JSON.stringify(res.data));
            // window.location = "/company/customerprofile";

            // localStorage.setItem("user", JSON.stringify(data.user));
            // dispatch({ type: USER_DATA, payload: data.user });

        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

export const getVehicleHistory = id => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.post(`${PROD}/getCostomerVehicleHistory`, {
            "vehicleId": id
        }).then(res => {
            dispatch({ type: FETCH_SUCCESS })
            dispatch({ type: VEHICLE_HISTORY, payload: res.data })
        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

export const getAboutToExpire = id => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.post(`${PROD}/getExpiredLicense`, {
            "costomerId": id
        }).then(res => {
            dispatch({ type: FETCH_SUCCESS })
            dispatch({ type: VEHICLE_ABOUT_EXPIRE, payload: res.data })
        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

export const getNextvehicleService = id => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.post(`${PROD}/getComingServices`, {
            "costomerId": id
        }).then(res => {
            dispatch({ type: FETCH_SUCCESS })
            dispatch({ type: NEXT_VEH_SERVICE, payload: res.data })
        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

export const yourStats = () => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.get(`${PROD}/yourstatistics`).then(res => {
            dispatch({ type: FETCH_SUCCESS })

            dispatch({ type: myStats, payload: res.data })
        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

export const otherStats = () => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.get(`${PROD}/statistics`).then(res => {
            dispatch({ type: FETCH_SUCCESS })

            dispatch({ type: othersStats, payload: res.data })
        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

export const DeleteVehicle = (vehId, userId) => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.post(`${PROD}/removeVehicle`, { id: vehId, block: true }).then(res => {
            dispatch({ type: FETCH_SUCCESS })
            message.success('Vehicle deleted')



            dispatch(gettingCustVehicles(userId))
        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

export const getAllEscalations = () => async dispatch => {
    try {

        dispatch({ type: FETCH_START })
        axios.get(`${PROD}/Getescallationlevel`).then(res => {
            dispatch({ type: FETCH_SUCCESS })

            dispatch({ type: escalationLevels, payload: res.data })
        })

    } catch (err) {
        dispatch({ type: FETCH_ERROR, payload: err?.response?.data?.error });
        console.log("Error****:", err?.response?.data?.error);
    }
}

