import React, {FC} from 'react';
import TextAreaWrap from "./styles/area";

interface Props {
    label?: string;
    placeholder?: string;
    onChange?: (e: any) => void;
    value?: string;
    defaultValue?: string;
}

const RoundedInputArea: FC<Props> = (props) => {
    const {label, placeholder, onChange, value, defaultValue} = props
    return (
        <TextAreaWrap>
            <label htmlFor="">{label}</label>
            <textarea
                name=""
                id=""
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
            />
        </TextAreaWrap>
    );
};

export default RoundedInputArea;