import { H2Banner } from "../components/styled/Fonts";
import { Banner, BackgroundOriginal } from "../components/styled/Wrappers";

import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE } from "../components/styled/Variables";
import { useLpInfo } from "../components/music/useLpInfo";
import { LpItem } from "../components/music/LpItem";


export const AllLpContainer = styled.div `      // ------------------------------------- !
  background-color: ${WHITE};
  width: 360px;
  //height: 300px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border: 1px solid blue;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      justify-content: start; 
      width: 600px;
      height: 600px;

      //flex-wrap: wrap;
      //align-items: start;


      align-items: center; // Gör så att "barnen" bli lika höga.

    }/*
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      grid-template-columns: repeat(3, 200px); 
      margin: 0;
      margin-top: 20px;
      margin-bottom: 20px;
      gap: 15px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      margin: 0;
    }*/
`;

export const OverLpContainerText = styled.div `
  color: ${WHITE};
  padding-top: 20px;
  width: 360px;
        @media screen and (min-width: ${BREAKPOINT_TABLET}) {
          width: 400px;
    }
        @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
          width: 500px;
    }

`;


export const Music = () => {
  const lps = useLpInfo();

return (  <>
  <Banner><H2Banner>Music - Diskografi</H2Banner></Banner> 
  <BackgroundOriginal>
    <OverLpContainerText> Se diskografi på alla Carinas skivor.
      De finns på Spotify, Itunes och YouTube bland annat.
      De går även beställa på CD om du kontaktar Carina Stars.
    </OverLpContainerText>
     <AllLpContainer>
        {lps.map(lp => (
          <LpItem
            key={lp.slug}
            slug={lp.slug}
            src={lp.src}
            alt={lp.alt}
            name={lp.name}
            year={lp.year}

          />
        ))}
      </AllLpContainer>
  </BackgroundOriginal></>
 
)};