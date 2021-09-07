import React, { useState } from "react";
import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Stack,
  Button,
} from "@chakra-ui/react";
import registerbg from "../../Assets/Images/registerbg.png";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";

const ModalComponent = ({ isOpen, onClose, img, title, children }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ModalStyles>
              <div className="head">
                <img src={img} alt="img" />
                <h1>{title}</h1>
              </div>
              <hr />
              <div className="joinContainer">
                <div className="joinUs__left">
                  <img src={registerbg} alt="phone" />
                </div>
                <div className="joinUs__right">
                  <h1>TOURTOH</h1>
                  <p>How you go</p>

                  <Stack spacing={2}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<HiOutlineMail color="gray.300" />}
                      />
                      <Input type="email" placeholder="Email" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<RiLockPasswordLine color="gray.300" />}
                      />
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Password"
                      />
                      <InputRightElement width="4.5rem">
                        <div h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </div>
                      </InputRightElement>
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<RiLockPasswordLine color="gray.300" />}
                      />
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Confirm Password"
                      />
                      <InputRightElement width="4.5rem">
                        <div h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </div>
                      </InputRightElement>
                    </InputGroup>
                    <Button className="button" size="md">
                      Sign up
                    </Button>
                    <p>OR</p>
                    <Button className="socialButton" variant="solid">
                      <FcGoogle />
                      <p>Signup with Google</p>
                    </Button>
                    <Button className="socialButton" variant="solid">
                      <DiApple className="appleIcon" />
                      <p className="appleText">Signup with Apple</p>
                    </Button>
                    <Button className="socialButton" variant="solid">
                      <AiFillFacebook className="facebookIcon" />
                      <p className="facebookText">Signup with Facebook</p>
                    </Button>
                  </Stack>
                </div>
              </div>
            </ModalStyles>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
const ModalStyles = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  .head {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 45px;
      height: 45px;
      margin-right: 1rem;
    }

    h1 {
      font-weight: bold;
      font-size: 3rem;
      line-height: 72px;
      color: #3f3d56;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }

  hr {
    border: none;
    border-bottom: 5px solid #3f3d56;
    opacity: 1;
  }

  .joinContainer {
    display: flex;
    height: 80vh;

    .joinUs__left {
      width: 50%;
      @media screen and (max-width: 800px) {
        display: none;
      }

      img {
        height: 80vh;
        width: 100%;
        object-fit: cover;
      }
    }
    .joinUs__right {
      background: linear-gradient(
        180deg,
        #093356 0%,
        #375672 48.44%,
        #afb5bb 100%
      );
      color: #fff;
      padding: 0.3rem;
      width: 50%;
      text-align: center;
      @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0.5rem;
      }

      h1 {
        font-size: 36px;
        line-height: 40px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      }
      p {
        font-size: 26px;
        line-height: 38px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      }

      .button {
        background-color: #3f3d56;
        margin-top: 0.9rem;
        &:hover {
          opacity: 0.8;
        }
      }

      p {
        font-size: 18px;
      }

      .divider {
        border: 0.00001rem solid;
        background-color: #fff;
      }

      .socialButton {
        display: flex;
        margin-top: 1rem;

        p {
          font-size: 18px;
          line-height: 33px;
          color: #ffc367;
          margin-left: 0.5rem;
          line-height: 38px;
        }

        .appleIcon {
          color: #000;
        }
        .appleText {
          color: #fee05f;
        }

        .facebookIcon {
          color: #2c66bb;
        }
        .facebookText {
          color: #2c66bb;
        }
      }
    }
  }
`;
