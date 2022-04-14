import React, {FC, Fragment} from 'react';
import {
    Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkIcon from '@mui/icons-material/Link';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import RoundedInput from "../../../../components/input/rounded";
import {P1} from '../../../../components/paragraph';
import {CTitle} from '../../../../components/heading/h3';
import {useDispatch, useSelector} from "react-redux";
import {changeStepAction, updateInviteAction} from "../../../../redux/actions/step.action";


const Step1: FC = () => {
    const step = useSelector((state: any) => state.step)
    const dispatch = useDispatch();
    console.log(step)
    return (
        <Fragment>
            <Stack spacing={2}>
                <div>
                    <CTitle>
                        ADD A FRIEND
                    </CTitle>
                    <P1>
                        How do you wanna invite?
                    </P1>
                </div>
                <div>
                    <RoundedInput
                        onChange={(e) => {
                            dispatch(updateInviteAction({email: e.target.value}))
                        }}
                        label="FRIEND'S EMAIL"
                        prefix={{
                            icon: <MailOutlineIcon/>
                        }}
                        suffix={{
                            icon: <SendIcon/>,
                            action: () => {
                                dispatch(updateInviteAction({mode: 'email'}))
                                dispatch(changeStepAction('step2'))
                            }
                        }}
                        value={step.data.email}
                    />
                    <RoundedInput
                        onChange={(e) => {
                            dispatch(updateInviteAction({name: e.target.value}))
                        }}
                        label="USERNAME"
                        prefix={{
                            icon: <AlternateEmailIcon/>
                        }}
                        suffix={{
                            icon: <SendIcon/>,
                            action: () => {
                                dispatch(updateInviteAction({mode: 'name'}))
                                dispatch(changeStepAction('step2'))
                            }
                        }}
                        value={step.data.name}
                    />
                    <RoundedInput
                        disabled
                        label="codetribe.com/profile/xyz"
                        prefix={{
                            icon: <LinkIcon/>
                        }}
                        suffix={{
                            icon: <CopyAllIcon htmlColor=""/>,
                        }}
                    />
                </div>
                <P1>
                    TIP: Copy the link above and send it to your friends.
                </P1>
            </Stack>
        </Fragment>
    );
};

export default Step1;