import {combineReducers} from "redux";
import ThemeReducer from "./theme.reducer";

const RootReducer = combineReducers({
    theme: ThemeReducer
})

export default RootReducer
