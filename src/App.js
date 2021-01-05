import React from "react";
import "./styles.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import { TodoApp } from "./TodoApp";

export default function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </div>
    </div>
  );
}
