import React, { useState } from "react";
import profile from "../../../images/profilePic.png";
import profileOwner from "../../../images/profile-2.png";
import { GoPrimitiveDot } from "react-icons/go";
import { IconContext } from "react-icons";
import { BsCheck } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
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
  const [selectedChat, setSelectedChat] = useState(null);

  const setActiveChat = (id) => {
    setSelectedChat(id);
  };

  return (
    <div className="messages">
      <div className="messages-list">
        {messages.map((msg) => {
          return (
            <div
              className={`message ${msg.id === selectedChat ? "active" : ""}`}
              key={msg.id}
              onClick={() => setActiveChat(msg.id)}
            >
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

      <div className="chat">
        <div className="head">
          <div className="profile-pic">
            <img src={profile} alt="profile" />
            <IconContext.Provider
              value={{
                color: "#4CE417",
              }}
            >
              <GoPrimitiveDot className="dot-icon" size={15} />
            </IconContext.Provider>
          </div>
          <div className="status-name">
            <span className="name">Katy</span>
            <span className="status">online</span>
          </div>
        </div>

        <div className="chat-window">
          <div className="chat-message received">
            <div className="profile-pic">
              <img src={profile} alt="profile" />
              <IconContext.Provider
                value={{
                  color: "#4CE417",
                }}
              >
                <GoPrimitiveDot className="dot-icon" size={18} />
              </IconContext.Provider>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
              <span className="time">16.04</span>
            </div>
          </div>
          <div className="chat-message sent">
            <div className="profile-pic">
              <img src={profileOwner} alt="profile" />
              <IconContext.Provider
                value={{
                  color: "#4CE417",
                }}
              >
                <GoPrimitiveDot className="dot-icon" size={18} />
              </IconContext.Provider>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>

              <div className="time">
                <span>16.04</span>

                <IconContext.Provider
                  value={{
                    color: "#ffffff",
                  }}
                >
                  <BsCheck />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="chat-message received">
            <div className="profile-pic">
              <img src={profile} alt="profile" />
              <IconContext.Provider
                value={{
                  color: "#4CE417",
                }}
              >
                <GoPrimitiveDot className="dot-icon" size={18} />
              </IconContext.Provider>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
              <span className="time">16.04</span>
            </div>
          </div>
          <div className="chat-message sent">
            <div className="profile-pic">
              <img src={profileOwner} alt="profile" />
              <IconContext.Provider
                value={{
                  color: "#4CE417",
                }}
              >
                <GoPrimitiveDot className="dot-icon" size={18} />
              </IconContext.Provider>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut ing elit, sed diam
                nonummy nibh euismod tincidunt ut
              </p>
              <div className="time">
                <span>16.04</span>

                <IconContext.Provider
                  value={{
                    color: "#ffffff",
                  }}
                >
                  <BsCheck />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
        <div className="text-input">
          <div className="input">
            <label htmlFor="message"></label>
            <input type="text" id="message" placeholder="Hat ýaz" />
          </div>
          <VscSmiley />
        </div>
      </div>
    </div>
  );
}

export default Messages;
