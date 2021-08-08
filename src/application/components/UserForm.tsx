import { Form, Input, Select, InputNumber, Switch } from "antd";
import React, { useContext } from "react";
import { AppContext } from "../context/UserContext";

import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { UserDTO } from "../appInterfaces/appInterfaces";

const { Option } = Select;

interface IUserFormProps {
  onChange: (value: any, field: keyof UserDTO) => void;
  values: UserDTO;
}

export const UserForm = ({ onChange, values }: IUserFormProps) => {
  const { animals } = useContext(AppContext);

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
      <Form.Item label="Name">
        <Input.Group compact>
          <Form.Item
            name={["name", "given"]}
            noStyle
            rules={[{ required: true, message: "Given name is required" }]}
          >
            <Input
              style={{ width: "50%" }}
              placeholder="Given"
              value={values.given}
              onChange={({ target }) => onChange(target.value, "given")}
            />
          </Form.Item>
          <Form.Item
            name={["name", "surname"]}
            noStyle
            rules={[{ required: true, message: "Surname is required" }]}
          >
            <Input
              style={{ width: "50%" }}
              placeholder="Surname"
              value={values.surname}
              onChange={({ target }) => onChange(target.value, "surname")}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        label="Points"
        rules={[{ required: true, message: "Points is required" }]}
      >
        <InputNumber
          style={{ width: "50%" }}
          value={values.points}
          onChange={(value) => onChange(value, "points")}
        />
      </Form.Item>
      <Form.Item
        label="Age"
        rules={[{ required: true, message: "Age is required" }]}
      >
        <InputNumber
          style={{ width: "50%" }}
          value={values.age}
          onChange={(value) => onChange(value, "age")}
        />
      </Form.Item>
      <Form.Item
        label="Animals"
        rules={[{ required: true, message: "Animals is required" }]}
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Select animals"
          mode="multiple"
          defaultValue={values.animals}
          onChange={(values) => onChange(values, "animals")}
        >
          {React.Children.toArray(
            animals.map((animal) => <Option value={animal}>{animal}</Option>)
          )}
        </Select>
      </Form.Item>
      <Form.Item label="Active">
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={values.isActive}
          onChange={() => onChange(!values.isActive, "isActive")}
        />
      </Form.Item>
    </Form>
  );
};
