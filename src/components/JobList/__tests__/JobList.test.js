import { shallow } from "enzyme";
import JobList from "../JobList";

const jobList = [
  {
    id: 1,
    company: "Apple",
  },
  {
    id: 2,
    company: "Google",
  },
];

describe("Test JobList", () => {
  it('should render "No search results found" when jobList is empty', () => {
    const wrapper = shallow(<JobList jobList={[]} />);
    expect(wrapper.find("p").text()).toBe("No search results found");
  });

  it("should render a JobItem for each job in the jobList array", () => {
    const wrapper = shallow(<JobList jobList={jobList} />);
    expect(wrapper.find("JobItem").length).toBe(jobList.length);
  });
});
