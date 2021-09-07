import { Container } from "@chakra-ui/react";
import user from "../../Assets/Images/user.png";
import styled from "styled-components";
import React from "react";

const Chat = () => {
  return (
    <ChatContainer>
      <Container className="pt-5">
        <header>
          <img src={user} alt="" className="pr-3" />
          <div className="headerInfo">
            <h1>Alexa Fiona</h1>
            <p>Online</p>
          </div>
        </header>
        <div className="hr" />
        <div className="chatBox"></div>
      </Container>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  background: #213f5c;
  height: 100vh;
  header {
    display: flex;
    align-items: center;
    img {
      height: 40px;
      width: 40px;
      margin-right: 1rem;
    }
    h1 {
      font-weight: 600;
      color: #fff;
      font-size: 18px;
      line-height: 20px;
    }
    p {
      color: #4caf50;
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;
    }
  }

  .hr {
    border: 1px solid #fff;
    width: 100%;
    color: #fff;
    margin-top: 1rem;
  }
`;
