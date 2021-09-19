import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;

  width: 100vw;
  height: 100vh;
  z-index: -1;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 10vh;
  padding: 0 32px;
  border-bottom: 1px solid ${(props) => props.theme.assets.borderLight};
`;

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 10vh;
  background-color: #333;

  div:nth-child(2) {
    margin: 0 16px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 70px;
  color: ${(props) => props.theme.assets.background};
  font-size: 12px;
  transition: 0.3s;

  svg {
    margin-left: -1px;
    color: ${(props) => props.theme.assets.borderLight};
    margin-bottom: 5px;
  }

  span {
    margin-bottom: 5px;
  }

  &:hover {
    svg {
      color: ${(props) => props.theme.assets.background};
    }
    cursor: pointer;
  }
`;
