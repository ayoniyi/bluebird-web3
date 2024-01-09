//import { useContext, useState, useEffect } from "react";
import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext.jsx";
// import { get } from "../../utils/axiosLib";
//import { logger } from "../../utils/logger";

// assets
import Logo from "../../images/icons/logo.svg";
import Home from "../../images/icons/nav/home.svg";
import Homefill from "../../images/icons/nav/home-fill.svg";
// import Message from "../../images/icons/nav/message.svg";
// import Messagefill from "../../images/icons/nav/message-fill.svg";
// import Notifications from "../../images/icons/nav/bell.svg";
// import Notificationsfill from "../../images/icons/nav/bell-fill.svg";
import Profile from "../../images/icons/nav/profile.svg";
import Profilefill from "../../images/icons/nav/profile-fill.svg";
// import Users from "../../images/icons/users.svg";
// import UsersFill from "../../images/icons/users-fill.svg";
//import Tweet from "../../images/icons/nav/tweet2.svg";
import avi from "../../images/others/avatar.jpeg";
//import { get } from "../../utils/axiosLib.js";

import { useDisconnect, useAddress } from "@thirdweb-dev/react";

const Nav = (props: any) => {
  const page: string = props.currentPage;
  //const navigate = useNavigate();
  const disconnect = useDisconnect();
  const address = useAddress();
  //const [authState, setAuthState] = useContext<any>(AuthContext);
  //const user: any = authState.user.user;

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   setAuthState({
  //     ...authState,
  //     user: null,
  //     isFetching: false,
  //     error: false,
  //   });
  //   navigate("/auth");

  //   //window.location.reload();
  // };

  // useEffect(() => {
  //   const loadNotifications = async () => {
  //     try {
  //       const endpoint = `${
  //         import.meta.env.VITE_APP_BASE_URL
  //       }user/notifications/temp/${user._id}`;
  //       const notReq = await get(endpoint);
  //       //logger(notReq);
  //       setNotes(notReq);
  //       //logger(notReq);
  //     } catch (err) {
  //       //logger(err);
  //     }
  //   };
  //   loadNotifications();
  // }, [user._id]);

  return (
    <div>
      <section className={style.container}>
        <div className={style.content}>
          <div className={style.top}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={style.items}>
            <Link
              className={
                page === "Home"
                  ? style.navItem + " " + style.active
                  : style.navItem
              }
              to="/"
            >
              <img src={page === "Home" ? Homefill : Home} alt="home" />
              <p>Home</p>
            </Link>
            {/* <Link
              className={
                page === "Notifications"
                  ? style.navItem + " " + style.active
                  : style.navItem
              }
              to="/notifications"
            >
              <img
                src={
                  page === "Notifications" ? Notificationsfill : Notifications
                }
                alt="notifications"
              />
              {notes >= 1 && (
                <div className={style.alert}>
                  {" "}
                  <h4 className={style.ap}>{notes}</h4>
                </div>
              )}

              <p>Notifications</p>
            </Link> */}

            <Link
              className={
                page === "Profile"
                  ? style.navItem + " " + style.active
                  : style.navItem
              }
              to={`/profile/${address}`}
            >
              <img
                src={page === "Profile" ? Profilefill : Profile}
                alt="profile"
              />
              <p>Profile</p>
            </Link>
            {/* <Link
              className={
                page === "Users"
                  ? style.navItem + " " + style.active
                  : style.navItem
              }
              to="/users"
            >
              <img
                src={page === "Users" ? UsersFill : Users}
                style={{ width: "24px", height: "22px" }}
                alt="users"
              />
              <p>Users</p>
            </Link> */}

            {/* <div className={style.tweet}>
              <button>Tweet</button>
              <img src={Tweet} alt="tweet" />
            </div> */}

            {/* <ConnectWallet /> */}

            <div className={style.bottomBox}>
              <div
                className={style.btmItem}
                //onClick={handleLogout}
                onClick={() => disconnect()}
              >
                <img src={avi} alt="avi" />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
