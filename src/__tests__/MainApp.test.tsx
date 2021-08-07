import { shallow } from "enzyme";
import MainApp from "../application/MainApp";

describe("MainApp test", () => {
  it("Should render the component", () => {
    const wrapper = shallow(<MainApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
