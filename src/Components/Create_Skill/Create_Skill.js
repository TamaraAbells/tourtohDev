import { Button, Container, Input, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import gps from "../../Assets/Images/gps.svg";
import styled from "styled-components";
import { GrStakeholder } from "react-icons/gr";
import { BsPencil } from "react-icons/bs";
import { MdLaptop } from "react-icons/md";
import { Checkbox } from "@chakra-ui/react";
import { GiCutDiamond } from "react-icons/gi";
import { AiFillCamera } from "react-icons/ai";
import wizard from "../../Assets/Images/wizard.svg";
import thread from "../../Assets/Images/thread.svg";
import star from "../../Assets/Images/star.svg";
import translator from "../../Assets/Images/translator.svg";
import smallHeart from "../../Assets/Images/smallHeart.svg";

const Create_Skill = () => {
  const [textarea, setTextarea] = useState("");
  const [inputField, setInputField] = useState("");

  const handleTextChange = (e) => {
    setTextarea(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputField(e.target.value);
  };

  console.log(inputField);
  return (
    <CreateSkillWrapper>
      <Container>
        <header>
          <img src={gps} alt="" />
          <p>Create Skill/Knowledge Share Service</p>
        </header>
        <hr />
        <form>
          <div className="inputText">
            <GrStakeholder className="icon" />
            <label>Name of Skill/Knowledge Share Service</label>
          </div>
          <Input
            value={inputField}
            onChange={handleInputChange}
            placeholder="Type Name Here"
            size="md"
          />
          <div className="inputText description ">
            <BsPencil className="icon" />
            <label>Description of Skill/Knowledge Share Service</label>
          </div>
          <Textarea
            value={textarea}
            onChange={handleTextChange}
            placeholder="Type Description"
            size="md"
          />
          <div className="checkboxs">
            <MdLaptop className="icon" />
            <label htmlFor="">Virtual Skill/Knowledge Share Service:</label>
            <Checkbox className="checkbox" defaultIsChecked>
              Checkbox
            </Checkbox>
          </div>
          <div className="hour__rateContainer">
            <GiCutDiamond className="icon" />
            <p>Hourly Rate</p>
            <Input placeholder="Starts at $ 5.00" size="md" />
          </div>
          <div className="dragContainer">
            <AiFillCamera className="icon" />
            <p>
              Drag Image Here or Click Here <br /> Image Size: <br /> MaxSize:
            </p>
          </div>
          <div className="flexContainer">
            <p>Select Related Activities</p>
            <div className="flex">
              <div className="flexbg">
                <img src={wizard} alt="wizard" />
              </div>
              <div className="flexbg">
                <img src={thread} alt="thread" />
              </div>
              <div className="flexbg">
                <img src={star} alt="star" />
              </div>
              <div className="flexbg">
                <img src={translator} alt="translator" />
              </div>
              <div className="flexbg">
                <img src={smallHeart} alt="smallHeart" />
              </div>
            </div>
          </div>
          <Stack align="center">
            <Button className="button" variant="solid">
              CREATE SKILL
            </Button>
          </Stack>
        </form>
      </Container>
    </CreateSkillWrapper>
  );
};

export default Create_Skill;

const CreateSkillWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 30px;
      height: 40px;
    }

    p {
      text-align: center;
      color: #3f3d56;
      font-size: 25px;
      font-weight: 400;
      line-height: 90.19px;
    }
  }
  hr {
    border: 1px solid #3f3d56;
    background-color: #3f3d56;
  }

  form {
    margin-top: 1rem;

    .inputText {
      display: flex;
      flex-direction: row;
      align-items: center;

      .icon {
        width: 32px;
        height: 23px;
        margin-right: 0.3rem;
        color: #3f3d56 !important;
      }
    }

    .description {
      margin-top: 2rem;
    }
    label {
      font-weight: 500;
      line-height: 28px;
      color: #3f3d56;
    }

    .checkboxs {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      .icon {
        width: 38px;
        height: 31px;
        color: #3f3d56;
      }

      .checkbox {
        margin-left: 5px;
      }
    }
    .hour__rateContainer {
      display: flex;
      align-items: center;
      margin-top: 2rem;
      width: 60%;

      .icon {
        width: 40px;
        height: 32px;
        color: #3f3d56;
      }

      p {
        font-weight: 500;
      }
    }
    .dragContainer {
      border: 1px dashed #2c66bb;
      border-radius: 20px;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 134px;

      .icon {
        height: 43px;
        width: 56px;
        color: #3f3d56;
      }
      p {
        font-weight: 500;
        line-height: 28px;
        color: rgba(63, 61, 86, 0.5);
      }
    }

    .flexContainer {
      margin-top: 1rem;

      .flex {
        display: flex;
        justify-content: space-between;

        .flexbg {
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          margin-top: 1rem;
          img {
            width: 60px;
            height: 60px;
            padding: 5px;
          }
        }
      }
    }
    .button {
      margin-top: 2rem;
      background-color: #3f3d56;
      color: #fff;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
