import { shallow } from "enzyme";
import App from "./App";

describe("Test App.js", () => {
  it("contains an H1 with application name", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toBe("Workfinder");
  });
});
