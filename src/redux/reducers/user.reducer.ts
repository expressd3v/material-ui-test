import TAction from "../types/action.type"
import {SET_USERS} from "../types/dispatch"



const initialState = {
    users: []
}

const UsersReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return { ...state }
    }
}

export default UsersReducer
