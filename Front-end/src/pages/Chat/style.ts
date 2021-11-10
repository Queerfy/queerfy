import styled from 'styled-components';

export const BodyContainer = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #353b48;
  overflow-y: hidden;

  * ::-webkit-scrollbar {
    width: 8px;
    background: #171717;
  }
  * ::-webkit-scrollbar-thumb {
    background: #5f27cd;
    border-radius: 5px;
  }
`;

export const Main = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  border-radius: 0px 20px 20px 0px;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
`;

export const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75%;
  overflow-y: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const MessageUserLoged = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MessageOtherUser = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 1%;
  margin-bottom: 3px;
  margin-right: 3%;
  padding: 10px;
  margin: 10px;
`;

export const MessageBox = styled.span`
  color: white;
  font-size: 10px;
`;

export const UsernameLoged = styled.span`
  color: #240046;
  display: flex;
  justify-content: end;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const OtherUsername = styled.span`
  color: purple;
  display: flex;
  justify-content: end;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const DateMessage = styled.span`
  color: white;
  font-size: 10px;
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
`;

export const FooterChat = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20%;
`;

export const FooterChatInput = styled.input`
  height: 60%;
  width: 75%;
  font-size: 15px;
  background: rgba(73, 80, 87, 0.5);
  border: none;
  outline: none;
  color: #636e72;
  border-radius: 10px;
  padding: 0px 8px;
`;

export const buttonSendMessage = styled.div`
  height: 60%;
  width: 12%;
  border-radius: 10px;
  background: #5f27cd;
  transition: background-color 0.3s;
  cursor: pointer;
  /* background-image: url('../images/email.svg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center; */

  &:hover {
    background-color: #341f97;
  }
`;
