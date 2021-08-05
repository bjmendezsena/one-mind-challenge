import React, { FC } from "react";

import { Button } from "antd";

import "./MainApp.css";

const MainApp: FC = () => {
  const onClick = () => {
    console.log("Hola mundo");
  };
  return (
    <div>
      <Button type="primary" onClick={onClick}>
        Button
      </Button>
    </div>
  );
};

export default MainApp;
