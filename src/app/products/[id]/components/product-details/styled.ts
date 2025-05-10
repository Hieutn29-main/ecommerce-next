import styled from "styled-components";

export const ProductsDetailWrapper = styled.div`
  .header-action {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
    .container {
      background: white;
      border-radius: 8px;
      width: 100px;
      display: grid;
      place-content: center;
    }
  }
  .section-1 {
    background: white;
    width: 80%;
    margin: 0 auto;
    padding: 50px 10px 10px 10px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    border-radius: 8px;
    .image {
      height: 500px;
      object-fit: cover;
      object-position: center;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .title {
      font-size: 32px;
      font-weight: 700;
    }
    .des {
      font-size: 20px;
      font-weight: 500;
    }
    .price {
      font-size: 20px;
      font-weight: 400;
    }
    .stock {
      font-size: 20px;
      font-weight: 400;
    }
    .shippingInformation {
      font-size: 20px;
      font-weight: 400;
    }
    .bold {
      font-weight: 700;
    }
    .action {
      display: flex;
      flex-direction: row;
      gap: 30px;
      margin-top: 20px;
    }
  }
  .section-2 {
    background: white;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    padding: 50px 10px;
    border-radius: 8px;
    display: flex;
    gap: 40px;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 40px;
    }
    .title {
      font-size: 32px;
      font-weight: 700;
    }
  }
  .section-3 {
    background: white;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    padding: 50px 10px;
    border-radius: 8px;
    display: flex;
    gap: 40px;
    flex-direction: column;
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 40px;
    }
    .title {
      font-size: 32px;
      font-weight: 700;
    }
    .action {
      display: flex;
      justify-content: end;
    }
  }
`;
