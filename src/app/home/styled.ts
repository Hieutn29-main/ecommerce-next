import styled from "styled-components";

export const Section1Wrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background: radial-gradient(
    circle at top left,
    rgba(23, 140, 179, 0.3),
    /* Light blue with transparency */ transparent 60%
  );

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left,
    img {
      flex: 1;
    }
    h1 {
      font-size: 4rem;
      line-height: 4rem;
      font-family: DMSans, sans-serif;
      font-weight: 700;
    }
    .heading-star {
      margin-left: 10px;
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background: url("/icons/star.svg") no-repeat center center/contain;
    }
    h3 {
      font-family: DMSans, sans-serif;
      font-weight: 600;
      margin-top: 20px;
    }
    p {
      font-size: 1.25rem;
      margin-top: 20px;
    }
    .action {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }
`;

export const Section2Wrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background: radial-gradient(
    circle at top right,
    rgba(255, 182, 193, 0.3),
    /* Light pink */ transparent 60%
  );
  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .right,
    img {
      flex: 1;
    }
    h1 {
      font-size: 4rem;
      line-height: 4rem;
      font-family: DMSans, sans-serif;
      font-weight: 700;
    }
    .heading-star {
      margin-right: 10px;
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background: url("/icons/star-alt.svg") no-repeat center center/contain;
    }
    p {
      font-size: 1.25rem;
      margin-top: 20px;
    }
    .action {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }
`;

export const Section3Wrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background: radial-gradient(
    circle at top left,
    rgba(153, 102, 204, 0.3),
    /* Light purple */ transparent 60%
  );

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .left,
    img {
      flex: 1;
    }
    h1 {
      font-size: 4rem;
      line-height: 4rem;
      font-family: DMSans, sans-serif;
      font-weight: 700;
    }
    .heading-star {
      margin-left: 10px;
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background: url("/icons/star.svg") no-repeat center center/contain;
    }
    h3 {
      font-family: DMSans, sans-serif;
      font-weight: 600;
      margin-top: 20px;
    }
    p {
      font-size: 1.25rem;
      margin-top: 20px;
    }
    .action {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }
`;

export const Section4Wrapper = styled.div`
  padding-top: 100px;
  height: 100vh;
  background: radial-gradient(
    circle at top right,
    rgba(255, 99, 71, 0.3),
    /* Light red (Tomato) */ transparent 60%
  );
  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .right,
    img {
      flex: 1;
    }
    h1 {
      font-size: 4rem;
      line-height: 4rem;
      font-family: DMSans, sans-serif;
      font-weight: 700;
    }
    .heading-star {
      margin-right: 10px;
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background: url("/icons/star-alt.svg") no-repeat center center/contain;
    }
    p {
      font-size: 1.25rem;
      margin-top: 20px;
    }
    .action {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }
`;

export const Section5Wrapper = styled.div`
  padding-top: 80px;
  height: 100vh;
  background: radial-gradient(
    circle at top left,
    rgba(23, 140, 179, 0.3),
    /* Light blue with transparency */ transparent 60%
  );

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px 100px;
  }
  .head-title {
    text-align: center;
    padding-bottom: 80px;
  }
  .title {
    font-weight: 900;
    font-size: 4rem;
    line-height: 4rem;
    padding-bottom: 20px;
  }
  .des {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
  }
`;
