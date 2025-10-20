import styled from "styled-components";
import { DARKESTPURPLE } from "./Variables";

export const BackgroundOriginal = styled.div `
  min-height: 100vh; /* Täck hela höjden på skärmen */
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  padding: 10px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const Banner = styled.div `
display: flex;
flex-direction: row;
align-items: left;
justify-content: left;
padding-top: 0;

background: ${DARKESTPURPLE};
min-width: 100%;

`;