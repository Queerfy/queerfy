import styled from 'styled-components';

interface TextHeaderProps {
  title?
}

export const HeaderBox = styled.div`
  padding: 10px 0px 4px 0px;
  border-bottom: 1px solid #bdc3c7;

  @media screen and (max-width: 1024px) {
    padding: 14px 0px 0px 0px;
  }

`;

export const TitleHeader = styled.p`
  color: #e74c3c;
  //font-size: 20px;
  font-weight: 600;
  //margin-bottom: 7px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 7px;
  }
`;

export const TextHeader = styled.p`
  font-size: 15px;
  font-weight: 500;
  //margin-bottom: 7px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
