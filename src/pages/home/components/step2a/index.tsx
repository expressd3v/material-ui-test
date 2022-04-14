import React, {Fragment} from 'react';
import {Stack} from "@mui/material";
import {CTitle} from "../../../../components/heading/h3";
import RoundedInput from "../../../../components/input/rounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {changeStepAction, updateInviteAction} from "../../../../redux/actions/step.action";
import RoundedInputArea from "../../../../components/input/area";
import RoundedButton from "../../../../components/button/rounded";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch, useSelector} from "react-redux";

const Step2A = () => {
    const dispatch = useDispatch();
    const step = useSelector((state: any) => state.step)
    const sendHandler = () => {
        //todo: action
        dispatch(changeStepAction('step3'))
    }
    return (
        <Fragment>
            <Stack spacing={3}>
                <div>
                    <CTitle>
                        ADD A FRIEND
                    </CTitle>
                </div>
                <div>
                    <RoundedInput
                        value={step.data.email}
                        label={"FRIEND'S EMAIL"}
                        prefix={{
                            icon: <MailOutlineIcon/>
                        }}
                        onChange={(e) => {
                            dispatch(updateInviteAction( {email: e.target.value}))
                        }}
                    />
                    <RoundedInputArea
                        label="Wanna add a note?"
                        placeholder="Your Note"
                        value={step.data.note}
                        onChange={(e) => {
                            dispatch(updateInviteAction({note: e.target.value}))
                        }}
                    />
                </div>

                <RoundedButton
                    color="success"
                    variant="contained"
                    endIcon={<SendIcon className="flex-icon"/>}
                    onClick={sendHandler}
                >
                    Send
                </RoundedButton>
            </Stack>
        </Fragment>
    );
};

export default Step2A;