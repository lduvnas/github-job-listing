import { mount } from "enzyme";
import JobListContextProvider from "../../../contexts/JobListContextProvider";
import JobList from "../JobList";

describe("Test JobList", () => {
  it('should render "No search results found" when jobList is empty', () => {
    const wrapper = mount(
      <JobListContextProvider>
        <JobList jobList={[]} />
      </JobListContextProvider>
    );
    expect(wrapper.find("NoSearchResults").text()).toBe(
      "No search results found"
    );
  });
});
