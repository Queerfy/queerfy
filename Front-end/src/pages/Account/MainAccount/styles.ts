import styled from 'styled-components';

interface Colors {
  title?: string;
  subtitle?: string;
  text?: string;
}

<<<<<<< HEAD
export const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Container = styled.div<Colors>`
  margin: 0 0 32px 0;

  h1 {
    width: 100%;
    font-size: 28px;
    color: ${(props) => props.title};
  }
  h2 {
    width: 100%;
    font-size: 20px;
    color: ${(props) => props.subtitle};
  }
  h3 {
    width: 100%;
    font-size: 14px;
    color: ${(props) => props.text};
  }
`;

export const ImageArrow = styled.img`
  width: 20px;
  margin: 32px 0 16px 0;
=======
export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (min-width: 1023px) {
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
    font-size: 36px;
    color: ${(props) => props.title};
  }
  h2 {
    font-size: 24px;
    color: ${(props) => props.subtitle};
  }
`;

export const Container = styled.div<Colors>`
  svg {
    width: 80px;
    height: 80px;
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
    width: 350px;
    height: 200px;
  }
`;

export const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 64px;
  height: 450px;

  @media screen and (min-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 85%;
  }
>>>>>>> 65453a3e73a451ff263fb34c01c08b25becf2102
`;
