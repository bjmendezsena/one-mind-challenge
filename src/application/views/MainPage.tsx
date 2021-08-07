import { Select, Button } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import React, { useContext } from "react";
import { TableComponent } from "../components/TableComponent";
import "./MainPage.css";
import { AppContext } from "../context/UserContext";

export const MainPage = () => {
  const { animals, selectedAnimal, setSelectedAnimal, isLoading } =
    useContext(AppContext);

  const selectIsLoading = isLoading || selectedAnimal.length === 0;

  return (
    <div className="MainPage">
      <div className="title">
        <h1>Animal blog</h1>
      </div>
      <div>
        <div className="header-page">
          <Select
            style={{
              width: 120,
            }}
            loading={selectIsLoading}
            onChange={setSelectedAnimal}
            value={selectedAnimal}
          >
            {React.Children.toArray(
              animals.map((animal) => (
                <Select.Option
                  value={animal}
                  disabled={selectedAnimal === animal}
                >
                  {animal}
                </Select.Option>
              ))
            )}
          </Select>
          <Button
            type="primary"
            shape="round"
            icon={<PlusCircleTwoTone />}
            size="large"
          >
            Add user
          </Button>
        </div>
      </div>
      <TableComponent />
    </div>
  );
};
