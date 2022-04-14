import {compose, createStore} from "redux";
import RootReducer from "./reducers/root.reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const store = createStore(
    RootReducer
)

export {store}
