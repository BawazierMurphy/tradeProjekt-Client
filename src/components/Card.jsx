import React, { useEffect, useState } from "react";
import "../styles/Card.css";
import Checkbox from "./Checkbox";
import { createTrade, fetchTrade } from "../tradeService/service";

const Card = () => {
  const [childData, setChildData] = useState();
  const [isSubmited, setIsSubmited] = useState(false);

  // Automaticly Gather Data from child component (Checkbox) and set it to state
  const pullData = (data) => {
    setChildData(data);
  };

  // Post Data to the server
  const postData = async () => {
    let d = new Date();
    d.toDateString();
    const newData = {
      offer: {
        createdat: d,
        decision: childData,
      },
    };

    const response = await createTrade(newData);
    setIsSubmited(true);
  };

  return (
    <div className="cardContainer">
      {isSubmited ? (
        <h2 className="thanksMessage">THANKS FOR SUBMITTING</h2>
      ) : (
        <React.Fragment>
          <div className="card-inner">
            <div className="card-offer">
              <h2>I Receive</h2>
              <h3>a girlfriend</h3>
              <h3>your heart</h3>
              <h3>loyalty</h3>
            </div>
            <svg
              width="282"
              height="3"
              viewBox="0 0 282 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.75"
                x2="282"
                y2="1.75"
                stroke="#ADA07F"
                strokeWidth="2.5"
              />
            </svg>
            <div className="card-offer">
              <h2>You Receive</h2>
              <h3>a boyfriend</h3>
              <h3>my heart</h3>
              <h3>loyalty</h3>
            </div>
            <svg
              width="358"
              height="3"
              viewBox="0 0 358 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="1.75"
                x2="358"
                y2="1.75"
                stroke="#ADA07F"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <div>
            <Checkbox func={pullData} />
            <div className="btnContainer" onClick={postData}>
              <h2>SUBMIT</h2>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Card;
