import React from "react";
import profile from "../../../images/profilePic.png";
import { GoPrimitiveDot } from "react-icons/go";
import { IconContext } from "react-icons";
import "./hatlar.scss";

const messages = [
  {
    id: "message-1",
    isOnline: false,
  },
  {
    id: "message-2",
    isOnline: false,
  },
  {
    id: "message-3",
    isOnline: true,
  },
  {
    id: "message-4",
    isOnline: true,
  },
];

function Messages() {
  return (
    <div className="messages">
      <div className="messages-list">
        {messages.map((msg) => {
          return (
            <div className="message" key={msg.id}>
              <div className="profile-pic">
                <img src={profile} alt="profile" />
                <IconContext.Provider
                  value={{
                    color: msg.isOnline ? "#4CE417" : "#BDBDBD",
                  }}
                >
                  <GoPrimitiveDot className="dot-icon" size={18} />
                </IconContext.Provider>
              </div>
              <div className="name-message">
                <div className="name">
                  <span>Katy</span>
                  <span className="time">13:46</span>
                </div>
                <div className="message">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut{" "}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Messages;
