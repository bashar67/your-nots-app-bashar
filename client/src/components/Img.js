import styled from "styled-components";
const formImg = require("../assets/images/form-img.jpg");

const BoxImg = styled.div`
  .img-box {
    /* width: 400px;
    height: 300px; */
    position: relative;
  }

  .img-form {
    border-radius: 7px;
  }

  .lang-btn {
    border: none;
    background-color: transparent;
    font-size: 30px;
    /* color: var(--main-color); */
    position: absolute;
    bottom: 10px;
    left: 0;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
  }
`;

const Img = ({ toggleFunc, isArabic }) => {
  return (
    <BoxImg>
      <div className="img-box">
        <img src={formImg} alt="test" className="img-form" />
        <button className="lang-btn" onClick={toggleFunc}>
          {isArabic ? "AR" : "EN"}
        </button>
      </div>
    </BoxImg>
  );
};

export default Img;
