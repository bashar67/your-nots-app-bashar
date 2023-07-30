import { useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { Navbar } from "../../components";
import AddTask from "./AddTask";
import Profile from "./Profile";
import AllTasks from "./AllTasks";

const SharedLayout = () => {
  const [userPage, setUserPage] = useState(false);
  const [isToggleLang, setIsToggleLang] = useState(false);

  const handleToggle = () => {
    setIsToggleLang(!isToggleLang);
  };
  return (
    <Wrapper>
      <main className="dashboard">
        <Navbar
          userPage={userPage}
          setUserPage={setUserPage}
          handleToggle={handleToggle}
          isToggleLang={isToggleLang}
        />
        <div>
          <div className="dashboard-page">
            <Outlet />
            <AddTask userPage={userPage} />
            {userPage && (
              <Profile userPage={userPage} setUserPage={setUserPage} />
            )}
          </div>

          <AllTasks isToggleLang={isToggleLang} />
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
