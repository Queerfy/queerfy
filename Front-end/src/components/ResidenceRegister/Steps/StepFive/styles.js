import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  > h1 {
    text-align: center;
    font-size: 24px;
  }

  > button {
    margin: 32px 0;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
    height: 100vh;

    > h1 {
      display: none;
    }

    > button {
      margin: 16px 0;
    }
  }
`;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  > div {
    margin: 16px 0;
  }

  @media screen and (min-width: 1024px) {
    > div {
      margin: 12px 0;
    }
  }
`;
