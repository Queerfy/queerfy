import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 26px;
    color: ${theme.colors.purple};
    margin-top: 10px;
  }
`;

export const BoxContent = styled.div`
  width: 100%;
  height: 46vh;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 24px;
  }

  span {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const InstagramButton = styled.button`
  padding: 5px;
  margin-top: 20px;

  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.assets.background};
  background: ${theme.colors.red};
  border: none;
  border-radius: 8px;

  svg {
    margin-right: 10px;
  }

  @media screen and (min-width: 1024px) {
    padding: 5px 30px;
  }
`;

export const EmailButton = styled(InstagramButton)`
  background: ${theme.colors.blue};
`;
