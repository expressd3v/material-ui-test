import React, {FC} from 'react';
import Step1 from "./components/step1";
import {Container, Button, Grid, Modal} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useDispatch, useSelector} from "react-redux";
import {changeStepAction, updateInviteAction} from "../../redux/actions/step.action";
import ModalBox from '../../components/box/modal';
import Step2 from './components/step2';
import Step2A from "./components/step2a";
import Step3 from './components/step3';

const HomePage: FC = () => {
    const step = useSelector((state: any) => state.step)
    const dispatch = useDispatch();
    const current: "step1" | "step2" | "step2a" | "step3" = step.current || "step1"

    return (
        <div>
            <Container maxWidth="xl" sx={{height: 'calc(100vh - 100px)'}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{height: '100%'}}
                >
                    <Button
                        color='secondary'
                        variant='outlined'
                        startIcon={<AddIcon htmlColor="#D40073"/>}
                        onClick={() => {dispatch(updateInviteAction({visible: true}))}}
                    >
                        A FRIEND
                    </Button>
                </Grid>
            </Container>
            <Modal
                open={step.data.visible}
                onClose={()=>{
                    dispatch(updateInviteAction({visible: false}));
                    dispatch(changeStepAction('step1'));
                }}
            >
                <ModalBox>
                    {{
                        'step1' : <Step1/>,
                        'step2' : <Step2/>,
                        'step2a' : <Step2A/>,
                        'step3' : <Step3/>,
                    }[current]}
                </ModalBox>
            </Modal>


        </div>
    );
};

export default HomePage;

