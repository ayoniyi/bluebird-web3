/* eslint-disable no-console */
import { useState, useEffect } from "react";
//import ReactDOM from "react-dom";
//import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AppContainer from "../../components/AppContainer/AppContainer";
import Nav from "../../components/Nav/Nav";
import RightBar from "../../components/RightBar/RightBar";
import PageContent from "../../components/PageContent/PageContent";
//import { CircularProgress } from "@material-ui/core";
//import { get, post, put } from "../../utils/axiosLib";
//import { logger } from "../../utils/logger";
import { useParams } from "react-router";
//import Update from "../../components/Update/Update";
import Tweet from "../../components/Tweet/Tweet";

import style from "./Profile.module.scss";
import style2 from "../../components/Feed/Feed.module.scss";
import arrow from "../../images/icons/arrow.svg";
import location from "../../images/icons/locale.svg";
import Cover from "../../images/others/cover.jpeg";
import avi from "../../images/others/avatar.jpeg";
//import Message from "../../images/icons/nav/message.svg";

import {
  truncateAddress,
  truncateAddressL,
  truncateAddressM,
} from "../../utils/truncateAdr";
import {
  useContract,
  useContractEvents,
  //useAddress,
} from "@thirdweb-dev/react";
import { STATUS_CONTRACT_ADDRESS } from "../../constants/addresses";
//import Loader from "../../images/loading.gif";
import { CircularProgress } from "@material-ui/core";

//const portalElement: any = document.getElementById("modalOverlay");

// interface Modal {
//   modal?: string;
//   modalStatus?: boolean;
//   modalState?: boolean;
// }
interface Status {
  errMsg?: string;
  isLoading?: boolean;
  isLoadingTweets?: boolean;
}

