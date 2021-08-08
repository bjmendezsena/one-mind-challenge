import React, {
  createContext,
  useReducer,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  UserInterface,
  AppState,
  UserDTO,
} from "../appInterfaces/appInterfaces";
import { fetchAllUSers } from "../services/dataService";
import { appReducer } from "./userReducer";

type ContextProps = {
  users: UserInterface[];
  isLoading: boolean;
  error: string | null;
  animals: string[];
  selectedAnimal: string;
  addUser: (userData: UserDTO) => void;
  removeUser: (user: UserInterface) => void;
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
  }, []);
  const { users } = state;

  const animals = useMemo(() => {
    if (users.length) {
      const animalResponse = users.map((user) => user.animals).flat();
      const result = [...new Set<string>(animalResponse)];
      return result;
    }
    return [];
  }, [users]);

  useEffect(() => {
    if (animals.length) {
      setSelectedAnimal(animals[0]);
    }
  }, [animals]);

  /**
   * Add a new user to the store.
   *
   * @param userData Data to add.
   */
  const addUser = (userData: UserDTO) => {
    const { users } = state;
    const user: UserInterface = {
      ...userData,
      id: `${userData.given.trim()}${userData.surname.trim()}${users.length}`,
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

  /**
   * Delete a user from the store based on the id of a given user.
   *
   * @param user data to delete.
   */
  const removeUser = (user: UserInterface) => {
    dispatch({
      type: "REMOVE_USER",
      payload: user,
    });
  };

  /**
   * Get all the users from the data source.
   */
  const getAllUsers = async () => {
    dispatch({
      type: "START_GET_USERS",
    });

    const [users, error] = await fetchAllUSers();
    if (error) {
      return dispatch({
        type: "GET_USERS_FAILED",
        payload:
          "An unexpected error occurred while trying to display the users",
      });
    }

    dispatch({
      type: "GET_USERS_SUCCEED",
      payload: users,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addUser,
        removeUser,
        selectedAnimal,
        setSelectedAnimal,
        animals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
