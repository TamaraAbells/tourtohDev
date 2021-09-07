import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import loginbg from "../../Assets/Images/loginbg.png";
import user from "../../Assets/Images/user.png";
import { FormControl, FormLabel } from "@chakra-ui/react";

const CreateProfile = () => {
  return (
    <ProfileContainer>
      <Container>
        <header>
          <h1>TOURTOH</h1>
          <p>Create Your Profile</p>
        </header>
        <img src={loginbg} alt="" />
        <div className="userInfo">
          <div className="userImg">
            <img src={user} alt="" />
          </div>
          <form className="px-3">
            <FormControl id="Name" className="pb-1" isRequired>
              <FormLabel>Name</FormLabel>
              <Input className="input" placeholder="Name" />
            </FormControl>
            <FormControl id="Username" className="pb-1" isRequired>
              <FormLabel>Username</FormLabel>
              <Input className="input" placeholder="Username" />
            </FormControl>

            <FormLabel>Phone Number</FormLabel>
            <InputGroup isRequired className="pb-1">
              <InputLeftAddon children="+01" />
              <Input className="input" type="tel" placeholder="Phone Number" />
            </InputGroup>

            <FormControl id="email" className="pb-1" isRequired>
              <FormLabel>Email</FormLabel>
              <Input className="input" type="email" placeholder="Email" />
            </FormControl>
            <FormControl id="country" className="pb-1" isRequired>
              <Select className="select" placeholder="Country/Region">
                <option className="option">United Arab Emirates</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>USA</option>
              </Select>
            </FormControl>
            <FormControl id="activities" className="pb-1" isRequired>
              <FormLabel>Feature Activities</FormLabel>
              <Input
                className="input"
                type="text"
                placeholder="Feature Activities"
              />
            </FormControl>
            <Button
              className="button mt-2"
              type="submit"
              size="md"
              height="48px"
              width="100%"
              backgroundColor="#3f3d56"
              color="#fff"
              borderRadius="20px"
              boxShadow="0px 2px 4px rgba(0,0,0,0.25)"
            >
              NEXT
            </Button>
          </form>
        </div>
      </Container>
    </ProfileContainer>
  );
};

export default CreateProfile;

const ProfileContainer = styled.div`
  background: linear-gradient(180deg, #063154 0%, #385a76 55.21%, #cbcbcb 100%);
  height: auto;
  header {
    padding-top: 0.5rem;
    text-align: center;
    color: #fff;
    h1 {
      font-size: 20px;
      line-height: 30px;
      font-weight: bold;
    }
    p {
      font-size: 20px;
      line-height: 30px;
    }
  }
  img {
    height: 25vh;
    width: 100%;
    object-fit: cover;
  }
  .userInfo {
    background: #fff;

    .userImg {
      display: flex;
      justify-content: center;
      img {
        margin-top: -5rem;
        width: 180px;
        height: 180px;
      }
    }
    form {
      height: 80vh;

      .input {
        background: #f9f9f9;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        ::placeholder {
          color: rgba(63, 61, 86, 0.5);
          font-size: 14px;
        }
      }
      .select {
        background: #f9f9f9;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        color: #3f3d56;
        font-size: 16px;
      }

      .button {
        &:hover {
          background-color: #3f3d56;
          opacity: 0.9;
        }
      }
    }
  }
`;
