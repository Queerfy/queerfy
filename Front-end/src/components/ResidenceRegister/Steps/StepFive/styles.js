import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  > h1 {
    text-align: center;
    font-size: 28px;
    margin: 32px 0;
  }

  > button {
    margin: 32px 0;

    @media screen and (min-width: 1024px) {
      margin: 32px 0 16px 0;
    }
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;

    > h1 {
      display: none;
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
`;
