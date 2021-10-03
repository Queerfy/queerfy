import styled from 'styled-components';

interface Colors {
  title?: string;
  subtitle?: string;
  text?: string;
}

export const ContainerInfo = styled.div<Colors>`
  display: flex;
  flex-direction: column;

  width: 85%;
  height: 100%;

  margin-top: 32px;

  @media screen and (min-width: 1023px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    margin-top: 64px;
  }
`;

export const ContainerColumn = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1023px) {
    width: 35%;
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
    font-size: 22px;
    color: ${(props) => props.subtitle};

    @media screen and (min-width: 1023px) {
      font-size: 30px;
    }
  }
  h3 {
    font-size: 18px;
    color: ${(props) => props.text};

    @media screen and (min-width: 1023px) {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1023px) {
    width: 400px;
    height: 200px;

    margin-bottom: 64px;
  }
`;
