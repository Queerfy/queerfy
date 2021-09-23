import styled from 'styled-components';

interface InputProps {
  height?: string;
}

interface Background {
  background?: string;
}

interface FontSize {
  primarysize?: string;
  secondarysize?: string;
}

export const ContainerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 90%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
  height: 30%;

  h3 {
    color: #1a1a1a;
  }

  img {
    width: 60px;
  }
`;

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  height: 40%;

  h1 {
    font-size: 28px;
    color: #1a1a1a;
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
    font-size: ${(props) => props.primarysize};
  }

  h3 {
    font-size: ${(props) => props.secondarysize};
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
  }

  h3 {
    color: #1a1a1a;
    font-size: 22px;
  }
`;

export const ContainerButton = styled.div<Background>`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;
    font-weight: bold;

    width: 60%;
    height: 40px;

    background-color: #f0bf5a;
  }
`;

export const InputBox = styled.div<InputProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 32px 0;

  width: 100%;
  height: ${(props) => props.height};
  border-radius: 15px;
  background: linear-gradient(
    to top,
    rgba(240, 191, 90, 1) 25%,
    rgba(253, 233, 128, 1) 100%
  );
`;
