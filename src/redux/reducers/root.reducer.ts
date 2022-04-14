import {combineReducers} from "redux";
import ThemeReducer from "./theme.reducer";
import UsersReducer from "./user.reducer";
import StepReducer from "./step.reducer";

const RootReducer = combineReducers({
    theme: ThemeReducer,
    user: UsersReducer,
    step: StepReducer
})

export default RootReducer
