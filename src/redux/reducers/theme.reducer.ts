import TAction from "../types/action.type"
import { CHANGE_THEME } from "../types/dispatch"



const initialState = {
    current: 'light',

}

const ThemeReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                current: action.data.current,
            }
        default:
            return { ...state }
    }
}

export default ThemeReducer
