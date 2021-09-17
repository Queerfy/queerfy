import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.nav`
  display: flex;
  align-items: center;

  background-color: red;
  width: 100%;
  height: 10vh;

  > img {
    height: 50px;
  }

  > span {
    margin-left: 32px;
    color: ${(props) => props.theme.assets.font};
  }

  > svg {
    margin-left: 32px;
  }
`;

export const InputBox = styled(Center)`
  width: 380px;
  height: 50px;
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
    color: ${(props) => props.theme.assets.font};
  }
`;

export const SearchInput = styled.input`
  width: 322px;
  height: 44px;
  border: none;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  outline: none;
  padding-left: 32px;
  font-size: 16px;
  color: ${(props) => props.theme.assets.font};
  background-color: ${(props) => props.theme.assets.background};

  ::placeholder {
    color: ${(props) => props.theme.assets.borderDark};
  }
`;

export const IconBox = styled(Center)`
  background-color: blue;

  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: ${(props) => props.theme.assets.background};
  height: 44px;
  width: 50px;
`;

export const Separator = styled.div`
  margin: 0 64px;
  height: 80%;
  width: 1px;
  background-color: ${(props) => props.theme.assets.borderDark};
`;
