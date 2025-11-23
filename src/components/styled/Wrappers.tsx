import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, DARKESTPURPLE } from "./Variables";


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
  padding-top: 20px;
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
      padding-top: 40px;
    }
`;

/*
export const BackgroundAlbum = styled.div `
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  //padding: 10px;
  padding-top: 0;
  padding-bottom: 60px;
  //border: 1px red solid;
`;*/

export const BackgroundAlbum = styled.div<{ bg: string }>`
  min-height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;


  /* valfritt: gör bakgrunden dimmad */
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.35);
  }

  /* så att innehållet ligger över overlayen */
  > * {
    position: relative;
    z-index: 2;
  }
      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
        padding-top: 40px;
    }
`;


export const Banner = styled.div `
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  padding-top: 0;

  background: ${DARKESTPURPLE};
  min-width: 100%;

    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
        padding-top: 10px;
        padding-bottom: 10px;
        //margin-bottom: 40px;
    }
`;