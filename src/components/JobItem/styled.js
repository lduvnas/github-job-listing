import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 40px;
  margin: 15px 0;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.04);
  width: 800px;
  height: 150px;
  cursor: pointer;
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

export const CompanyLogo = styled.div`
  background: #fff;
  padding: 1rem;
  width: 40px;
  height: 40px;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  left: -60px;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CompanyName = styled.h3`
  font-size: 10px;
`;

export const JobTitle = styled.h2`
  font-size: 15px;
`;

export const JobLocation = styled.h2`
  font-size: 15px;
`;

export const JobType = styled.strong``;

export const Button = styled.button`
  padding: 8px 14px;
  background-color: rgb(134, 216, 166);
  border: none;
  color: #fff;
  border-radius: 10px;
  margin-left: 40px;
`;

Container.displayName = "Container";
Image.displayName = "Image";
JobType.displayName = "JobType";
CompanyName.displayName = "CompanyName";
JobTitle.displayName = "JobTitle";
