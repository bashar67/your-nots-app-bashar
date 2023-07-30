import { useAppContext } from "../context/appContext";

const UserWindow = ({ props, isArabic }) => {
  const { user, logoutUser } = useAppContext();

  const profileFunc = () => {
    props.setUserPage(!props.userPage);
    props.setShowWindow(false);
  };

  return (
    <div className="user-window">
      <p className="user-name">hi {user.username}</p>

      <div className="btn-user-container">
        <button
          type="button"
          className="modify-btn btn-window "
          onClick={profileFunc}
        >
          {isArabic ? "تعديل معلومات المستخدم" : "Modify User info"}
        </button>
        <button
          type="button"
          className="logout-btn btn-window"
          onClick={logoutUser}
        >
          {isArabic ? "تسجيل الخروج" : "logOut"}
        </button>
      </div>
    </div>
  );
};

export default UserWindow;
