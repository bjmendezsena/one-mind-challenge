import { appReducer } from "../../../application/context/userReducer";
import { AppState, UserInterface } from "../../../application/appInterfaces/appInterfaces";

const state: AppState = {
  error: null,
  isLoading: false,
  users: [],
  animals: [],
};

const users: UserInterface[] = [
  {
    id: "5fbfe211d32e20623de48785",
    name: {
      given: "Irma",
      surname: "Mendez",
    },
    points: 28,
    animals: ["cat", "horse", "elephant", "tiger", "gorilla"],
    isActive: false,
    age: 20,
  },
  {
    id: "5fbfe211f360cb3058158a7c",
    name: {
      given: "Liliana",
      surname: "Britt",
    },
    points: 93,
    animals: [
      "tiger",
      "panda",
      "jaguar",
      "zebra",
      "horse",
      "gorilla",
      "lion",
      "bear",
      "elephant",
      "penguin",
      "cat",
      "kangaroo",
      "koala",
      "monkey",
      "dog",
    ],
    isActive: true,
    age: 21,
  },
];

describe("appReducer tests", () => {
  it("START_GET_USERS: should set isLoading to true", () => {
    const currentState = appReducer(state, {
      type: "START_GET_USERS",
    });

    expect(currentState.isLoading).toBeTruthy();
  });

  it("GET_USERS_FAILED: should return the state with the isLoading in false and an error", () => {
    const error: string = "An error has occurred";
    const currentState = appReducer(state, {
      type: "GET_USERS_FAILED",
      payload: "An error has occurred",
    });

    expect(currentState.isLoading).toBeFalsy();
    expect(currentState.error).toBe(error);
  });

  it("GET_USERS_SUCCEED: should return the state with isLoading as true, error as null, and the users", () => {
    const currentState = appReducer(state, {
      type: "GET_USERS_SUCCEED",
      payload: users,
    });

    expect(currentState.isLoading).toBeFalsy();
    expect(currentState.users.length).toBe(users.length);
    expect(currentState.error).toBeNull();
  });

  it("START_GET_ANIMALS: should set isLoading to true", () => {
    const currentState = appReducer(state, {
      type: "START_GET_ANIMALS",
    });

    expect(currentState.isLoading).toBeTruthy();
  });

  it("GET_ANIMALS_FAILED: should return the state with the isLoading in false and an error", () => {
    const error: string = "An error has occurred";

    const currentState = appReducer(state, {
      type: "GET_ANIMALS_FAILED",
      payload: error,
    });

    expect(currentState.isLoading).toBeFalsy();
    expect(currentState.error).toBe(error);
  });

  it("ADD_USER: Should return the state with another user", () => {
    const user: UserInterface = {
      id: "12345",
      name: {
        given: "Briaulin",
        surname: "Name",
      },
      points: 0,
      animals: ["tiger", "panda"],
      isActive: true,
      age: 21,
    };
    state.users = [...users];
    const currentState = appReducer(state, {
      type: "ADD_USER",
      payload: user,
    });
    expect(currentState.users.length).toBe(users.length + 1);
  });
  it("REMOVE_USER: should return the state with one less user", () => {
    const user: UserInterface = {
      ...users[0],
    };
    state.users = [...users];
    const currentState = appReducer(state, {
      type: "REMOVE_USER",
      payload: user,
    });

    expect(currentState.users.length).toBe(users.length - 1);
  });
});
