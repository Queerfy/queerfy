import styled from 'styled-components';

<<<<<<< HEAD
export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
=======
export const ContainerNotification = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  @media screen and (min-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    width: 85%;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  margin: 0 0 16px 0;

  h2#textOne {
    @media screen and (min-width: 1023px) {
      display: none;
    }
  }

  h2#textTwo {
    @media screen and (max-width: 1023px) {
      display: none;
    }
  }

  @media screen and (min-width:1023px) {
    width: 90%;
    margin: 0 0 32px 0;
  }
>>>>>>> 65453a3e73a451ff263fb34c01c08b25becf2102
`;
