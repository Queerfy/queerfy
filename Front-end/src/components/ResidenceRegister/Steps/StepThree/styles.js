import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;

  > h1 {
    margin: 32px 0;
    text-align: center;
    font-size: 24px;
  }

  > button {
    margin: 32px 0px 16px 0px;
  }

  > span {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
    justify-content: center;
    padding: 0 64px;

    > h1 {
      display: none;
    }

    > button {
      margin: 16px 0px;
    }
  }
`;

export const InputsSection = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 16px 0;

  @media screen and (min-width: 1024px) {
    margin: 8px 0;
  }
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${(props) => (props.width ? props.width : '100%')};
  height: auto;

  > label {
    align-self: flex-start;
    color: ${theme.colors.red};
    cursor: pointer;
  }

  > input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${theme.assets.borderDark};
    padding: 0 16px;
    color: ${theme.assets.font};

    &::placeholder {
      color: ${theme.assets.borderDark};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }
  }

  @media screen and (min-width: 1024px) {
    width: ${(props) => (props.desktopWidth ? props.desktopWidth : '100%')};
  }
`;
