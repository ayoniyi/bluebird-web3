/* eslint-disable no-console */
import { useState } from "react";
//import ReactDOM from 'react-dom'
//import { get, put } from "../../utils/axiosLib";
//import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
// import { AuthContext } from "../../context/AuthContext.jsx";
// import { motion } from "framer-motion";
// import { logger } from "../../utils/logger";
import { truncateAddress, truncateAddressM } from "../../utils/truncateAdr.js";
import { BigNumber } from "ethers";
//import { Cancel } from '@material-ui/icons'

import style from "./Tweet.module.scss";
import avi from "../../images/others/avatar.jpeg";
// import more from "../../images/icons/more.svg";
// import reply from "../../images/icons/reply.svg";
// import retweet from "../../images/icons/retweet.svg";
// import retweetFill from "../../images/icons/retweet-fill.svg";
// import like from "../../images/icons/like.svg";
// import likeFill from "../../images/icons/like-fill.svg";
// import V from "../../images/icons/verified.svg";
// import Del from "../../images/icons/bin.png";

// interface LikeStat {
//   like: number;
//   isLiked: boolean;
// }
// interface RetweetStat {
//   retweet: number;
//   isRetweeted: boolean;
// }
type EventCardProps = {
  walletAddress: string;
  newStatus: string;
  timeStamp: BigNumber;
};

