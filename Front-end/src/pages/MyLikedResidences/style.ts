import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 70vh;

  overflow-y: auto;

  @media screen and (max-width: 1024px) {
    height: 900px;
    border: 2px solid red;
  }
`;

export const HeaderBox = styled.div`
  padding: 10px 0px 4px 0px;

  @media screen and (max-width: 1024px) {
    padding: 14px 0px 0px 0px;
  }
`;

export const TitleHeader = styled.p`
  color: #a993f5;
  font-size: 30px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 7px;
  }
`;

export const CardsMain = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 2px solid blue;
  }
`;

export const CardHouse = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;

  width: 200px;
  height: 200px;

  border-radius: 20px;

  margin-bottom: 10px;
  margin-top: 10px;

  border: 2px solid blue;

  @media screen and (max-width: 1024px) {
  }
`;

export const ImageCard = styled.div`
  width: 200px;
  height: 150px;

  border-radius: 20px;

  border: 2px solid blue;

  @media screen and (max-width: 1024px) {
  }
`;
