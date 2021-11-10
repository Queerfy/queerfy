import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  > h1 {
    text-align: center;
    font-size: 22px;
    margin: 32px 0px;
  }

  > div {
    margin: 32px 0px;
  }

  > button {
    margin-bottom: 32px;
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
