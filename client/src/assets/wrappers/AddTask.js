import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: rgba(211, 117, 185, 0.3);
  box-shadow: var(--shadow-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .user-info-text {
    width: 540px;
    height: 64px;
    border-radius: 5px;
    background-color: #fff;
    color: var(--main-color);
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 700;
  }

  div {
    position: relative;
  }
  .task-input {
    width: 540px;
    height: 64px;
    font-size: 20px;
    background-color: #fff;
    border: none;
    border-radius: 10px;
  }
  input::placeholder {
    padding-left: 20px;
  }

  input:focus {
    border: none;
    outline: none;
  }

  .add-button {
    position: absolute;
    top: 33%;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
    color: var(--main-color);
  }
`;

export default Wrapper;
