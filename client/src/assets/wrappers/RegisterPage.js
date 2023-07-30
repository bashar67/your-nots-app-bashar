import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 200px 200px;
  margin: 0 auto;
  justify-content: center;
  justify-items: self-end;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    height: 600px;
  }

  h3 {
    text-align: center;
    color: var(--main-color);
    font-weight: bold;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--main-color);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  .btn-back {
    background-color: #7c8495;
  }
`;
export default Wrapper;
