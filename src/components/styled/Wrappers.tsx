import styled from "styled-components";
import { DARKESTPURPLE } from "./Variables";
import CarinaPic from "../../assets/images/bluebanner.png"


export const BackgroundOriginal = styled.div `
  min-height: 100vh; /* Täck hela höjden på skärmen */
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  //padding: 10px;
  padding-top: 0;
  padding-bottom: 60px;
  //border: 1px red solid;
`;

export const Banner = styled.div `
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  padding-top: 0;
  //background-image: url(${CarinaPic});
  //background-size: cover;
  //background-repeat: no-repeat;
  //background-position: 50% 25%;
  background: ${DARKESTPURPLE};
  min-width: 100%;
`;