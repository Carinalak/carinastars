import { H2Banner } from "../components/styled/Fonts";
import { Banner, BackgroundOriginal } from "../components/styled/Wrappers";
import VisionLp from "../assets/images/lp/Vision_of_life.png"
import AlligatorLp from "../assets/images/lp/alligator.jpg"
import ReturnLp from "../assets/images/lp/carinastars.jpg"
import LuckySoulLp from "../assets/images/lp/LP-Carina1.jpg"
import DisappearLp from "../assets/images/lp/Disappear.jpg"

import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, LIGHTERPURPLE } from "../components/styled/Variables";

export const LpImage = styled.img `
  width: 300px;
 //margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 150px;
    }
`;


export const AllLpContainer = styled.div `
  background-color: transparent;
  width: 90%;
  //height: 300px;
  border-radius: 5px;
  margin-top: 60px;
  margin-bottom: 20px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  //border: 1px solid red;

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

export const OneLpContainer = styled.div `
  width: 400px; // Går efter bildstorleken som är 300px i mobilläge och 150px i tablet
  background-color: ${LIGHTERPURPLE};
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      width: 200px;
      /*transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }*/
    }
        @media screen and (min-width: ${BREAKPOINT_DESKTOP}){
    }
`;

export const InnerLpCenter = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;

`;

export const InnerLpLeft = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
  //border: 1px solid black;
  color: ${BLACK};
  padding-top: 0;
  margin-top: 0;
  font-weight: 600;
  font-size: 20px;
  text-align: justify;
    @media screen and (min-width: ${BREAKPOINT_TABLET}){
    width: 150px;     // samma bredd som lp-bilden
      font-size: 18px;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}){

    }
`;


export const Music = () => {

return (  <>
  <Banner><H2Banner>Music</H2Banner></Banner> 
  <BackgroundOriginal>
    <AllLpContainer>

      <OneLpContainer>
        <InnerLpCenter><LpImage src={VisionLp} loading="lazy"/></InnerLpCenter>
        <InnerLpLeft><div>Vision of Life</div><div>2025</div></InnerLpLeft>
      </OneLpContainer>

      <OneLpContainer>
        <InnerLpCenter><LpImage src={AlligatorLp} loading="lazy"/></InnerLpCenter>
        <InnerLpLeft><div>Sweet Alligator</div><div>2023</div></InnerLpLeft>
      </OneLpContainer>

      <OneLpContainer>
        <InnerLpCenter><LpImage src={DisappearLp} loading="lazy"/></InnerLpCenter>
        <InnerLpLeft><div>Disappear</div><div>2022</div></InnerLpLeft>
      </OneLpContainer>

      <OneLpContainer>
        <InnerLpCenter><LpImage src={ReturnLp} loading="lazy"/></InnerLpCenter>
        <InnerLpLeft><div>Return to the Sun</div><div>2019</div></InnerLpLeft>
      </OneLpContainer>

      <OneLpContainer>
        <InnerLpCenter><LpImage src={LuckySoulLp} loading="lazy"/></InnerLpCenter>
        <InnerLpLeft><div>Lucky Soul</div><div>2019</div></InnerLpLeft>
      </OneLpContainer>




    </AllLpContainer>
  </BackgroundOriginal></>
 
)};