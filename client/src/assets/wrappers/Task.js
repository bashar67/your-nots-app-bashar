import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .task-box {
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
  .sec-box {
    display: flex;
  }
  .task-box label {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 12px;
  }

  .task-box .custom-checkbox {
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }

  .task-box .checkmark {
    display: inline-block;
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #ccc;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .task-box .checkmark:after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 12px;
    border: solid var(--main-color);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .task-box .custom-checkbox:checked ~ .checkmark {
    background-color: var(--main-color);
    border-color: var(--main-color);
  }

  .task-box .custom-checkbox:checked ~ .checkmark:after {
    border-color: #fff;
    opacity: 1;
  }

  .task-text {
    color: #494c6b;
    font-weight: 400;
  }

  .task-completed {
    color: #d1d2da;
    text-decoration: line-through solid #ddd 2px;
    font-size: 20px;
  }

  .task-box svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export default Wrapper;
