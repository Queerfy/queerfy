import styled from 'styled-components';

export const AdditionalComments = styled.div`
  width: 100%;
  margin-top: 30px;

  @media screen and (min-width: 1240px) {
    width: 40%;
  }
`;

export const Profile = styled.div`
  width: 100%;

  display: flex;
`;

export const Picture = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;

  @media screen and (min-width: 1240px) {
    width: 65px;
    height: 65px;
  }
`;

export const NameDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Comment = styled.div`
  padding: 15px 0px;
  text-align: justify;
`;
