import React, { createContext, useReducer, useState } from "react";
import { useEffect } from "react";
import {
  UserInterface,
  AppState,
  UserDTO,
} from "../appInterfaces/appInterfaces";
import { fetchAllAnimals, fetchAllUSers } from "../services/dataService";
import { appReducer } from "./userReducer";

type ContextProps = {
  users: UserInterface[];
  isLoading: boolean;
  error: any;
  animals: string[];
  selectedAnimal: string;
  addUser: (userData: UserDTO) => void;
  removeUser: (user: UserInterface) => void;
  getAllUsers: () => void;
  getAllAnimals: () => void;
  setSelectedAnimal: (animal: string) => void;
};

export const AppContext = createContext({} as ContextProps);

const initialState: AppState = {
  error: null,
  isLoading: false,
  users: [],
  animals: [],
};

interface IAppProvider {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: IAppProvider) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const [selectedAnimal, setSelectedAnimal] = useState<string>("");

  useEffect(() => {
    getAllUsers();
    getAllAnimals();
  }, []);
  const { animals } = state;
  useEffect(() => {
    if (animals.length) {
      setSelectedAnimal(animals[0]);
    }
  }, [animals]);

  const addUser = (userData: UserDTO) => {
    const { users } = state;
    const user: UserInterface = {
      ...userData,
      id: `${userData.given}${userData.surname}${users.length}`,
      name: {
        given: userData.given,
        surname: userData.surname,
      },
    };
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const removeUser = (user: UserInterface) => {
    dispatch({
      type: "REMOVE_USER",
      payload: user,
    });
  };

  const getAllUsers = async () => {
    dispatch({
      type: "START_GET_ANIMALS",
    });
    try {
      const animals = await fetchAllAnimals();
      dispatch({
        type: "GET_ANIMALS_SUCCEED",
        payload: animals,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_ANIMALS_FAILED",
        payload:
          "An unexpected error occurred while trying to display the animals",
      });
    }
  };
  const getAllAnimals = async () => {
    dispatch({
      type: "START_GET_USERS",
    });

    try {
      const users = await fetchAllUSers();

      dispatch({
        type: "GET_USERS_SUCCEED",
        payload: users,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "GET_USERS_FAILED",
        payload:
          "An unexpected error occurred while trying to display the users",
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addUser,
        removeUser,
        getAllUsers,
        getAllAnimals,
        selectedAnimal,
        setSelectedAnimal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
