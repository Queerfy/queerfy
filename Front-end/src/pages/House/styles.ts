import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;

  h1 {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0px;
`;

export const Local = styled.div`
  display: flex;

  p {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const Favorite = styled.div`
  color: ${(props) => props.theme.colors.red};
  display: flex;

  p {
    margin-right: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

export const Highlights = styled.div`
  width: 100%;
  height: 100%;
`;

export const Informations = styled.div`
  width: 100%;
  height: 100%;
`;
