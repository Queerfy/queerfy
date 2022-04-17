import styled from 'styled-components';

interface Colors {
  title?: string;
  subtitle?: string;
  text?: string;
}

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;

  height: auto;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div<Colors>`
  width: 85%;

  display: flex;
  flex-direction: column;

  margin-top: 32px;

  svg {
    color: ${(props) => props.text};
    width: 35px;
    height: 35px;
    transform: scale(0.95);
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
      opacity: 0.9;
      cursor: pointer;
    }
  }

  h1 {
    font-size: 26px;
    color: ${(props) => props.title};
  }

  h2 {
    font-size: 18px;
    color: ${(props) => props.subtitle};
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

export const Container = styled.div<Colors>`
  margin-bottom: 32px;

  svg {
    width: 50px;
    height: 50px;

    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    font-size: 28px;
    color: ${(props) => props.subtitle};
    transform: scale(1);
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
      cursor: pointer;
    }
  }

  h3 {
    font-size: 18px;
    color: ${(props) => props.text};
  }

  @media screen and (min-width: 1024px) {
    width: 400px;
    height: 200px;

    svg {
      width: 80px;
      height: 80px;
    }
  }
`;

export const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 32px;
  height: 450px;

  @media screen and (min-width: 1024px) {
    width: 85%;

    flex-direction: row;
    flex-wrap: wrap;
    height: auto;

    margin-top: 64px;
  }
`;
