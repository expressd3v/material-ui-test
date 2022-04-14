import React, {FC, Fragment} from 'react';
import {Stack} from "@mui/material";
import {CTitle} from "../../../../components/heading/h3";
import RoundedInput from "../../../../components/input/rounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SendIcon from "@mui/icons-material/Send";
import RoundedInputArea from "../../../../components/input/area";
import RoundedButton from "../../../../components/button/rounded";
import {useDispatch, useSelector} from 'react-redux';
import {changeStepAction, updateInviteAction} from "../../../../redux/actions/step.action";

const Step2: FC = () => {
    const dispatch = useDispatch();
    const step = useSelector((state: any) => state.step)
    const users = useSelector((state: any) => state.user.users)
    const mode: "email" | "name" = step.data.mode
    const sendHandler = () => {
        if (step.data.mode === 'email') {
            const user = users.filter((u: any) => u.email === step.data.email)[0]
            if (!user) {
                console.log('no users')
                dispatch(changeStepAction('step2a'))
            } else {
                console.log(user)
                //Todo: action
                dispatch(changeStepAction('step3'))
            }
        } else {
            const user = users.filter((u: any) => u.name === step.data.name)[0]
            if (!user) {
                console.log('no users')
                dispatch(changeStepAction('step2a'))
            } else {
                console.log(user)
                //Todo: action
                dispatch(changeStepAction('step3'))
            }
        }
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
                        value={{
                            'email': step.data.email,
                            'name': step.data.name,
                        }[mode]}
                        label={{
                            'email': "FRIEND'S EMAIL",
                            'name': "USERNAME",
                        }[mode]}
                        prefix={{
                            icon: step.data.mode === 'email' ? <MailOutlineIcon/> : <AlternateEmailIcon/>
                        }}
                        onChange={(e) => {
                            dispatch(updateInviteAction(step.data.mode === 'name' ? {name: e.target.value} : {email: e.target.value}))
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

export default Step2;