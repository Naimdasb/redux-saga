import React, { useState } from "react";

import { TodoInput } from "./components/TodoInput";
import { AllLists } from "./components/AllLists";

import { Typography, Slider } from "antd";
import { useSelector } from "react-redux";

const { Title } = Typography;

export const TodoApp = () => {
  const [delay, setDelay] = useState(0);
  const loading = useSelector((state) => state.loading);

  const handleDelay = (value) => {
    setDelay(value);
  };

  return (
    <>
      <div className="col-6 m-auto flex-column">
        <Title level={4}>Current Delay: {delay}</Title>
        <Slider
          value={delay}
          min={0}
          max={10}
          onChange={handleDelay}
          disabled={loading}
        />
      </div>
      <TodoInput delay={delay} />
      <AllLists delay={delay} />
    </>
  );
};
