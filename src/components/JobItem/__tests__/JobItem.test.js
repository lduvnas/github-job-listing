import { shallow } from "enzyme";
import JobItem from "../JobItem";

const data = {
  company: "PayPal",
  company_logo:
    "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpb…2lkIn19--1bcca8c1ef0e38811264e5d86c556bd4c368cb48/paylog.png",
  company_url: "http://paypal.com",
  description: "<p>Fueled by a fundamental belief that having access to</p>",
  id: "cb287f27-8e08-4677-88e5-4d025a1fee08",
  title: "Distinguished Eng.-Platform Unification",
  type: "Full Time",
  url: "https://jobs.github.com/positions/cb287f27-8e08-4677-88e5-4d025a1fee08",
};

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Test JobItem clickabilaty", () => {
  it("should navigate to correct job detail page when click specific JobItem", () => {
    const wrapper = shallow(<JobItem id={data.id} data={data} />);
    wrapper.find("Container").simulate("click");
    expect(mockHistoryPush).toHaveBeenCalledWith(`/job/${data.id}`);
  });
});

describe("Test JobItem", () => {
  it("should display correct company name in h3-tag", () => {
    const wrapper = shallow(<JobItem data={data} />);
    expect(wrapper.find("CompanyName").text()).toBe(data.company);
  });

  it("should display correct title in a h2-tag", () => {
    const wrapper = shallow(<JobItem data={data} />);
    expect(wrapper.find("JobTitle").text()).toBe(data.title);
  });

  it("should display correct type in a strong-tag", () => {
    const wrapper = shallow(<JobItem data={data} />);
    expect(wrapper.find("JobType").text()).toBe(data.type);
  });

  it("should display correct url in a-tag", () => {
    const wrapper = shallow(<JobItem data={data} />);
    expect(wrapper.find("a").prop("href")).toEqual(data.url);
  });

  it("should have correct url value in Image src-prop", () => {
    const wrapper = shallow(<JobItem data={data} />);
    expect(wrapper.find("Image").prop("src")).toEqual(data.company_logo);
  });

  it("should render correct url value in Image alt-prop", () => {
    const wrapper = shallow(<JobItem data={data} />);
    expect(wrapper.find("Image").prop("alt")).toEqual(data.company);
  });
});
