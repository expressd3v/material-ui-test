import React, {Fragment, useState} from 'react';
import {Alert, AlertTitle, Grid, Stack} from "@mui/material";
import {CTitle} from "../../../../components/heading/h3";
import RoundedInput from "../../../../components/input/rounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {changeStepAction, updateInviteAction} from "../../../../redux/actions/step.action";
import RoundedInputArea from "../../../../components/input/area";
import RoundedButton from "../../../../components/button/rounded";
import {useDispatch, useSelector} from "react-redux";

const Step2A = () => {
    const dispatch = useDispatch();
    const step = useSelector((state: any) => state.step);
    const [err, setErr] = useState<string>("");
    const sendHandler = () => {
        //todo: action
        if(!!step.data.email) {
            dispatch(changeStepAction('step3'))
        } else {
            setErr("Please select an email address")
        }
    }
    return (
        <Fragment>
            <Stack spacing={3}>
                {
                    !!err && (
                        <Alert severity="warning">
                            {err}
                        </Alert>
                    )
                }

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
                            !!e.target.value && setErr("")
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
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <RoundedButton
                            color="secondary"
                            variant="contained"
                            onClick={()=>{dispatch(changeStepAction('step2'))}}
                        >
                            <ArrowBackIosNewIcon/>
                        </RoundedButton>
                    </Grid>
                    <Grid item xs={9}>
                        <RoundedButton
                            color="success"
                            variant="contained"
                            endIcon={<ArrowForwardIosIcon/>}
                            onClick={sendHandler}
                        >
                            EMAIL INVITE
                        </RoundedButton>
                    </Grid>

                </Grid>
            </Stack>
        </Fragment>
    );
};

export default Step2A;