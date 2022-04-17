import styled from 'styled-components';

export const ContainerNotification = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  svg {
    width: 35px;
    height: 35px;

    @media screen and (min-width: 1024px) {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 85%;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin: 0 0 16px 0;

  h2#textOne {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  h2#textTwo {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 90%;
    justify-content: initial;
  }
`;

export const ContainerLeft = styled.div`
  width: 45%;

  display: flex;
  align-items: center;

  h2 {
    margin-left: 30px;
  }

  @media screen and (min-width: 1024px) {
  }
`;
