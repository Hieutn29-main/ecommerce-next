import styled from "styled-components";

export const StyledWrapper = styled.div`
  .card {
    width: 290px;
    min-width: 290px;
    height: 354px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
  }

  .card-details {
    color: black;
    height: 100%;
    gap: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #f79b72;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
    cursor: pointer;
  }

  .text-body {
    color: rgb(134, 134, 134);
    padding: 0px 20px 10px 20px;

    height: 30%;
  }

  /*Text*/
  .text-title {
    font-size: 1.5em;
    font-weight: bold;
    padding: 20px 20px 10px 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /*Hover*/
  .card:hover {
    border-color: #f79b72;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
  .image {
    width: 100%;
    height: 50%;
  }
`;
