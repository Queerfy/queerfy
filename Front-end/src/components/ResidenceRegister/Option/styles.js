import styled from 'styled-components';

import { theme } from '../../../styles/theme';

const gradient =
  'linear-gradient(to right,rgba(241, 83, 86, 1) 0%,rgba(240, 191, 90, 1) 17%,rgba(253, 233, 128, 1) 34%,rgba(133, 219, 107, 1) 50%,rgba(67, 158, 250, 1) 68%,rgba(169, 147, 245, 1) 84%,rgba(242, 107, 156, 1) 100%);';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;
  border-radius: 10px;
  background: ${(props) => (props.selected ? theme.colors.green : gradient)};
  transition: 0.3s;
  transform: ${(props) => (props.selected ? 'scale(0.9)' : '')};

  @media screen and (min-width: 1024px) {
    width: 500px;
    height: 120px;
  }
`;

export const InsideContainer = styled.div`
  display: flex;
  align-items: center;

  width: 98%;
  height: 94%;
  background-color: ${theme.assets.background};
  border-radius: 10px;
  padding: 16px 32px;

  img {
    width: 85px;
    max-height: 75px;
    margin-right: 16px;
  }

  @media screen and (min-width: 1024px) {
    cursor: pointer;

    span {
      font-size: 20px;
    }
  }
`;
