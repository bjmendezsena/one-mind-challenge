import { http } from "../api/http";
import { UserInterface } from "../appInterfaces/appInterfaces";

const dataUrl = "/data";

const fetchAllAnimals = async () => {
  try {
    const response = await http.get<UserInterface[]>(dataUrl);
    const animalResponse = response.map((user) => user.animals).flat();
    const animals = [...new Set<string>(animalResponse)];
    return [animals, null];
  } catch (error) {
    return [null, error];
  }
};

const fetchAllUSers = async () => {
  try {
    const response = await http.get<UserInterface[]>(dataUrl);
    return [response, null];
  } catch (error) {
    return [null, error];
  }
};

export { fetchAllAnimals, fetchAllUSers };
