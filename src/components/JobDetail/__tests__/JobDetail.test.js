import { shallow, mount } from "enzyme";
import JobDetail from "../JobDetail";

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

describe("Test JobDetail", () => {
  it("should render correct company name in h3-tag", () => {
    const wrapper = mount(<JobDetail data={data} />);
    expect(wrapper.find("CompanyName").text()).toBe(data.company);
  });

  it("should render correct title in a h2-tag", () => {
    const wrapper = shallow(<JobDetail data={data} />);
    expect(wrapper.find("JobTitle").text()).toBe(data.title);
  });

  it("should render correct type in a strong-tag", () => {
    const wrapper = shallow(<JobDetail data={data} />);
    expect(wrapper.find("JobType").text()).toBe(data.type);
  });

  it("should render correct url in a-tag", () => {
    const wrapper = shallow(<JobDetail data={data} />);
    expect(wrapper.find("a").text()).toBe(data.url);
  });

  it("should have correct url value in Image prop src", () => {
    const wrapper = shallow(<JobDetail data={data} />);
    expect(wrapper.find("Image").prop("src")).toEqual(data.company_logo);
  });

  it("should render correct url value in Image prop alt", () => {
    const wrapper = shallow(<JobDetail data={data} />);
    expect(wrapper.find("Image").prop("alt")).toEqual(data.company);
  });

  it("should render the description correctly", () => {
    const wrapper = shallow(<JobDetail data={data} />);
    expect(wrapper.find("main").html()).toContain(data.description);
  });

  it("should should have prop dangerouslySetInnerHTML for description", () => {
    const wrapper = shallow(<JobDetail data={data} />);
    expect(wrapper.find("main").prop("dangerouslySetInnerHTML")).toEqual({
      __html: `${data.description}`,
    });
  });
});
