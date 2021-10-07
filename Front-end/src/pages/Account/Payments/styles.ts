import styled from 'styled-components';

interface InputProps {
  width?: string;
  height?: string;
  responsive?: string;
}

interface Background {
  background?: string;
}

interface FontSize {
  primarysize?: string;
  secondarysize?: string;
}

export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;
  width: 100%;

  @media screen and (min-width: 1023px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    height: auto;
    width: 85%;
  }
`;

export const SubContainerPayment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media screen and (min-width: 1023px) {
    width: 50%;
  }
`;

export const ContainerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90%;
`;

export const InputBox = styled.div<InputProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  flex-direction: column;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 15px;
  background: linear-gradient(
    to top,
    rgba(240, 191, 90, 1) 25%,
    rgba(253, 233, 128, 1) 100%
  );

  @media screen and (min-width: 1023px) {
    width: 75%;
    height: ${(props) => props.responsive};
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 90%;
  height: 30%;

  h3 {
    font-size: 18px;
    color: #1a1a1a;

    @media screen and (min-width: 1023px) {
      font-size: 26px;
    }
  }

  img {
    width: 50px;

    @media screen and (min-width: 1023px) {
      width: 80px;
    }
  }
`;

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  height: 40%;

  h1 {
    font-size: 20px;
    color: #1a1a1a;

    @media screen and (min-width: 1023px) {
      font-size: 36px;
    }
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
`;

export const ContentRowCard = styled.div<FontSize>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 12px;

    @media screen and (min-width: 1023px) {
      font-size: 20px;
    }
  }

  h3 {
    font-size: 12px;

    @media screen and (min-width: 1023px) {
      font-size: 18px;
    }
  }
`;

export const ColapsedCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  img {
    width: 70px;

    @media screen and (min-width: 1023px) {
      width: 80px;
    }
  }

  h3 {
    color: #1a1a1a;
    font-size: 16px;

    @media screen and (min-width: 1023px) {
      font-size: 28px;
    }
  }
`;

export const ContainerButton = styled.div<Background>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 32px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;
    font-weight: bold;

    width: 75%;
    height: 40px;

    background-color: #f0bf5a;

    @media screen and (min-width: 1023px) {
      width: 250px;
    }
  }
`;
