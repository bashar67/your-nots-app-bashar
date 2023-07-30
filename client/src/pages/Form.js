import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import UserDetails from "../components/UserDetails";
import PersonalDetails from "../components/PersonalDetails";
import Img from "../components/Img";
import Login from "../components/Login";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const state = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  birthYear: "",
  phone: "",
  isMember: true,
  showAlert: true,
};

const Form = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(state);
  const [page, setPage] = useState(0);
  const [isArabic, setIsArabic] = useState(false);
  const pageTitle = ["Login", "Signup", "complete Signup"];

  const {
    isLoading,
    showAlert,
    displayAlert,
    passwordAlertMatch,
    registerUser,
    user,
    loginUser,
  } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      email,
      password,
      confirmPassword,
      phone,
      birthYear,
      isMember,
    } = values;

    if (isMember) {
      if (!email || !password) {
        displayAlert();

        return;
      }
    } else {
      if (
        !email ||
        !password ||
        !username ||
        !confirmPassword ||
        !phone ||
        !birthYear
      ) {
        displayAlert();
        return;
      }
    }
    const currentUser = { username, email, password, phone, birthYear };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
    if (!values.isMember) {
      setPage(0);
    } else {
      setPage(1);
    }
  };

  const prevStep = () => {
    setPage((currPage) => currPage - 1);
  };
  const nextStep = () => {
    const { password, confirmPassword, email } = values;
    if (!email || !password || !confirmPassword) {
      displayAlert();
      return;
    }

    if (password !== confirmPassword) {
      passwordAlertMatch();
      return;
    }

    if (email && password && confirmPassword) {
      setPage((currPage) => currPage + 1);
    }
  };

  const handleToggle = () => {
    setIsArabic(!isArabic);
  };
  const displayPage = () => {
    if (page === 0) {
      return (
        <Login
          values={values}
          handleChange={handleChange}
          isArabic={isArabic}
        />
      );
    } else if (page === 1) {
      return (
        <UserDetails
          nextStep={nextStep}
          values={values}
          handleChange={handleChange}
          isArabic={isArabic}
        />
      );
    } else if (page === 2) {
      return (
        <PersonalDetails
          onSubmit={onSubmit}
          prevStep={prevStep}
          values={values}
          handleChange={handleChange}
          isLoading={isLoading}
          isArabic={isArabic}
        />
      );
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <Img toggleFunc={handleToggle} isArabic={isArabic} />
      <form className="form" onSubmit={onSubmit} dir={isArabic ? "rtl" : "ltr"}>
        <h3>{pageTitle[page]}</h3>

        {values.showAlert && <Alert />}

        {displayPage()}

        {page === 0 && (
          <button type="submit" onChange={onSubmit} className="btn btn-block">
            {isArabic ? "تسجيل" : "submit"}
          </button>
        )}
        <p>
          {values.isMember
            ? isArabic
              ? "ليس لديك حساب ؟"
              : "Don’t have an account!"
            : isArabic
            ? "لديك حساب بالفعل "
            : "Already have an account?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember
              ? isArabic
                ? "تسجيل"
                : "SignUp"
              : isArabic
              ? "دخول"
              : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Form;
