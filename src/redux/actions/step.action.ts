import {SET_STEP, UPDATE_INVITE} from "../types/dispatch";


const changeStepAction = (current: string) => (dispatch: any) => {
    dispatch({
        type: SET_STEP,
        payload: {
            current: current
        }
    })
}

const updateInviteAction = (data: any) => (dispatch: any) => {
    dispatch({
        type: UPDATE_INVITE,
        payload: data
    })
}

export {changeStepAction, updateInviteAction}