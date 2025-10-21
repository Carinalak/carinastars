
import { BackgroundOriginal } from "../components/styled/Wrappers";
import BackgroundJade from "../assets/images/carina/Jade_akustisk.jpg"
import VisionLp from "../assets/images/lp/Vision_of_life.png"
import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE } from "../components/styled/Variables";
import { H3Black } from "../components/styled/Fonts";

export const NewsLpImage = styled.img `
 width: 200px;
 //margin-top: 20px;

`;
export const BackImg = styled.div`
  width: 100vw;
  height: 100vh;
  //margin-top: 20px;
  background-image: url(${BackgroundJade});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NewsContainer = styled.div `
  background-color: #ffffffa8;
  background-color: transparent;
  width: 100vw;
  //height: 300px;
  border-radius: 5px;
  margin-top: 60px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      margin: 0;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      margin: 0;
    }
`;

export const NewsArticleFirst = styled.div `
  height: 300px;
  width: 90%;
  //background: linear-gradient(to bottom, #ffffffa8, #bcb5b5a8);
  //background-color: #ffffffa8;
  background-color: ${WHITE};
  border: 1px solid black;
  border-radius: 5px;
  //padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      width: 600px;
      width: calc(50% - 20px);  /* två per rad */
    }
`;

export const NewsArticleSecond = styled(NewsArticleFirst) `
  background-color: #eb80eda8;

`;

export const NewsArticleThird = styled(NewsArticleFirst)`

  background-color: #344fc8a8;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
    //width: 600px;
    width: calc(100% - 35px);
  }
`;
export const NewsArticleTextContainer = styled.div `
  width: 95%;
  height: 80%;
  background-color: #ffffffa8;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      flex-direction: row;
  }
`;


export const Home = () => {


return (  <>
  <BackgroundOriginal>
      <NewsContainer>
        <NewsArticleFirst>
          <H3Black>Latest release</H3Black>
          <NewsArticleTextContainer>
          <NewsLpImage src={VisionLp} />
          <NewsArticleTextContainer> adsfasdf</NewsArticleTextContainer>
         

          </NewsArticleTextContainer>
        </NewsArticleFirst>
          
        <NewsArticleSecond>adsfasdf</NewsArticleSecond>
        <NewsArticleThird>adsfasdf</NewsArticleThird>
      </NewsContainer>
  <BackImg>


  </BackImg>

  </BackgroundOriginal>
</>
 
)};