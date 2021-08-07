import { UserInterface } from "../appInterfaces/appInterfaces";
export type Action =
  | {
      type: "START_GET_USERS";
    }
  | {
      type: "GET_USERS_FAILED";
      payload: string | null;
    }
  | {
      type: "GET_USERS_SUCCEED";
      payload: UserInterface[];
    }
  | {
      type: "ADD_USER";
      payload: UserInterface;
    }
  | {
      type: "REMOVE_USER";
      payload: UserInterface;
    }
  | {
      type: "START_GET_ANIMALS";
    }
  | {
      type: "GET_ANIMALS_FAILED";
      payload: string | null;
    }
  | {
      type: "GET_ANIMALS_SUCCEED";
      payload: string[];
    };
