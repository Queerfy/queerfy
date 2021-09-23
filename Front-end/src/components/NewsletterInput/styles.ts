import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;

  width: 300px;
  height: 50px;
  border-radius: 10px;
`;

export const NewsletterInput = styled.input`
  width: 80%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.assets.background};
  border: 2px solid ${(props) => props.theme.colors.orange};
  padding: 8px;
  font-size: 16px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  background-color: ${(props) => props.theme.colors.orange};
  transition: 0.3s;

  > svg {
    margin-right: 5px;
    color: ${(props) => props.theme.assets.background};
    transition: 0.3s;
  }

  &:hover {
    cursor: pointer;

    > svg {
      transform: scale(1.1);
    }
  }
`;
