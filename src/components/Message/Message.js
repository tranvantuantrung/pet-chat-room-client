import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

export default function Message({ message: { text, username }, name }) {
  let isUserSent = false;

  const trimmedName = name.trim().toLowerCase();

  if (username === trimmedName) {
    isUserSent = true;
  }

  return isUserSent ? (
    <div className="Message">
      <p className="user-sent right">{trimmedName}</p>
      <div className="messageBox message-right">
        <p className="messageText white">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="Message">
      <div className="messageBox message-left">
        <p className="messageText ">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="user-sent ">{username}</p>
    </div>
  );
}
