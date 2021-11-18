import styled from 'styled-components';
import { theme } from '../../styles/theme';

interface IInput {
  width?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${(props: IInput) => (props.width ? props.width : '100%')};
  height: auto;

  > label {
    align-self: flex-start;
    color: ${theme.colors.red};
    cursor: pointer;
  }
`;

export const DefaultInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${theme.assets.borderDark};
  padding: 0 16px;
  color: ${theme.assets.font};

  &::placeholder {
    color: ${theme.assets.borderDark};
  }
`;
