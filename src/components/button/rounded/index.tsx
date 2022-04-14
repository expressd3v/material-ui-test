import {Button, styled} from "@mui/material";

const RoundedButton = styled(Button)`
  height: 80px;
  border-radius: 60px;
  font-size: 34px;
  font-weight: 700;
  color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;  
  width: 100%;
  .MuiTouchRipple-root{
    width: 100%;
    display: flex;
  }
  .flex-icon{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 40px;
    top: calc(50% - 20px);
    color: rgba(0, 0, 0, 1);
  }
`

export default RoundedButton