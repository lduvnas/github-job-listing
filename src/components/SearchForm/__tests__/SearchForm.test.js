import { shallow } from "enzyme";
import SearchForm from "../SearchForm";

describe("Test SearchForm", () => {
  it("should render SearchForm correctly", () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("should render input correctly", () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find("SearchInput").exists()).toBe(true);
  });

  it("should render button correctly", () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.find("Button").exists()).toBe(true);
  });
});
