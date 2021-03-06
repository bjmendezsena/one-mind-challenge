import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import { AppProvider } from "../../../application/context/UserContext";
import { MainPage } from "../../../application/views/MainPage";

describe("MainPage tests", () => {
  it("Should render the component", async () => {
    const wrapper = shallow(
      <AppProvider>
        <MainPage />
      </AppProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
