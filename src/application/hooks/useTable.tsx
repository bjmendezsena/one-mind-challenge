import React, { useContext } from "react";
import { Space, Tag, Button } from "antd";
import { AppContext } from "../context/UserContext";
import { TableDataItem } from "../appInterfaces/appInterfaces";

export const useTable = () => {
  const { users, selectedAnimal, removeUser } = useContext(AppContext);

  const data: TableDataItem[] = users
    .sort((a, b) => {
      if (a.points > b.points) return -1;

      if (a.points < b.points) return 1;

      return 0;
    })
    .filter((user) => user.isActive && user.animals.includes(selectedAnimal))
    .map((user, index) => ({
      age: user.age,
      animals: user.animals,
      key: index.toString(),
      name: `${user.name.given}, ${user.name.surname}`,
      points: user.points,
      user: user,
    }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Animals",
      key: "animals",
      dataIndex: "animals",
      render: (animals: string[]) => (
        <div>
          {React.Children.toArray(
            animals.map((animal: string) => {
              const color = animal === selectedAnimal ? "blue" : "#9E9E9E";
              return (
                <Space>
                  <Tag
                    style={{
                      borderRadius: 20,
                      marginTop: 10,
                    }}
                    color={color}
                  >
                    {animal.toUpperCase()}
                  </Tag>
                </Space>
              );
            })
          )}
        </div>
      ),
    },
    {
      title: "Action",
      key: "id",
      render: ({ user }: TableDataItem) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              danger
              shape="round"
              onClick={() => removeUser(user)}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];
  return { data, columns };
};
