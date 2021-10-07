import styled from 'styled-components';

interface InputProps {
  fixedSize: string;
  sizeResponsive: string;
}

export const Container = styled.div`
  display: flex;

  height: 100vh;
  margin: 0px -32px;

  @media screen and (min-width: 1024px) {
    margin: 0px -64px;
  }
`;

export const ImageRegister = styled.img`
  width: 30%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InformationsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 0px 40px;
  width: 70%;
  height: 100%;

  h2 {
    font-weight: 700;
    color: #e74c3c;
    padding: 10px 0px 4px 0px;
    border-bottom: 1px solid #bdc3c7;
  }

  button {
    width: 20%;
    padding: 10px;
    margin: 0 auto;
    margin-top: 30px;

    font-weight: 400;
    color: white;
    background: #e74c3c;

    border-radius: 5px;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      width: 150px;
    }
  }

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    height: auto;
    width: 100%;
  }
`;

export const RowInputs = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  padding: 2px 0px 2px 0px;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const InputsBox = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  padding: 5px 0px;

  width: ${(props) => props.fixedSize};

  @media screen and (max-width: 1024px) {
    width: ${(props) => props.sizeResponsive};
    margin-top: 5%;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  span {
    color: #e74c3c;
    font-weight: bold;
    font-size: 16px;

    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
  }

  input[type='text'],
  input[type='password'] {
    padding: 15px;

    border-radius: 5px;
    outline: none;
    border: 1px solid #bdc3c7;

    @media screen and (max-width: 1024px) {
      padding: 7px;
    }
  }

  input[type='date'] {
    padding: 13px;

    border-radius: 5px;
    outline: none;
    border: 1px solid #bdc3c7;

    @media screen and (max-width: 1024px) {
      padding: 5px;
    }
  }

  select {
    height: 100%;
    padding: 5px;

    border-radius: 5px;
    outline: none;
    border: 1px solid #bdc3c7;
  }
`;