const Tweet = (props: EventCardProps) => {
  const date = new Date(props.timeStamp.toNumber() * 1000);
  //const [user, setUser] = useState<any>({});
  //const portalElement: any = document.getElementById('msgBox')
  const [modal, setModal] = useState<boolean>(false);
  // const time: any = format(props.tweetFull.createdAt)
  // const timeForm: any = time.charAt(0) + time.charAt(2)
  //const tweet: any = props.tweetFull;
  // const [likeStat, setLikeStat] = useState<LikeStat>({
  //   like: tweet.likes.length,
  //   isLiked: false,
  // });
  // const [retweetStat, setRetweetStat] = useState<RetweetStat>({
  //   retweet: tweet.retweets.length,
  //   isRetweeted: false,
  // });
  // const [authState, setAuthState] = useContext<any>(AuthContext);
  // const userObj: any = authState.user.user;
  // const token: string = authState.user.token;
  // const [info, setInfo] = useState<any>({
  //   infoState: false,
  //   infoStatus: false,
  //   infoRes: "",
  // });

  // useEffect(() => {
  //   ////logger("likes from tweet >>>", tweet.likes);
  //   setLikeStat({
  //     like: tweet.likes.length,
  //     isLiked: tweet.likes.includes(userObj._id),
  //   });
  //   setRetweetStat({
  //     retweet: tweet.retweets.length,
  //     isRetweeted: tweet.retweets.includes(userObj._id),
  //   });
  // }, [tweet.likes, tweet.retweets, userObj._id]);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const endpoint = `${import.meta.env.VITE_APP_BASE_URL}user?userId=${
  //       tweet.userId
  //     }`;
  //     const userReq = await get(endpoint);
  //     setUser(userReq.data);
  //   };
  //   getUser();
  // }, [tweet.userId]);

  const modalStateHandler = async () => {
    if (modal) {
      setModal(false);
    }
  };

  // const handleDelete = async () => {
  //   const body = {
  //     headers: {
  //       "auth-token": `${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     userParams: {
  //       userId: userObj._id,
  //     },
  //   };
  //   const endpoint = `${import.meta.env.VITE_APP_BASE_URL}post/${tweet._id}`;
  //   try {
  //     const req = await axios.delete(endpoint, body);
  //     //return Promise.resolve({ status: req.status, data: req.data })
  //     ////logger('request payload  ', body)
  //     //logger(req);
  //     setAuthState({
  //       ...authState,
  //       latestTweet: Math.random() * 10,
  //     });
  //   } catch (err) {
  //     //logger("request payload  ", body);
  //     //logger(" ERROR::", err);
  //     //return Promise.reject(err)
  //   }
  //   setModal(false);
  // };

  // const likeHandler = async () => {
  //   try {
  //     const userParams = {
  //       likerId: userObj._id,
  //       ownerId: user._id,
  //     };
  //     const endpoint = `${import.meta.env.VITE_APP_BASE_URL}post/${
  //       tweet._id
  //     }/like`;
  //     setLikeStat({
  //       ...likeStat,
  //       like: likeStat.isLiked ? likeStat.like - 1 : likeStat.like + 1,
  //       isLiked: !likeStat.isLiked,
  //     });
  //     const likeReq = await put(endpoint, userParams);

  //     setInfo({
  //       infoState: false,
  //       infoStatus: false,
  //       infoRes: " ",
  //     });

  //     //logger("REQ RESPONSE::: ", likeReq);
  //   } catch (err) {
  //     //logger(err);
  //     setLikeStat({
  //       ...likeStat,
  //       like: likeStat.isLiked ? likeStat.like - 1 : likeStat.like + 1,
  //       isLiked: !likeStat.isLiked,
  //     });
  //   }
  // };

  // const infoHandler = () => {
  //   setInfo({
  //     infoState: true,
  //     infoStatus: true,
  //     infoRes: "You can't retweet or like your own tweet on BlueBird",
  //   });
  //   setTimeout(() => {
  //     setInfo({
  //       infoState: true,
  //       infoStatus: false,
  //       infoRes: "You can't retweet or like your own tweet on BlueBird",
  //     });
  //   }, 2500);
  //   setTimeout(() => {
  //     setInfo({
  //       infoState: false,
  //       infoStatus: false,
  //       infoRes: " ",
  //     });
  //   }, 4000);
  // };

  // const retweetHandler = async () => {
  //   try {
  //     const userParams = {
  //       retweeterId: userObj._id,
  //       ownerId: user._id,
  //     };
  //     const endpoint = `${import.meta.env.VITE_APP_BASE_URL}post/${
  //       tweet._id
  //     }/retweet`;

  //     setRetweetStat({
  //       ...retweetStat,
  //       retweet: retweetStat.isRetweeted
  //         ? retweetStat.retweet - 1
  //         : retweetStat.retweet + 1,
  //       isRetweeted: !retweetStat.isRetweeted,
  //     });

  //     const retweetReq = await put(endpoint, userParams);

  //     setInfo({
  //       infoState: false,
  //       infoRes: " ",
  //     });

  //     //logger("REQ RESPONSE::: ", retweetReq);
  //   } catch (err) {
  //     //logger(err);
  //     setRetweetStat({
  //       ...retweetStat,
  //       retweet: retweetStat.isRetweeted
  //         ? retweetStat.retweet - 1
  //         : retweetStat.retweet + 1,
  //       isRetweeted: !retweetStat.isRetweeted,
  //     });
  //   }
  // };

  return (
    <div className={style.container} onClick={modalStateHandler}>
      <div className={style.content}>
        <Link to={`/profile/${props.walletAddress}`} className={style.left}>
          <img src={avi} alt="avatar" />
        </Link>
        <div className={style.right}>
          <div className={style.rightTop}>
            <div className={style.rightTitles}>
              {/* <p className={style.name}> {user.name || user.username}</p> */}
              <Link
                to={`/profile/${props.walletAddress}`}
                className={style.left}
              >
                <p className={style.name}>
                  {" "}
                  {truncateAddressM(props.walletAddress)}
                </p>
              </Link>
              <p className={style.handle}>
                {" "}
                @{truncateAddress(props.walletAddress)}
              </p>
              {/* {user.isAdmin && (
                <img className={style.right2} src={V} alt="verified" />
              )} */}
              {/* <p className={style.time}>10h</p> */}
              <p className={style.time}>
                {format(date)}
                {/* {date.toLocaleString()} */}
              </p>
            </div>
            {/* {userObj._id === tweet.userId && (
              <div className={style.more}>
                <img src={more} alt="more" onClick={() => setModal(true)} />
                {modal && (
                  <motion.div
                    className={style.moreBox}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.4,
                      },
                      visible: {
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          type: "spring",
                        },
                      },
                    }}
                  >
                    <div className={style.moreItem} onClick={handleDelete}>
                      <img src={Del} alt="delete" />
                      <p className={style.red}>Delete tweet</p>
                    </div>
                  </motion.div>
                )}
              </div>
            )} */}
          </div>
          <div className={style.rightDesc}>
            {/* <p>{tweet?.desc}</p> */}
            <p>{props.newStatus}</p>
            {/* {tweet.img && <img src={tweet?.img} alt="tweetimg" />} */}
          </div>
          {/* <div className={style.rightBtm}>
            <Link to={`/singletweet/${tweet._id}`} className={style.actions}>
              <img src={reply} alt="reply" />
              {tweet.replies.length > 0 && <p>{tweet.replies.length}</p>}
            </Link>
            <div className={style.actions}>
              {userObj._id !== tweet.userId && (
                <img
                  src={
                    retweetStat.isRetweeted && info.infoState === false
                      ? retweetFill
                      : retweet
                  }
                  alt="retweet"
                  onClick={retweetHandler}
                />
              )}
              {userObj._id === tweet.userId && (
                <img
                  src={
                    retweetStat.isRetweeted && info.infoState === false
                      ? retweetFill
                      : retweet
                  }
                  alt="retweet"
                  onClick={infoHandler}
                />
              )}
              {retweetStat.retweet > 0 && (
                <p
                  className={
                    retweetStat.isRetweeted && info.infoState === false
                      ? style.green
                      : ""
                  }
                >
                  {" "}
                  {retweetStat.retweet}
                </p>
              )}
            </div>
            <div className={style.actions}>
              {userObj._id !== tweet.userId && (
                <img
                  src={
                    likeStat.isLiked && info.infoState === false
                      ? likeFill
                      : like
                  }
                  alt="like"
                  onClick={likeHandler}
                  //className="animate__animated animate__zoomInUp"
                />
              )}
              {userObj._id === tweet.userId && (
                <img
                  src={
                    likeStat.isLiked && info.infoState === false
                      ? likeFill
                      : like
                  }
                  alt="like"
                  onClick={infoHandler}
                />
              )}
              {likeStat.like > 0 && (
                <p
                  className={
                    likeStat.isLiked && info.infoState === false
                      ? style.red
                      : ""
                  }
                >
                  {" "}
                  {likeStat.like}
                </p>
              )}
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Tweet;
