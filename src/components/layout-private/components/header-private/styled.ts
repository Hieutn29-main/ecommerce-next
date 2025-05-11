import styled from "styled-components";

export const HeaderPrivateWrapper = styled.div`
  height: 64px;
  background: #eb5b00;
  display: flex;
  align-items: center;
  .container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 32px;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
    }
  }
  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
