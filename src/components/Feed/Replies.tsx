import { useState } from "react";
//mport { AuthContext } from "../../context/AuthContext.jsx";
//import { get } from "../../utils/axiosLib";
//import { logger } from "../../utils/logger";
import { CircularProgress } from "@material-ui/core";
//import Tweet from "../Tweet/Tweet";

import style from "./Feed.module.scss";

const Replies = () => {
  //const [tweets, setTweets] = useState<any>([]);
  const [isLoading] = useState<boolean>(false);
  // //const [errMsg, setErrMsg] = useState<string>("");
  // const [authState] = useContext<any>(AuthContext);

  // const token: string = authState.user.token;
  // const user: any = authState.user.user;
  // const tweetId: any = props.tweetId;

  // useEffect(() => {
  //   const getTweets = async () => {
  //     setIsLoading(true);
  //     try {
  //       const endpoint = `${import.meta.env.VITE_APP_BASE_URL}post/${tweetId}`;
  //       const tweetsReq = await get(endpoint);
  //       // //logger("replies...", tweetsReq.data.replies);
  //       setTweets(tweetsReq.data.replies);
  //     } catch (err) {
  //       // //logger(err);
  //       setErrMsg("Nothing to see here Yet");
  //     }
  //     setIsLoading(false);
  //   };
  //   getTweets();
  //   // //logger(authState.latestTweet);
  // }, [token, user._id, authState.latestTweet, tweetId]);

  return (
    <div>
      {isLoading ? (
        <div className={style.loaderBox}>
          <CircularProgress color="inherit" size="45px" />
        </div>
      ) : (
        ""
        // <>
        //   {tweets.map((tweet: any) => (
        //     <Tweet key={tweet._id} tweetFull={tweet} />
        //   ))}
        //   <div className={style.loaderBox}>
        //     <p style={{ color: "#fff" }}>{errMsg}</p>
        //   </div>
        // </>
      )}
    </div>
  );
};

export default Replies;
