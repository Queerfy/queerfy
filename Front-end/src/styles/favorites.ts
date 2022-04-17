import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;

  @media screen and (max-width: 1024px) {
    height: 900px;

    overflow-y: auto;
  }
`;

export const HeaderBox = styled.div`
  padding: 10px 0px 4px 50px;

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
  flex-wrap: wrap;

  padding: 10px 0px 4px 50px;

  @media screen and (max-width: 1024px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0;
  }
`;

export const CardHouse = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  width: 300px;
  height: 250px;

  border-radius: 20px;

  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 50px;

  cursor: pointer;
  transition: 0.3s;

  -webkit-box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.49);
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.49);

  &:hover {
    -webkit-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.49);
    -moz-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.49);
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.49);
  }

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 180px;

    margin-right: 0px;
  }
`;

export const ImageCard = styled.div`
  width: 270px;
  height: 150px;

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 220px;
    height: 120px;
  }
`;

export const DescribeResidence = styled.div`
  width: 270px;
  height: 35px;
  font-weight: 600;

  text-align: left;

  @media screen and (max-width: 1024px) {
    width: 220px;

    font-size: 10px;
  }
`;
