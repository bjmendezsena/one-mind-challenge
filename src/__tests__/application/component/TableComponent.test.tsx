import { shallow } from "enzyme";
import { TableComponent } from "../../../application/components/TableComponent";
import { AppProvider } from "../../../application/context/UserContext";

describe("Header tests", () => {
  it("Should render the component", async () => {
    const wrapper = shallow(
      <AppProvider>
        <TableComponent />
      </AppProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
