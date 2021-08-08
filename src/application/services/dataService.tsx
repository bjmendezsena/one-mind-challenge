import { http } from "../api/http";
import { UserInterface } from "../appInterfaces/appInterfaces";

const dataUrl = "/data";

/**
 * Find all users of the data source.
 *
 * @returns {Promise<Array<any>>}
 */
const fetchAllUSers = async (): Promise<any[]> => {
  try {
    const response = await http.get<UserInterface[]>(dataUrl);
    return [response, null];
  } catch (error) {
    return [null, error];
  }
};

export { fetchAllUSers };
