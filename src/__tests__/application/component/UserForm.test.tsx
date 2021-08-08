import { shallow } from "enzyme";
import { AppProvider } from "../../../application/context/UserContext";
import { UserForm } from "../../../application/components/UserForm";

describe("Header tests", () => {
  it("Should render the component", async () => {
    const wrapper = shallow(
      <AppProvider>
        <UserForm />
      </AppProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
