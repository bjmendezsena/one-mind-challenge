import { AppState } from "../appInterfaces/appInterfaces";
import { Action } from "./actions";

export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "START_GET_USERS":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_USERS_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "GET_USERS_SUCCEED":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: null,
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };

    default:
      return state;
  }
};
