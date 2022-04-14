import React, {FC} from 'react';
import {
    Modal,
    Box,
    Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkIcon from '@mui/icons-material/Link';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import RoundedInput from "../../../../components/input/rounded";
import { P1 } from '../../../../components/paragraph';
import { CTitle } from '../../../../components/heading/h3';

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
    textAlign: 'center'
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
            onClose={() => {
                setVisible(false)
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
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
                            label="FRIEND'S EMAIL"
                            prefix={{
                                icon: <MailOutlineIcon/>
                            }}
                            suffix={{
                                icon: <SendIcon/>
                            }}
                        />
                        <RoundedInput
                            label="USERNAME"
                            prefix={{
                                icon: <AlternateEmailIcon/>
                            }}
                            suffix={{
                                icon: <SendIcon/>
                            }}
                        />
                        <RoundedInput
                            disabled
                            label="codetribe.com/profile/xyz"
                            prefix={{
                                icon: <LinkIcon/>
                            }}
                            suffix={{
                                icon: <CopyAllIcon htmlColor=""/>
                            }}
                        />
                    </div>
                    <P1>
                        TIP: Copy the link above and send it to your friends.
                    </P1>
                </Stack>

            </Box>

        </Modal>
    );
};

export default Step1;