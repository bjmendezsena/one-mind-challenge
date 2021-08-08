import { Select, Button, Modal } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { TableComponent } from "../components/TableComponent";
import "./MainPage.css";
import { AppContext } from "../context/UserContext";
import { UserForm } from "../components/UserForm";
import { useForm } from "../hooks/useForm";
import { UserDTO } from "../appInterfaces/appInterfaces";

export const MainPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const { animals, selectedAnimal, setSelectedAnimal, isLoading, addUser } =
    useContext(AppContext);

  const selectIsLoading = isLoading || selectedAnimal.length === 0;
  const handlerAddUserButton = () => {
    setModalVisible(true);
  };

  const { onChange, form, setFormValue } = useForm<UserDTO>({
    age: 0,
    animals: [],
    given: "",
    isActive: false,
    points: 0,
    surname: "",
  });

  const handleOkModal = () => {
    addUser(form);
    setInitialValues();
    setModalVisible(false);
  };

  const handleCancelModal = () => {
    setInitialValues();
    setModalVisible(false);
  };

  const setInitialValues = () => {
    setFormValue({
      given: "",
      surname: "",
      points: 0,
      age: 0,
      animals: [],
      isActive: false,
    });
  };

  const disabledButton = !(
    form.age > 0 &&
    form.given.length > 0 &&
    form.surname.length > 0 &&
    form.points > 0
  );

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
            onClick={handlerAddUserButton}
          >
            Add user
          </Button>
        </div>
      </div>
      <TableComponent />
      <Modal
        title="Add user"
        onOk={handleOkModal}
        onCancel={handleCancelModal}
        visible={modalVisible}
        centered
        destroyOnClose
        maskClosable={false}
        okButtonProps={{
          disabled: disabledButton,
        }}
      >
        <UserForm onChange={onChange} values={form} />
      </Modal>
    </div>
  );
};
