import styled from "styled-components";
import { BREAKPOINT_TABLET, BREAKPOINT_DESKTOP, WHITE, BLACK, LIGHTPURPLE } from "./Variables";
import { Link } from "react-router-dom";

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

export const H2Banner = styled.h1 `
    padding: 0;
    color: ${WHITE};
    font-family: "Esteban", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.6rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 0.3;
    text-align: left;
    padding-left: 20px;
    
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      font-size: 1.8rem;
    }

`;

export const HeaderTitle = styled(H1White) `

font-family: "Cormorant SC", serif;
font-weight: 500;
font-style: normal;
font-size: 40px;
padding-left: 5;
z-index: 87;
//position: relative;


    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      padding-left: 10px;
      margin: 0;
      font-size: 50px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      margin: 0;


    }
`;


export const H3Black = styled.h3 `
    padding: 0;
    color: ${BLACK};
    font-size: 2rem;
    //font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 600;
    font-style: normal;
    line-height: 0.3;
    text-align: center;
      @media screen and (min-width: ${BREAKPOINT_TABLET}) {

      }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 2rem;
      }
`;

export const H3White = styled(H3Black) `
    color: ${WHITE};
`;

export const BoldBlackText = styled.div `
font-weight: 600;
`;

// -------------------------- LINKS ---------------------------------- //

export const PurpleLink = styled.a`
  display: inline !important;
  color: ${LIGHTPURPLE} !important;
  text-decoration: none !important;
  cursor: pointer;

  &:hover {
    color: ${BLACK} !important;
    text-decoration: underline !important;
  }
  &:focus {
    color: ${WHITE} !important;
    text-decoration: none !important;
  }
`;


export const WhiteLink = styled(Link)`
  && {
    //gap: 5px;
    text-decoration: none;
    color: ${WHITE};
    cursor: pointer;


    &:hover {
      color: ${LIGHTPURPLE};
      text-decoration: underline;
    }
    &:focus {
      color: ${LIGHTPURPLE};
      text-decoration: none;
    }
  }
`;
// -------------------------- END LINKS -------------------------------- //