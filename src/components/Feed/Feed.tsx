import { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext.jsx";
// import { get } from "../../utils/axiosLib";
//import { logger } from "../../utils/logger";
//import { useQuery } from "@tanstack/react-query";
//import { CircularProgress } from '@material-ui/core'
import Tweet from "../Tweet/Tweet";
import Loader from "../../images/loading.gif";

import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { STATUS_CONTRACT_ADDRESS } from "../../constants/addresses";

import style from "./Feed.module.scss";

const Feed = () => {
  //const [tweets, setTweets] = useState<any>([]);

  const { contract } = useContract(STATUS_CONTRACT_ADDRESS);

  const { data: tweets, isLoading: isTweetsEventsLoading } = useContractEvents(
    contract, // contract address
    "NewTweet", // contract function or event
    {
      subscribe: true,
    }
  );

  console.log(tweets, "tweets<<");

  //const [isLoading, setIsLoading] = useState<boolean>(false);
  //const [errMsg, setErrMsg] = useState<string>("");
  //const [authState, setAuthState] = useContext<any>(AuthContext);

  // const token: string = authState.user.token;
  // const user: any = authState.user.user;

  // const endpoint = `${import.meta.env.VITE_APP_BASE_URL}post/tm/${user._id}`;
  // const headers = {
  //   "auth-token": `${token}`,
  //   "Content-Type": "application/json",
  // };

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () =>
  //     get(endpoint, headers).then((res) => {
  //       return res.data;
  //     }),
  // });

  // useEffect(() => {
  //   if (data) {
  //     setTweets(
  //       //<< quick sort algorithm
  //       data.sort((p1: any, p2: any) => {
  //         return (
  //           new Date(p2.createdAt).valueOf() - new Date(p1.createdAt).valueOf()
  //         );
  //       })
  //     );

  //     setAuthState({
  //       ...authState,
  //       tweets: data,
  //     });
  //   }
  // }, [data]);

  // //logger("tweets?", authState);

  // useEffect(() => {
  //   const getTweets = async () => {
  //     //setIsLoading(true)
  //     try {
  //       const tweetsReq = await get(endpoint, headers);
  //       setTweets(
  //         //<< quick sort algorithm
  //         tweetsReq.data.sort((p1: any, p2: any) => {
  //           return (
  //             new Date(p2.createdAt).valueOf() -
  //             new Date(p1.createdAt).valueOf()
  //           );
  //         })
  //       );
  //     } catch (err: any | undefined | {}) {
  //       //logger(err);
  //       //setErrMsg("Tweets aren't loading right now...")
  //     }
  //     //setIsLoading(false)
  //   };
  //   getTweets();
  //   //logger(authState.latestTweet);
  // }, [authState.latestTweet]);

  return (
    <div>
      {/* {!isStatusEventsLoading &&
        statusEvents
          .map((event, index) => (
            <EventCard
              key={index}
              walletAddress={event.data.user}
              newStatus={event.data.newStatus}
              timeStamp={event.data.timestamp}
            />
          ))} */}

      {isTweetsEventsLoading ? (
        <div className={style.loaderBox}>
          <img
            src={Loader}
            alt="loading..."
            style={{ height: "45px", width: "45px" }}
          />
        </div>
      ) : (
        <>
          {tweets?.map((event, index) => (
            <Tweet
              // key={tweet._id}
              // tweetFull={tweet}
              key={index}
              walletAddress={event.data.user}
              newStatus={event.data.newTweet}
              timeStamp={event.data.timestamp}
            />
          ))}
          {/* {error && (
            <div className={style.loaderBox}>
              <p style={{ color: "#fff" }}>
                Sorry tweets aren't loading right now
              </p>
            </div>
          )} */}
        </>
      )}
    </div>
  );
};

export default Feed;
