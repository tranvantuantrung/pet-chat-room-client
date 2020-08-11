import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Input, Button } from "antd";

import "./Chat.css";

import logo from "../../images/logo.png";
import MessageTopBar from "../MessageTopbar/MessageTopbar";
import Messages from "../Messages/Messages";
import Activebar from "../Activebar/Activebar";

let socket;

export default function Chat({ location }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://dhmm5.sse.codesandbox.io/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (err) => {
      if (err) {
        alert(err);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("messages", ({ messages }) => {
      setMessages(messages);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", { room, message }, () => setMessage(""));
    }
  };

  const leaveRoom = () => {
    socket.emit("leaveRoom", { room });
  };

  return (
    <div className="Chat">
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="brand-name">AKATSUKI</div>
      </div>
      <div className="chat-container">
        <div className="form-chat">
          <MessageTopBar leaveRoom={leaveRoom} room={room} />
          <Messages messages={messages} name={name} />
          <div className="sendBox">
            <Input
              className="input-chat"
              value={message}
              placeholder="Type something..."
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) =>
                event.key === "Enter" ? sendMessage(event) : null
              }
            />
            <Button
              className="sendButton"
              type="primary"
              onClick={(event) => sendMessage(event)}
            >
              Send
            </Button>
          </div>
        </div>
        <Activebar users={users} />
      </div>
    </div>
  );
}
