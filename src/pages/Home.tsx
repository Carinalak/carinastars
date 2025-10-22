
import { BackgroundOriginal, Banner } from "../components/styled/Wrappers";
import BackgroundJade from "../assets/images/background/Jade_akustisk_back.webp"
import VisionLp from "../assets/images/lp/Vision_of_life.png"
import CarinaReturn from "../assets/images/carina/carina_return.jpg"
import LuckySoulDreaming from "../assets/images/carina/LuckySoulDreaming.jpg"
import AmISick from "../assets/images/carina/AmISick.jpg"
import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, LIGHTERPURPLE, LIGHTPURPLE } from "../components/styled/Variables";
import { H2Banner, H3Black, H3White, PurpleLink } from "../components/styled/Fonts";

export const NewsLpImage = styled.img `
 width: 300px;
 //margin-top: 20px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 200px;
    }
`;

export const NewsLpImageSecond = styled(NewsLpImage) `
  display: none;

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      display: block;
    }
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

export const BackImgSecond = styled.div`
  width: 100vw;
  height: 100vh;
  //margin-top: 20px;
  background-image: url(${LuckySoulDreaming});
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
  margin-bottom: 20px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;


    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: start;
      gap: 5px;
      align-items: stretch; // Gör så att "barnen" bli lika höga.
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      margin: 0;
      margin-top: 20px;
      margin-bottom: 20px;
      gap: 10px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      margin: 0;
    }
`;

export const NewsArticleFirst = styled.div `
  width: 90%;
  //background: linear-gradient(to bottom, #ffffffa8, #bcb5b5a8);
  //background-color: #ffffffa8;
  //background-color: #f5f2f5a8;
  background-color: ${LIGHTERPURPLE};
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;


    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      width: 600px;
    }
        @media screen and (min-width: ${BREAKPOINT_DESKTOP}){
      width: 600px;
      width: calc(50% - 20px);  /* två per rad */
    }
`;

export const NewsArticleSecond = styled(NewsArticleFirst) `
  //background-color: #eb80eda8;
  background-color: ${LIGHTERPURPLE};

`;

export const NewsArticleThird = styled(NewsArticleFirst)`
  //background-color: #344fc8a8;
  background-color: ${LIGHTPURPLE};

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
    width: 600px;
    height: fit-content;
  }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}){
    width: calc(100% - 35px);
  }
`;

export const NewsArticleTextContainer = styled.div `
  width: 95%;
  height: 80%;
  background-color: #ffffffa8;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  //border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      flex-direction: row;
      margin-left: 5%;
      margin-right: 5%;
      gap: 5%;
      align-items: start;
  }
`;

export const InnerTextCenter = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  //align-self: flex-start;
`;

export const InnerTextLeft = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 300px;
  padding-top: 10px;
  padding-bottom: 15px;
  //align-self: flex-start;
    @media screen and (min-width: ${BREAKPOINT_TABLET}){
    width: 45%;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}){

    }
`;


export const Home = () => {


return (  <>
  <Banner>
    <H2Banner>News</H2Banner>
  </Banner> 
  <BackgroundOriginal>
      <NewsContainer>

        <NewsArticleFirst>
          <H3Black>Ny skiva</H3Black>
          <NewsArticleTextContainer>
          <InnerTextCenter><NewsLpImage src={VisionLp} loading="lazy"/></InnerTextCenter>
          <InnerTextLeft> Senaste skivan "Vision of Life" släpptes i september 2025. 
            Låtarna spelades in under sommaren samma år. All musik på plattan är skriven på 90-talet. 
            "Jag har en hel låtskatt att ta ifrån som är skriven på den tiden" säger Carina Stars. Men hon 
            skriver fortfarande ny musik. "Det kan komma en låt på svenska snart", säger hon. Hon jobbar redan på nästa platta. 
            Om allt går som hon vill är den ute nästa år. "Det finns så mycket jag vill hinna med, jag har så många 
            idéer" säger hon.</InnerTextLeft>
          </NewsArticleTextContainer>
        </NewsArticleFirst>
          


        <NewsArticleSecond>
          <H3Black>Om Carina Stars</H3Black>
          <NewsArticleTextContainer>
            <InnerTextCenter><NewsLpImage src={CarinaReturn} /></InnerTextCenter>
            <InnerTextLeft> Carina Stars är text och musikkompositör. Hon har varit verksam sedan 90-talet 
              och släppte sin första skiva Lucky Soul 2019. Hennes musik är främst på engelska men hon har även 
              några svenska låtar. Bland annat den populära "Albin" som finns på första skivan. 
              Hon är uppvuxen norr om Stockholm och var redan som liten fascinerad av musik. 1992 var hon med i 
              hårdrocksbandet Iguanas där hon spelade komp och sologitarr, och senare blev hon singer 
              songwriter artist.
            </InnerTextLeft>
            </NewsArticleTextContainer>
        </NewsArticleSecond>

        <NewsArticleThird>
          <H3White>Musikvideos</H3White>
          <NewsArticleTextContainer>
            <InnerTextCenter><NewsLpImageSecond src={AmISick} loading="lazy"/></InnerTextCenter>
            <InnerTextCenter><NewsLpImage src={LuckySoulDreaming} loading="lazy"/></InnerTextCenter>
            <InnerTextLeft>Titta på Carina Stars&nbsp;
              <PurpleLink to="https://www.youtube.com/@carinastars1" target="_blank"> musikvideos</PurpleLink>.
              
            </InnerTextLeft>

            </NewsArticleTextContainer>

        </NewsArticleThird>
      </NewsContainer>
        <BackImg />

  </BackgroundOriginal>
</>
 
)};