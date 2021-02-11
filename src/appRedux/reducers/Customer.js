import { CUSTOMERS_GET, CUST_VEHICLES_GET, VEHICLE_ABOUT_EXPIRE, NEXT_VEH_SERVICE, GETTING_MODELS, APPOINTMENT_GET, INIT_URL, LOCATIONS_GET, OIL_MODEL_GET, PERMISSIONS_LIST, ROLES_LIST, USERS, USER_BY_ID, COMPANY_NAMES, VEHICLE_HISTORY, myStats, otherStats, othersStats, escalationLevels } from "../../constants/ActionTypes";

const INIT_STATE = {

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {


        case INIT_URL: {
            return {
                ...state
                //, initURL: action.payload 
            };
        }
        case CUST_VEHICLES_GET: {

            return { ...state, vehicleList: action.payload };
        }
        case GETTING_MODELS: {

            return { ...state, vehicleModels: action.payload };
        }
        case COMPANY_NAMES: {

            return { ...state, companyNames: action.payload };
        }
        case VEHICLE_HISTORY: {
            return { ...state, vehicleHistory: action.payload };
        }
        case LOCATIONS_GET: {

            return { ...state, locations: action.payload };
        }
        case VEHICLE_ABOUT_EXPIRE: {

            return { ...state, vehicleLicenseStatus: action.payload };
        }
        case NEXT_VEH_SERVICE: {

            return { ...state, nextVehService: action.payload };
        }

        case APPOINTMENT_GET: {

            return { ...state, appointments: action.payload };
        }
        case myStats: {

            return { ...state, myStats: action.payload };
        }
        case othersStats: {

            return { ...state, othersStats: action.payload };
        }
        case escalationLevels: {

            return { ...state, allLevels: action.payload };
        }

        default:
            return state;
    }
}
