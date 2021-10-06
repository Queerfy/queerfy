import styled from 'styled-components';

export const ContainerNotification = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  svg {
    width: 35px;
    height: 35px;

    @media screen and (min-width: 1023px) {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1023px) {
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
    @media screen and (min-width: 1023px) {
      display: none;
    }
  }

  h2#textTwo {
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }

  @media screen and (min-width: 1023px) {
    width: 90%;
    margin: 0 0 32px 0;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 45%;
`;
