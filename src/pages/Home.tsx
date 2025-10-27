
import { BackgroundOriginal, Banner } from "../components/styled/Wrappers";
import BackgroundJade from "../assets/images/background/Jade_akustisk_back.webp"
import VisionLp from "../assets/images/lp/png/vision_of_life.png"
import CarinaReturn from "../assets/images/carina/carina_return.webp"
import LuckySoulDreaming from "../assets/images/carina/LuckySoulDreaming.jpg"
import AmISick from "../assets/images/carina/AmISick.jpg"
import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, LIGHTERPURPLE, LIGHTPURPLE } from "../components/styled/Variables";
import { H2Banner, H3Black, H3White, PurpleLink } from "../components/styled/Fonts";
import { useTranslation } from 'react-i18next';


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
  //text-align: justify;
  //border: 1px solid red;


    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      width: 600px;
    }
        @media screen and (min-width: ${BREAKPOINT_DESKTOP}){
      width: 550px;
      width: calc(50% - 40px);  /* två per rad */
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
    width: calc(100% - 70px);
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
  gap: 1px;

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
  padding-bottom: 0;
  //align-self: flex-start;
      @media screen and (min-width: ${BREAKPOINT_TABLET}){
          padding-bottom: 10px;
  }
`;

export const InnerTextLeft = styled.div `
  display: block;
  white-space: pre-line;
  //flex-direction: column;
  //justify-content: left;
  width: 300px;
  padding-top: 5px;
  padding-bottom: 15px;
  //align-self: flex-start;
    @media screen and (min-width: ${BREAKPOINT_TABLET}){
    width: 45%;
    padding-top: 10px;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}){

    }
`;


export const Home = () => {
  const { t } = useTranslation();

  // --------------------- This code enables the page to be in right position when opened ---------------------- // 
  // It is used together with <div id="top"></div> in index.html.
  setTimeout(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, 0);
  // ---------------------------------------- End of position code ---------------------------------------------- //


return (  <>
  <Banner>
    <H2Banner>{t("header.title")}</H2Banner>
  </Banner> 
  <BackgroundOriginal>
      <NewsContainer>

        <NewsArticleFirst>
          <H3Black>Ny skiva</H3Black>
          <NewsArticleTextContainer>
          <InnerTextCenter><NewsLpImage src={VisionLp} loading="lazy"/></InnerTextCenter>
          <InnerTextLeft> {t('news_article_1')}</InnerTextLeft>
          </NewsArticleTextContainer>
        </NewsArticleFirst>
          

        <NewsArticleSecond>
          <H3Black>Om Carina Stars</H3Black>
          <NewsArticleTextContainer>
            <InnerTextCenter><NewsLpImage src={CarinaReturn} /></InnerTextCenter>
            <InnerTextLeft> {t('news_article_2')}
            </InnerTextLeft>
            </NewsArticleTextContainer>
        </NewsArticleSecond>

        <NewsArticleThird>
          <H3White>Musikvideos</H3White>
          <NewsArticleTextContainer>
            <InnerTextCenter><NewsLpImageSecond src={AmISick} loading="lazy"/></InnerTextCenter>
            <InnerTextCenter><NewsLpImage src={LuckySoulDreaming} loading="lazy"/></InnerTextCenter>
            <InnerTextLeft>
              {t("news_article_3_part1")}
              <PurpleLink href="https://www.youtube.com/@carinastars1" target="_blank" rel="noopener noreferrer">
                {t("news_article_3_link")}
              </PurpleLink>
              {t("news_article_3_part2")}
            </InnerTextLeft>

            </NewsArticleTextContainer>

        </NewsArticleThird>
      </NewsContainer>
        <BackImg />

  </BackgroundOriginal>
</>
 
)};