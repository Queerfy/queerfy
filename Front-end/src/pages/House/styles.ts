import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;

  h1 {
    color: ${(props) => props.theme.colors.blue};
    margin-top: 25px;
  }
`;

export const Subtitle = styled.div`
  margin: 8px 0px;

  display: flex;
  justify-content: space-between;
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

export const Informations = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 0px 6px 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AlignInformations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 0px 6px 0px;

  display: flex;
  flex-direction: column;

  text-align: justify;
`;

export const BackgroundReservation = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 0px 8px 0px;
`;

export const BorderRainbow = styled.div`
  width: 100%;
  height: 348px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

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
`;

export const Reservation = styled.div`
  width: 98%;
  height: 98%;

  border-radius: 10px;

  color: ${(props) => props.theme.assets.font};
  background-color: ${(props) => props.theme.assets.background};
`;

export const HeaderReservation = styled.div`
  margin: 12px 0px 6px 6px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
`;

export const AmountComments = styled.div`
  display: flex;
  align-items: center;
`;
