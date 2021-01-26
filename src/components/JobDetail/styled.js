import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.04);
  max-width: 800px;
`;

export const CompanyLogo = styled.div`
  background: #fff;
  padding: 1rem;
  width: 90px;
  height: 90px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  left: -80px;
  overflow: hidden;
`;
export const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.div`
  margin-left: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
`;

export const Image = styled.img`
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CompanyName = styled.h3`
  font-size: 15px;
`;

export const JobTitle = styled.h2`
  font-size: 25px;
`;

export const JobLocation = styled.strong`
  font-size: 16px;
`;

export const JobType = styled.strong`
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: rgb(134, 216, 166);
  border: none;
  color: #fff;
  text-transform: uppercase;
  border-radius: 10px;
  margin-left: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.04);
  align-self: center;
`;

CompanyName.displayName = "CompanyName";
JobTitle.displayName = "JobTitle";
JobType.displayName = "JobType";
Container.displayName = "Container";
Button.displayName = "Button";
Image.displayName = "Image";
