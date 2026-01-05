import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        //gender
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state }
            copyState.isLoadingGender = true
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data
            state.isLoadingGender = true
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false
            state.genders = []
            return {
                ...state,
            }

        //role
        case actionTypes.FETCH_ROLE_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            //let copyStateRole = { ...state }
            state.roles = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            return {
                ...state,
            }

        //position
        case actionTypes.FETCH_POSITION_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            //let copyStateRole = { ...state }
            state.positions = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            return {
                ...state,
            }

        //Users
        // case actionTypes.FETCH_ALL_USERS_START:
        //     return {
        //         ...state,
        //     }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            //let copyStateRole = { ...state }
            state.users = action.users
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USERS_FAILED:
            return {
                ...state,
            }

        case actionTypes.FETCH_TOP_DOCTORS_SUCCESS:
            //let copyStateRole = { ...state }
            state.topDoctors = action.dataDoctors
            return {
                ...state,
            }
        case actionTypes.FETCH_TOP_DOCTORS_FAILED:
            state.topDoctors = []
            return {
                ...state,
            }



        default:
            return state;
    }
}

export default adminReducer;