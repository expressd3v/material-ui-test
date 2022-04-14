import {SET_USERS} from "../types/dispatch";
import {getUsersApi} from "../../api/endpoints/users";

const getUsersAction = () => (dispatch: any) => {
    getUsersApi()
        .then((res) => {
            return dispatch({
                type: SET_USERS,
                payload: res.data
            })
        })
        .catch((e) => console.log(e));
}

export {getUsersAction}