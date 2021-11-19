import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  > h1 {
    margin: 32px 0;
    text-align: center;
    font-size: 24px;
  }

  > button {
    margin: 32px 0px 16px 0px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
    justify-content: center;
    padding: 0 64px;

    > h1 {
      display: none;
    }

    > button {
      margin: 16px 0px;
    }
  }
`;

export const InputsSection = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 16px 0;

  @media screen and (min-width: 1024px) {
    margin: 8px 0;
  }
`;
