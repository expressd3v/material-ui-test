import React, {FC} from 'react';
import { IconButton, InputBase} from "@mui/material";
import RoundedInputBox from './styles/rounded';

interface InputProps {
    label?: string;
    suffix?: {
        icon: any;
    };
    prefix?: {
        icon: any;
    },
    disabled?: boolean;
}

const RoundedInput: FC<InputProps> = (props) => {
    const {
        label,
        suffix,
        prefix,
        disabled
    } = props
    return (
        <RoundedInputBox
            disabled={ disabled ? 'true': 'false'}
        >
            <IconButton
                sx={{
                    bgcolor: disabled ? 'transparent' : 'rgba(196, 196, 196, 0.5)'
                }}
            >
                {prefix?.icon}
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={label}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton

            >
                {suffix?.icon}
            </IconButton>
        </RoundedInputBox>
    );
};

export default RoundedInput;