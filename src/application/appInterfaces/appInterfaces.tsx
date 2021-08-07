export interface UserInterface {
  id: string;
  name: Name;
  points: number;
  animals: string[];
  isActive: boolean;
  age: number;
}

export interface Name {
  given: string;
  surname: string;
}

export interface AppState {
  users: UserInterface[];
  animals: string[];
  isLoading: boolean;
  error: string | null;
}

export interface TableDataItem {
  key: string;
  name: string;
  points: number;
  age: number;
  animals: string[];
  user: UserInterface;
}
