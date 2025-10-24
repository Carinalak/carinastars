
/*

import styled from "styled-components";
import { H2Banner } from "../components/styled/Fonts"
import { BLACK, BREAKPOINT_TABLET, BREAKPOINT_DESKTOP, BREAKPOINT_BIGGER_DESKTOP } from "../components/styled/Variables";
import { Banner, BackgroundOriginal } from "../components/styled/Wrappers"
import { useLpInfo } from "../components/music/useLpInfo";
import { OneLpContainer, InnerLpCenter, LpImage, InnerLpLeft } from "./Music"



export const SingleLpContainer = styled.div `
  background-color: transparent;
  width: 90%;
  //height: 300px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid red;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      display: grid;
      grid-template-columns: repeat(2, 200px);   // 3 på första raden
      justify-content: start;                    // vänsterankra griden
      justify-content: center; 
      width: 90%;
      //flex-wrap: wrap;
      //align-items: start;
      gap: 15px;
      align-items: stretch; // Gör så att "barnen" bli lika höga.
      //flex-direction: row;

    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      grid-template-columns: repeat(3, 200px); 
      margin: 0;
      margin-top: 20px;
      margin-bottom: 20px;
      gap: 15px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      margin: 0;
    }
`;


export const LpInfo = () => {
  const lps = useLpInfo();






return (<>
  <Banner><H2Banner>Music </H2Banner></Banner> 
  <BackgroundOriginal>

       <SingleLpContainer>
        {lps.map(lp => (
          <OneLpContainer key={lp.name}>
            <InnerLpCenter>
              <LpImage src={lp.src} alt={lp.alt} loading="lazy" />
            </InnerLpCenter>
            <InnerLpLeft>
              <div>{lp.name}</div>
              <div>{lp.year}</div>
            </InnerLpLeft>
          </OneLpContainer>
        ))}
      </SingleLpContainer>
  </BackgroundOriginal>
 








</>)};*/