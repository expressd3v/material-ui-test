import React, {FC} from 'react';
import { Modal, Box, Typography } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 494,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '15px',
    border: '2px solid #A6A6A6',
    pt: 2,
    px: 4,
    pb: 3,
};

interface StepProps {
    visible: boolean;
    setVisible: (value: boolean) => void;
}

const Step1: FC<StepProps> = (props) => {
    const {visible, setVisible} = props
    return (
        <Modal
            open={visible}
            onClose={() => { setVisible(false) }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    variant="h4"
                    component="h4"
                    align="center"
                >
                    ADD A FRIEND
                </Typography>
                <Typography
                    variant="body2"
                    component="p"
                    align="center"
                >
                    How do you wanna invite?
                </Typography>
            </Box>
        </Modal>
    );
};

export default Step1;