const Profile = () => {
  const address: any = useParams().address;
  const navigate = useNavigate();
  //const [currentPage, setCurrentPage] = useState<string>("Profile");
  //const [paramUser, setParamUser] = useState<any>({});
  const [status, setStatus] = useState<Status>({
    errMsg: "",
    isLoading: true,
    isLoadingTweets: true,
  });

  //const [authState, setAuthState] = useContext<any>(AuthContext);
  //const currentUser: any = authState.user.user;
  // const [modalValues, setModalValues] = useState<Modal>({
  //   modal: "None",
  //   modalStatus: false,
  //   modalState: false,
  // });
  // const [tweetView, setTweetView] = useState<any>({
  //   tweetType: "tweets",
  //   currentTweets: [],
  // });
  // const [usersTweets, setUsersTweets] = useState<number>(0);
  // const [followed, setFollowed] = useState<boolean>();

  const { contract } = useContract(STATUS_CONTRACT_ADDRESS);

  const { data: userTweets } = useContractEvents(contract, "NewTweet", {
    subscribe: true,
    queryFilter: {
      filters: {
        user: address,
      },
    },
  });

  // useEffect(() => {
  // const loadProfile = async () => {
  //   if (username === currentUser.username) {
  //     setCurrentPage("Profile");
  //   } else {
  //     setCurrentPage("Home");
  //   }
  //   try {
  //     const endpoint = `${
  //       import.meta.env.VITE_APP_BASE_URL
  //     }user?username=${username}`;
  //     const profileReq = await get(endpoint);
  //     ////logger(profileReq.data)
  //     setParamUser(profileReq.data);
  //     // setParamUser((prevState: any) => {
  //     //   return { ...prevState, paramUser: profileReq.data }
  //     // })
  //     setStatus({
  //       errMsg: "",
  //       isLoading: false,
  //     });
  //     //logger("profile>>>", profileReq.data);
  //   } catch (err) {
  //     //}catch(err: any | undefined | {}){

  //     //paramUser.profilePicture
  //     setStatus({
  //       errMsg: "Sorry an error occured...",
  //       isLoading: false,
  //     });
  //   }
  // };
  // loadProfile();
  //}, [username, authState.latestFollow]);

  useEffect(() => {
    // Set a timeout for 2 seconds
    const timer = setTimeout(() => {
      setStatus({
        errMsg: "",
        isLoading: false,
        isLoadingTweets: false,
      });
    }, 5000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const loadTweets = async () => {
  //     try {
  //       const endpoint = `${
  //         import.meta.env.VITE_APP_BASE_URL
  //       }post/tweets/${username}`;
  //       const tweetsReq = await get(endpoint);
  //       ////logger('tweets', tweetsReq.data)
  //       setTweetView({
  //         tweetType: "tweets",
  //         currentTweets: tweetsReq.data,
  //       });
  //       setUsersTweets(tweetsReq.data.length);
  //       setStatus({
  //         errMsg: "",
  //         isLoading: false,
  //         isLoadingTweets: false,
  //       });
  //     } catch (err) {
  //       //}catch(err: any | undefined | {}){
  //       // //logger(err)
  //       setStatus({
  //         errMsg: "Tweets are not loading right now...",
  //         isLoading: false,
  //         isLoadingTweets: false,
  //       });
  //     }
  //   };
  //   loadTweets();
  // }, [username]);

  // const handleModal = () => {
  //   setTimeout(() => {
  //     setModalValues({
  //       ...modalValues,
  //       modal: "None",
  //       modalState: false,
  //     });
  //   }, 300);
  //   setModalValues({
  //     ...modalValues,
  //     modalStatus: false,
  //   });
  // };
  // const handleUpdate = () => {
  //   setModalValues({
  //     ...modalValues,
  //     modal: "Update",
  //     modalState: true,
  //     modalStatus: true,
  //   });
  // };
  // const handleFollow = async () => {
  //   try {
  //     if (followed) {
  //       setFollowed(false);
  //       const endpoint =
  //         `${import.meta.env.VITE_APP_BASE_URL}user/` +
  //         paramUser._id +
  //         "/unfollow";
  //       const unfollowReq = await put(endpoint, { userId: currentUser._id });
  //       setAuthState({
  //         ...authState,
  //         user: {
  //           ...authState.user,
  //           user: {
  //             ...authState.user.user,
  //             following: authState.user.user.following.filter(
  //               (following: any) => following !== paramUser._id
  //             ),
  //           },
  //         },
  //         latestFollow: Math.random() * 10,
  //       });
  //       //logger("unfollow>>", unfollowReq);
  //       ////logger(authState.user.user.following);
  //     } else {
  //       setFollowed(true);
  //       const endpoint =
  //         `${import.meta.env.VITE_APP_BASE_URL}user/` +
  //         paramUser._id +
  //         "/follow";
  //       const followReq = await put(endpoint, { userId: currentUser._id });
  //       setAuthState({
  //         ...authState,
  //         user: {
  //           ...authState.user,
  //           user: {
  //             ...authState.user.user,
  //             following: [...authState.user.user.following, paramUser._id],
  //           },
  //         },
  //         latestFollow: Math.random() * 10,
  //       });
  //       //logger("follow>>", followReq);
  //       ////logger(authState.user.user.following);
  //     }
  //   } catch (err) {
  //     //logger(err);
  //   }
  // };
  // useEffect(() => {
  //   setFollowed(currentUser.following.includes(paramUser._id));
  //   ////logger("do i follow?  ", currentUser.following.includes(paramUser._id));
  //   ////logger('url user??  ', paramUser._id)
  //   ////logger('current context >>> ', currentUser.following)
  // }, [currentUser.following, paramUser._id]);

  // const loadTweets = async () => {
  //   setStatus({
  //     errMsg: "",
  //     isLoading: false,
  //     isLoadingTweets: true,
  //   });
  //   try {
  //     const endpoint = `${
  //       import.meta.env.VITE_APP_BASE_URL
  //     }post/tweets/${username}`;
  //     const tweetsReq = await get(endpoint);
  //     // //logger("tweets", tweetsReq.data);
  //     setTweetView({
  //       tweetType: "tweets",
  //       currentTweets: tweetsReq.data,
  //     });
  //     setStatus({
  //       errMsg: "",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   } catch (err) {
  //     //}catch(err: any | undefined | {}){
  //     //logger(err);
  //     setStatus({
  //       errMsg: "Tweets are not loading right now...",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   }
  // };
  // const loadRetweets = async () => {
  //   setStatus({
  //     errMsg: "",
  //     isLoading: false,
  //     isLoadingTweets: true,
  //   });
  //   try {
  //     const endpoint = `${
  //       import.meta.env.VITE_APP_BASE_URL
  //     }post/retweets/${username}`;
  //     const tweetsReq = await get(endpoint);
  //     console.log("tweets?", tweetsReq.data);
  //     ////logger("tweets", tweetsReq.data);
  //     setTweetView({
  //       tweetType: "retweets",
  //       currentTweets: tweetsReq.data,
  //     });
  //     setStatus({
  //       errMsg: "",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   } catch (err) {
  //     //}catch(err: any | undefined | {}){
  //     // //logger(err)
  //     setStatus({
  //       errMsg: "Tweets are not loading right now...",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   }
  // };
  // const loadLikes = async () => {
  //   setStatus({
  //     errMsg: "",
  //     isLoading: false,
  //     isLoadingTweets: true,
  //   });
  //   try {
  //     const endpoint = `${
  //       import.meta.env.VITE_APP_BASE_URL
  //     }post/likes/${username}`;
  //     const tweetsReq = await get(endpoint);
  //     console.log("tweets?", tweetsReq.data);
  //     // //logger("likes", tweetsReq.data);
  //     setTweetView({
  //       tweetType: "likes",
  //       currentTweets: tweetsReq.data,
  //     });
  //     setStatus({
  //       errMsg: "",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   } catch (err) {
  //     //}catch(err: any | undefined | {}){
  //     // //logger(err)
  //     setStatus({
  //       errMsg: "Tweets are not loading right now...",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   }
  // };
  // const loadMedia = async () => {
  //   setStatus({
  //     errMsg: "",
  //     isLoading: false,
  //     isLoadingTweets: true,
  //   });
  //   try {
  //     const endpoint = `${
  //       import.meta.env.VITE_APP_BASE_URL
  //     }post/media/${username}`;
  //     const tweetsReq = await get(endpoint);
  //     ////logger("tweets", tweetsReq.data);
  //     setTweetView({
  //       tweetType: "media",
  //       currentTweets: tweetsReq.data,
  //     });
  //     setStatus({
  //       errMsg: "",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   } catch (err) {
  //     //}catch(err: any | undefined | {}){
  //     // //logger(err)
  //     setStatus({
  //       errMsg: "Tweets are not loading right now...",
  //       isLoading: false,
  //       isLoadingTweets: false,
  //     });
  //   }
  // };

  // const handleMessage = async () => {
  //   const endpoint = `${import.meta.env.VITE_APP_BASE_URL}conversation/start/${
  //     currentUser._id
  //   }/${paramUser._id}`;
  //   const obj = {
  //     startedAt: Date.now(),
  //   };
  //   const res = await post(endpoint, obj);
  //   //logger("res", res);
  //   navigate("/conversations");
  // };
  return (
    <AppContainer>
      <Nav currentPage="Profile" />
      {status.isLoading ? (
        <div className={style2.loaderBox}>
          <CircularProgress color="inherit" size="45px" />
        </div>
      ) : (
        <PageContent>
          {/* {modalValues.modalState && (
            <>
              {ReactDOM.createPortal(
                <div
                  className={
                    style.overlay + " animate__animated animate__fadeIn"
                  }
                  onClick={handleModal}
                ></div>,
                portalElement
              )}
              {modalValues.modal === "Update" && (
                <Update
                  handleModal={handleModal}
                  modalState={modalValues.modalState}
                  modalStatus={modalValues.modalStatus}
                />
              )}
            </>
          )} */}
          <div className={style.headerPro}>
            {/* <Link to="/" className={style.back}> */}
            <div className={style.back} onClick={() => navigate(-1)}>
              <img style={{ cursor: "pointer" }} src={arrow} alt="back" />
            </div>

            {/* </Link> */}
            <div className={style.userBox}>
              <h1> {truncateAddressM(address)}</h1>
              {/* <p>{usersTweets} Tweets</p> */}
              <p> Tweets</p>
            </div>
          </div>
          <div className={style.profileBox}>
            <div className={style.coverImgBox}>
              <img src={Cover} alt="cover" />
            </div>
            <img className={style.avatar} src={avi} alt="avi" />
            <div className={style.profileDesc}>
              <div className={style.pdTop}>
                {/* {paramUser.username !== currentUser.username && (
                  <div className={style.messageCircle} onClick={handleMessage}>
                    <img src={Message} alt="messsage" />
                  </div>
                )}
                {paramUser.username === currentUser.username && (
                  <button onClick={handleUpdate}>Edit Profile</button>
                )}
                {paramUser.username !== currentUser.username && (
                  <button onClick={handleFollow}>
                    {" "}
                    {followed ? "Unfollow" : "Follow"}
                  </button>
                )} */}
              </div>
              <div className={style.pdBody}>
                <div className={style.pdnames}>
                  <h1>{truncateAddressL(address)}</h1>
                  <p>@{truncateAddress(address)}</p>
                </div>
                {/* <p className={style.pdBio}>{paramUser.bio}</p> */}
                <div className={style.pdl}>
                  <img src={location} alt="location" />
                  {/* <p>{paramUser.location}</p> */}
                  <p>earth</p>
                </div>
              </div>
              <div className={style.pdBtm}>
                <p>
                  {/* <span>{paramUser?.following?.length}</span>Following */}
                </p>
                <p>
                  {/* <span>{paramUser?.followers?.length}</span>Followers */}
                </p>
              </div>
            </div>
            <div className={style.tweetTypes}>
              <div className={style.typesTop}>
                <div
                  className={style.typeSingle}
                  //onClick={loadTweets}
                >
                  <h2>Tweets</h2>
                  {/* {tweetView.tweetType === "tweets" && ( */}
                  <div className={style.line}></div>
                  {/* )} */}
                </div>
                {/* <div className={style.typeSingle} onClick={loadRetweets}>
                  <h2>Retweets</h2>
                  {tweetView.tweetType === "retweets" && (
                    <div className={style.line}></div>
                  )}
                </div>
                <div className={style.typeSingle} onClick={loadMedia}>
                  <h2>Media</h2>
                  {tweetView.tweetType === "media" && (
                    <div className={style.line}></div>
                  )}
                </div>
                <div className={style.typeSingle} onClick={loadLikes}>
                  <h2>Likes</h2>
                  {tweetView.tweetType === "likes" && (
                    <div className={style.line}></div>
                  )}
                </div> */}
              </div>
              <div className={style.typesBody}>
                {status.isLoadingTweets ? (
                  <div className={style2.loaderBox}>
                    {/* <CircularProgress color="inherit" size="45px" /> add loader icon */}
                  </div>
                ) : (
                  <>
                    {userTweets?.map((event, index) => (
                      <Tweet
                        // key={tweet._id}
                        // tweetFull={tweet}
                        key={index}
                        walletAddress={event.data.user}
                        newStatus={event.data.newTweet}
                        timeStamp={event.data.timestamp}
                      />
                    ))}
                    {/* {tweetView.currentTweets.length >= 1 &&
                      tweetView.currentTweets.map((tweet: any) => (
                        <Tweet key={tweet._id} tweetFull={tweet} />
                      ))}
                    {tweetView.currentTweets.length < 1 && (
                      <div className={style2.loaderBox}>
                        <p style={{ color: "#fff" }}>Nothing to see here yet</p>
                      </div>
                    )} */}
                  </>
                )}
              </div>
            </div>
          </div>
        </PageContent>
      )}
      <RightBar />
    </AppContainer>
  );
};

export default Profile;
