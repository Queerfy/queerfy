import styled from 'styled-components';

import { theme } from '../../styles/theme';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;
  padding: 0 64px;

  > img {
    height: 45px;
  }

  > span {
    color: ${theme.assets.font};
    transition: 0.3s;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const InputBox = styled(Center)`
  width: 300px;
  height: 45px;
  border-radius: 100px;
  background: linear-gradient(
    to right,
    rgba(241, 83, 86, 1) 0%,
    rgba(240, 191, 90, 1) 17%,
    rgba(253, 233, 128, 1) 34%,
    rgba(133, 219, 107, 1) 50%,
    rgba(67, 158, 250, 1) 68%,
    rgba(169, 147, 245, 1) 84%,
    rgba(242, 107, 156, 1) 100%
  );

  svg {
    width: 35px;
    color: ${theme.assets.font};
  }
`;

export const SearchInput = styled.input`
  width: 252px;
  height: 38px;
  border: none;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  outline: none;
  padding-left: 32px;
  font-size: 16px;
  color: ${theme.assets.font};
  background-color: ${theme.assets.background};

  ::placeholder {
    color: ${theme.assets.borderDark};
  }
`;

export const IconBox = styled(Center)`
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: ${theme.assets.background};
  height: 38px;
  width: 40px;

  > svg {
    transform: scale(0.95);
    transition: 0.3s;
    margin-right: 16px;

    &:hover {
      transform: scale(1);
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;

export const Separator = styled.div`
  height: 70%;
  width: 1px;
  background-color: ${theme.assets.borderDark};
`;
