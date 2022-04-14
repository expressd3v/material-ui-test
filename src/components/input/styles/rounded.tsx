import styled from "styled-components";

interface Props {
    disabled?: boolean
}

const RoundedInputBox = styled.div<Props>`
  display: flex;
  height: 80px;
  align-items: center;
  border-radius: 80px;
  border: 2px solid rgba(196, 196, 196, 0.5);
  margin-bottom: 10px;
  padding: 7px;
  background-color: ${props => props.disabled ? 'rgba(196, 196, 196, 0.5)' : '#ffffff'};
  button {
    width: 66px;
    height: 66px;
    svg {
      width: 34px;
      height: 34px;
    }
  }
  
  input {
    font-size: 24px;
    font-weight: 700;
  }
`

export default RoundedInputBox