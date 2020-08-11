import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./Activebar.css";

export default function Activebar({ users }) {
  return (
    <ScrollToBottom className="Activebar">
      <h1 className="header">People currently chatting</h1>
      {users && (
        <div className="users-list">
          {users.map(({ username }) => (
            <div key={username} className="activeItem">
              <div className="online-icon" />
              {username}
            </div>
          ))}
        </div>
      )}
    </ScrollToBottom>
  );
}
