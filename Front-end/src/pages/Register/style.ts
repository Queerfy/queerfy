import styled from 'styled-components';

export const InformationsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 0px 40px;
  width: 70%;
  height: 100%;

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
