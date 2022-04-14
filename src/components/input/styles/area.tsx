import styled from "styled-components";

const TextAreaWrap = styled.div`
  label {
    display: block;
    text-align: left;
    margin-bottom: 2px;
    padding-left: 32px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #364954;
  }
  textarea {
    display: block;
    width: 100%;
    height: 142px;
    border: 2px solid rgba(196, 196, 196, 0.5);
    border-radius: 25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    padding: 8px 24px;
    ::placeholder {
      color: rgba(196, 196, 196, 0.49);
    }
    :focus {
      outline: none;
    }
  }
`

export default TextAreaWrap