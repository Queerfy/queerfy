import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  h1 {
    font-size: 22px;
    text-align: center;
    margin: 16px 0px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  button {
    margin: 16px 0;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    padding: 64px;

    > h1 {
      display: none;
    }

    button {
      margin: 32px 0;
    }
  }
`;

export const CounterBox = styled.div`
  width: 100%;

  div {
    margin: 16px 0px;
  }
`;
