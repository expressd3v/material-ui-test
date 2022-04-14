import React, {FC} from 'react';
import {IconButton, InputBase} from "@mui/material";
import RoundedInputBox from './styles/rounded';

interface InputProps {
    label?: string;
    suffix?: {
        icon: any;
        action?: (value?: any) => void;
    };
    prefix?: {
        icon: any;
        action?: (value?: any) => void;
    },
    disabled?: boolean;
    onChange?: (e: any) => void;
    value?: string;
    defaultValue?: string;
}

const RoundedInput: FC<InputProps> = (props) => {
    const {
        label,
        suffix,
        prefix,
        disabled,
        onChange,
        value,
        defaultValue,
    } = props
    return (
        <RoundedInputBox
            disabled={disabled}
        >
            <IconButton
                onClick={prefix?.action}
                sx={{
                    bgcolor: disabled ? 'transparent' : 'rgba(196, 196, 196, 0.5)'
                }}
            >
                {prefix?.icon}
            </IconButton>
            <InputBase
                disabled={disabled}
                sx={{ml: 1, flex: 1}}
                placeholder={label}
                inputProps={{'aria-label': 'search google maps'}}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
            />

            {!!suffix &&
                (
                    <IconButton
                        onClick={suffix?.action}
                    >
                        {suffix?.icon}
                    </IconButton>
                )
            }
        </RoundedInputBox>
    );
};

export default RoundedInput;