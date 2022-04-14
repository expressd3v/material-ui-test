import TAction from "../types/action.type"
import {SET_STEP, UPDATE_INVITE} from "../types/dispatch"

const initialState = {
    current: 'step1',
    data: {
        name: "",
        email: "",
        note: "",
        mode: "email",
        visible: false,
        link: "https://codetribe.com/profile/tokenxyz"
    }
}

const StepReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case SET_STEP:
            return {
                ...state,
                current: action.payload.current,
            }
        case UPDATE_INVITE:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                },
            }
        default:
            return { ...state }
    }
}

export default StepReducer
