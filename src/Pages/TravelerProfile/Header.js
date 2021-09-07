import React from "react";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsHouse, BsPhone } from "react-icons/bs";

import Images from "../../Assets/Images/images";
import TopNav from "../../Components/Navs/TopNav/TopNav";

// import images
const { user, profileBanner } = Images;

const ProfileHeader = () => {
  return (
    <>
      <HeaderStyles>
        <TopNav />
        <div className="hero">
          <div className="banner"></div>
          <div className="info">
            <div>
              <p>@travel_girl_AO</p>
              <h3>Alice Oleson</h3>
              <small>Name</small>
            </div>
            <div>
              <p>
                <span>
                  <RiComputerLine />
                </span>{" "}
                aliceole@gmail.com
              </p>
              <small>Email</small>
            </div>
            <div>
              <p>
                <span>
                  <BsHouse />
                </span>{" "}
                California, USA
              </p>
              <small>Location</small>
            </div>
            <div>
              <p>
                <span>
                  <BsPhone />
                </span>{" "}
                +1-202-555-0100
              </p>
              <small>Phone Numer</small>
            </div>
          </div>
        </div>
        <div className="user">
          <IoIosCamera className="icon" />
          <img src={user} alt="user" />
        </div>
      </HeaderStyles>
    </>
  );
};

export default ProfileHeader;
const HeaderStyles = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;

  @media screen and (max-width: 400px) {
    height: 75vh;
    
  }

  .banner {
    width: 100%;
    height: 50vh;
    background: url(${profileBanner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 600px) {
      height: 30vh;
    }
  }

  .info {
    width: 100%;
    padding: 3rem;
    display: flex;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 80px 80px;

    @media screen and (max-width: 800px) {
      display: block;
      height: auto;
      padding: 1rem;
      border-radius: 0;
    }

    div {
      margin-right: 4rem;

      @media screen and (max-width: 800px) {
        margin: 0;
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 28px;
        color: #3f3d56;
        margin-bottom: 0;
        @media screen and (max-width: 800px) {
          font-size: 1rem;
        }
      }

      h3 {
        font-family: TT Norms;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 42px;
        color: #3f3d56;
        margin-bottom: 0;
        margin-top: 1rem;
        @media screen and (max-width: 800px) {
          margin-top: 0;
        }
      }

      small {
        font-size: 14px;
        line-height: 17px;
        color: rgba(63, 61, 86, 0.5);
      }
    }
  }

  .user {
    width: 100px;
    height: 100px;
    border: 3px solid #3f3d56;
    border-radius: 100%;
    position: absolute;
    bottom: 40px;
    right: 50px;

    @media screen and (max-width: 600px) {
      bottom: 300px;
      right: 10px;
      border: 1px solid #3f3d56;
    }

    .icon {
      position: absolute;
      bottom: 28px;
      left: -18px;
      font-size: 2.5rem;
      color: #3f3d56;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
