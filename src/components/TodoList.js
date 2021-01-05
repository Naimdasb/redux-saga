import React from "react";
import { List, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "antd";

const { Title } = Typography;

export const TodoList = ({ items, listName, delay }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const removeItem = (item, listName) => () => {
    dispatch({
      type: "DEL_ITEM_REQUEST",
      payload: { currentItem: item, currentList: listName, delay }
    });
  };

  const removeList = () => {
    dispatch({ type: "DEL_LIST_REQUEST", payload: { listName, delay } });
  };

  return (
    <div className="py-5">
      <div className="d-flex justify-content-center w-100 align-items-center">
        <Title level={2} className="m-0">
          {listName}
        </Title>
        <Button
          onClick={removeList}
          style={{ marginLeft: 25 }}
          type="danger"
          disabled={loading}
        >
          X
        </Button>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={items}
        bordered
        renderItem={(item) => (
          <List.Item>
            <div className="d-flex w-100 justify-content-around align-items-center">
              {item}
              <Button
                type="ghost"
                onClick={removeItem(item, listName)}
                disabled={loading}
              >
                Remove
              </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};
