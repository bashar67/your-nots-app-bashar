import styled from "styled-components";

const Wrapper = styled.nav`
  height: 50px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .btn-container button {
    color: var(--main-color);
    border: none;
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
  }
  .btn-container svg {
    color: var(--main-color);
    cursor: pointer;
    font-size: 20px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }
  .user-window {
    position: absolute;
    top: 110%;
    right: 1%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: #fff;
    width: 263px;
    height: 231px;
    border-radius: 15px;
  }
  .btn-user-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  /* .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  } */
  .logo-text {
    display: none;
    margin: 0;
  }

  .user-name {
    color: var(--main-color);
    font-size: 20px;
    font-weight: 600;
  }

  .btn-window {
    color: #fff;
    font-size: 20px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
  }
  .modify-btn {
    background-color: #7c8495;

    padding: 7px 50px;
  }
  .logout-btn {
    background-color: #d375b9;

    padding: 7px 90px;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
