import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10vh;
  border-bottom: 1px solid ${(props) => props.theme.assets.borderLight};
  margin-bottom: 16px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Categories = styled.section`
  width: 100%;
  height: auto;
  color: ${(props) => props.theme.colors.green};
`;

export const CategorieTypes = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;

    > :nth-child(2) {
      margin-right: 20px;
      margin-left: 20px;
    }

    > div img {
      transition: 0.3s;

      &:hover {
        cursor: pointer;
        transform: scale(1.01);
      }
    }
  }
`;
