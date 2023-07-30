import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/ProfilePage";

const Profile = (props) => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [username, setUserName] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  // const [password, setPassword] = useState(user?.password);
  const [phone, setPhone] = useState(user?.phone);
  const [birthYear, setBrithYear] = useState(user?.birthYear);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !phone || !birthYear) {
      // test and remove temporary
      displayAlert();
      return;
    }

    updateUser({ username, email, phone, birthYear });
  };

  const closePage = () => {
    props.setUserPage(false);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="username"
            value={username}
            handleChange={(e) => setUserName(e.target.value)}
          />
          <FormRow
            labelText="email"
            type="text"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormRow
            type="text"
            name="phone"
            value={phone}
            handleChange={(e) => setPhone(e.target.value)}
          />

          <FormRow
            type="text"
            name="birthYear"
            value={birthYear}
            handleChange={(e) => setBrithYear(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
          <button className="btn btn-block" type="button" onClick={closePage}>
            Close
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;

// <FormRow
//   type="password"
//   name="password"
//   value={password}
//   handleChange={(e) => setPassword(e.target.value)}
// />
