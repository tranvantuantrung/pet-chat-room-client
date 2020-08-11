import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Select } from "antd";

import "./Join.css";

import logo from "../../images/logo.png";

const { Option, OptGroup } = Select;

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("konoha");

  const handleOnClick = (event) => {
    if (!name || !room) {
      event.preventDefault();
    }
  };

  return (
    <div className="Join">
      <div className="join-container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="brand-name">AKATSUKI</div>
        </div>
        <div className="join-form">
          <Input
            className="input-name"
            placeholder="Display name"
            allowClear
            onChange={(event) => setName(event.target.value)}
          />
          <Select
            className="input-room"
            defaultValue="konoha"
            onChange={(value) => setRoom(value)}
          >
            <OptGroup label="Room">
              <Option value="konoha">konoha</Option>
              <Option value="akatsuki">akatsuki</Option>
              <Option value="uchiha">uchiha</Option>
            </OptGroup>
          </Select>
          <Link onClick={handleOnClick} to={`/chat?name=${name}&room=${room}`}>
            <Button className="join-btn" type="primary">
              Join
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
