import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  > h1 {
    font-size: 22px;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 50%;

  > svg {
    cursor: pointer;
    transform: scale(0.95);
    transition: 0.3s;

    &:hover {
      transform: scale(1);
    }
  }

  > span {
    font-size: 24px;
    font-weight: bold;
  }
`;
