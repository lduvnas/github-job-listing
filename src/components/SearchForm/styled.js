import styled from "styled-components";

export const Container = styled.div``;

export const SearchInput = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.04);
  outline: none;
  width: 400px;
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
`;

SearchInput.displayName = "SearchInput";
Button.displayName = "Button";
