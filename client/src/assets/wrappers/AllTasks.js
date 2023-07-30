import { styled } from "styled-components";

const Wrapper = styled.div`
  .btns-box {
    margin: 0 auto;
    width: 540px;
    height: 68px;
    background-color: #fff;
    border-radius: 5px;
    border-bottom: 2px solid #e3e4f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
  .count {
    color: #9495a5;
    font-size: 14px;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 14px;
    font-weight: 700;
    color: #9495a5;
    cursor: pointer;
  }

  button:hover {
    color: var(--main-color);
  }
`;

export default Wrapper;
