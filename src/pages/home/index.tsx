import React, { FC, useState } from 'react';
import Step1 from "./components/step1";
import {Container, Button, Box, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const HomePage: FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const clickHandler = () => {
        setVisible(true)
    }

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
                        onClick={clickHandler}
                    >
                        A FRIEND
                    </Button>
                </Grid>
            </Container>
            <Step1 visible={visible} setVisible={setVisible}/>
        </div>
    );
};

export default HomePage;