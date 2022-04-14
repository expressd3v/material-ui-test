import { Stack } from '@mui/material';
import React, {FC} from 'react';
import { useDispatch } from 'react-redux';
import RoundedButton from '../../../../components/button/rounded';
import { SuccessMessage } from '../../../../components/heading/h4';
import { P1 } from '../../../../components/paragraph';
import {changeStepAction, updateInviteAction} from "../../../../redux/actions/step.action";

const Step3: FC = () => {
    const dispatch = useDispatch();
    return (
        <Stack spacing={3} sx={{alignItems: 'center'}}>
            <SuccessMessage>YOUR INVITATION WAS SENT SUPER SUCCESSFULLY.</SuccessMessage>
            <P1>
                You can send another.
            </P1>
            <RoundedButton
                sx={{width: 300}}
                color='secondary'
                variant='contained'
                onClick={()=>{
                    dispatch(changeStepAction('step1'));
                    dispatch(updateInviteAction({visible: false}))
                }}
            >
                GOT IT
            </RoundedButton>
        </Stack>
    );
};

export default Step3;