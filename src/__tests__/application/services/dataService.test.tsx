import {
  fetchAllAnimals,
  fetchAllUSers,
} from "../../../application/services/dataService";

describe("Services tests", () => {
  it("Should load the users", async () => {
    const resp = await fetchAllUSers();

    expect(resp.length).toBeGreaterThan(0);
  });

  it("Should load the animals", async () => {
    const resp = await fetchAllAnimals();

    expect(resp.length).toBeGreaterThan(0);
  });
});
