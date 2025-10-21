import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP, WHITE, BLACK } from "./Variables";

export const H1White = styled.h1 `
    padding: 0;
    color: ${WHITE};
    font-size: 2rem;
    font-family: "Esteban", serif;
    font-weight: 400;
    font-style: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 0.3;
    text-align: center;
      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        font-size: 2.2rem;
      }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 2.4rem;
      }
`;

export const H1Banner = styled.h1 `
    padding: 0;
    color: ${WHITE};
    font-family: "Esteban", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 0.3;
    text-align: left;
    padding-left: 20px;
      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        font-size: 2.2rem;
      }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 2.4rem;
      }
`;

export const HeaderTitle = styled(H1White) `

font-family: "Cormorant SC", serif;
font-weight: 600;
font-style: normal;
font-size: 50px;
padding-left: 20px; // Beroende av loggans position: ;
z-index: 87;
position: relative;
margin: 25px;
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      margin: 0;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      margin: 0;
    }
`;


export const H3Black = styled.h3 `
    padding: 0;
    color: ${BLACK};
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    font-style: normal;
    line-height: 0.3;
    text-align: center;
      @media screen and (min-width: ${BREAKPOINT_TABLET}) {

      }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 2.4rem;
      }
`;
