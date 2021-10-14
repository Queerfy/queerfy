import styled from 'styled-components';

import { BoxContainer } from '../FormUrgencyRegister/style';

import { InputsBox, RowInputs } from '../FormRegister/style';

import {
  ButtonContinue,
} from '../FormUrgencyRegister/style';

export const TitleConfirm = styled.p`
  color: #e74c3c;
  font-weight: 600;

  text-align: center;
  font-size: 30px;

  width: 100%;

  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const InputBoxConfirm = styled(InputsBox)`

  span {
    font-size: 18px;
  }

  input[type='text'],
  input[type='password'] {
    font-size: 17px;
  }
`;

export const RowInputsConfirm = styled(RowInputs)`
  margin-bottom: 20px;
`;

export const BoxContainerConfirm = styled(BoxContainer)`
  height: 70vh;

  @media screen and (max-width: 1024px) {
    margin: 30px 0;
    height: auto;
  }
`;

export const ButtonFinishConfirm = styled(ButtonContinue)`
  font-size: 18px;
`;
