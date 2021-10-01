import styled from 'styled-components';

interface Colors {
  title?: string;
  subtitle?: string;
  text?: string;
}

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (min-width: 1023px) {
    display: flex;

    justify-content: center;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div<Colors>`
  margin-top: 32px;

  width: 85%;

  svg {
    color: ${(props) => props.text};
    width: 35px;
    height: 35px;
  }

  h1 {
    font-size: 26px;
    color: ${(props) => props.title};

    @media screen and (min-width: 1023px) {
      font-size: 36px;
    }
  }
  h2 {
    font-size: 18px;
    color: ${(props) => props.subtitle};

    @media screen and (min-width: 1023px) {
      font-size: 24px;
    }
  }
`;

export const Container = styled.div<Colors>`
  margin-bottom: 32px;
  svg {
    width: 50px;
    height: 50px;

    @media screen and (min-width: 1023px) {
      width: 80px;
      height: 80px;
    }
  }

  h2 {
    font-size: 28px;
    color: ${(props) => props.subtitle};
  }
  h3 {
    font-size: 18px;
    color: ${(props) => props.text};
  }

  @media screen and (min-width: 1023px) {
    width: 400px;
    height: 200px;
  }
`;

export const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 32px;
  height: 450px;

  @media screen and (min-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 85%;

    margin-top: 64px;
  }
`;
