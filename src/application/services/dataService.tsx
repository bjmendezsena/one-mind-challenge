import { http } from "../api/http";
import { UserInterface } from "../appInterfaces/appInterfaces";

const dataUrl = "/data";

const fetchAllAnimals = async () => {
  try {
    const response = await http.get<UserInterface[]>(dataUrl);
    const animalResponse = response
      .map((user) => user.animals)
      .reduce((acum, current) => {
        acum = [...acum, ...current];
        return acum;
      }, []);

    const animals = [...new Set<string>(animalResponse)];
    return animals;
  } catch (error) {
    return [];
  }
};

const fetchAllUSers = async () => {
  try {
    const response = await http.get<UserInterface[]>(dataUrl);
    return response;
  } catch (error) {
    return [];
  }
};

export { fetchAllAnimals, fetchAllUSers };
