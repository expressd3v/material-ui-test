import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from "./reducers/root.reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


export const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


