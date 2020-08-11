import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./MessageTopbar.css";

export default function MessageTopbar({ leaveRoom, room }) {
  return (
    <div className="MessageTopbar">
      <div className="online-icon" />
      <div className="room-name">
        <span>{room}</span>
      </div>
      <div className="close-chat">
        <Link onClick={() => leaveRoom()} to="/">
          <CloseOutlined />
        </Link>
      </div>
    </div>
  );
}
