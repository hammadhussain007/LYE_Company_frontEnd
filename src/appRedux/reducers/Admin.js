import { INIT_URL, ROLES_LIST } from "../../constants/ActionTypes";

const INIT_STATE = {

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {


        case INIT_URL: {
            return { ...state, initURL: action.payload };
        }
        case ROLES_LIST: {

            return { ...state, rolesList: action.payload };
        }


        default:
            return state;
    }
}
