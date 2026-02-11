
import { BackgroundImage, Banner } from "../components/styled/Wrappers";
import BackgroundJade from "../assets/images/background/Jade_akustisk_back.webp"
import VisionLp from "../assets/images/lp/png/vision_of_life.png"
import CarinaReturn from "../assets/images/carina/carina_return.webp"
import LuckySoulDreaming from "../assets/images/carina/LuckySoulDreaming.jpg"
import AmISick from "../assets/images/carina/AmISick.jpg"
//import SinceTheDay from "../assets/images/carina/Since1.jpg"
//import Jade from "../assets/images/carina/Jade_tuva_dans.jpg"
import Girl from "../assets/images/lp/png/Girl.png"
import WeLingerOn from "../assets/images/lp/png/we_linger_on.png"
import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, LIGHTERPURPLE, LIGHTPURPLE } from "../components/styled/Variables";
import { H2Banner, H3Black, H3White, PurpleLink } from "../components/styled/Fonts";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";


export const NewsLpImage = styled.img `
 width: 300px;
 //margin-top: 20px;
 border-radius: 5px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 200px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
      width: 300px;
    }
`;

export const NewsLpImageSecond = styled(NewsLpImage) `
  display: none;

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      display: block;
      border-radius: 5px;
    }
`;
export const NewsImage = styled(NewsLpImage) `

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 600px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
      width: 800px;
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
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  //border: 1px solid white;


    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: start;
      align-items: stretch; // Gör så att "barnen" bli lika höga.
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      margin: 0;
      margin-top: 20px;
      margin-bottom: 20px;
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
  //border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //text-align: justify;
  //border: 1px solid yellow;


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
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
      height: 500px;
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
    padding-top: 15px;
  }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
      margin-top: 30px;
    }
`;

export const InnerTextLeft = styled.div `
  display: block;
  white-space: pre-line;
  width: 300px;
  padding-top: 10px;
  padding-bottom: 15px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
    width: 45%;
    padding-top: 15px;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}){

    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
        margin-top: 30px;
    }
`;
export const ItalicText = styled.div`
  font-style: italic;
  white-space: pre-line;
  opacity: 0.85;
`;

export const News = () => {
  const { t } = useTranslation();

  // --------------------- This code enables the page to be in right position when opened ---------------------- // 
  // It is used together with <div id="top"></div> in index.html. Scrolls to top only with first mount, not in external clicks.
  useEffect(() => {
  const topElement = document.getElementById("top");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "auto" });
  }
}, []); // Körs EN gång när sidan laddas
  // ---------------------------------------- End of position code ---------------------------------------------- //


return (  <>
  <Banner>
    <H2Banner>{t("header.title")}</H2Banner>
  </Banner> 
  <BackgroundImage>
      <NewsContainer>
        <NewsArticleThird>
          <H3White>{t("article_header.title_WeLingerOn")}</H3White>
          
          <NewsArticleTextContainer>
            <InnerTextCenter><PurpleLink href="https://open.spotify.com/track/1oCNNaxxYalZkEIZfYLZ1C?si=f5d0d564eea24a5d" target="_blank" rel="noopener noreferrer"><NewsLpImage src={WeLingerOn} loading="lazy"/></PurpleLink></InnerTextCenter>
              {/*<InnerTextCenter><NewsLpImageSecond src={SinceTheDay} loading="lazy"/></InnerTextCenter>
              <InnerTextCenter><NewsLpImage src={Jade} loading="lazy"/></InnerTextCenter>*/}
            <InnerTextLeft>
              {t("news_WeLingerOn1")}

              <ItalicText>
               {t("news_WeLingerOn2")}
              </ItalicText>

            </InnerTextLeft>

            </NewsArticleTextContainer>
        </NewsArticleThird>
        <NewsArticleThird>
          <H3White>{t("article_header.title_NewSingle")}</H3White>
          
          <NewsArticleTextContainer>
            <InnerTextCenter><PurpleLink href="https://open.spotify.com/track/1nmSFmUUy0qfRsXwObBaJG?si=2424b026bc464894" target="_blank" rel="noopener noreferrer"><NewsLpImage src={Girl} loading="lazy"/></PurpleLink></InnerTextCenter>
              {/*<InnerTextCenter><NewsLpImageSecond src={SinceTheDay} loading="lazy"/></InnerTextCenter>
              <InnerTextCenter><NewsLpImage src={Jade} loading="lazy"/></InnerTextCenter>*/}
            <InnerTextLeft>
              {t("news_NewSingle1")}

              <ItalicText>
               {t("news_NewSingle2")}
              </ItalicText>

            </InnerTextLeft>

            </NewsArticleTextContainer>
        </NewsArticleThird>

        <NewsArticleFirst>
          <H3Black>{t("article_header.title_LatestRelease")}</H3Black>
          <NewsArticleTextContainer>
          <InnerTextCenter><NewsLpImage src={VisionLp} loading="lazy"/></InnerTextCenter>
          <InnerTextLeft> {t('news_LatestRelease')}</InnerTextLeft>
          </NewsArticleTextContainer>
        </NewsArticleFirst>
          

        <NewsArticleSecond>
          <H3Black>{t("article_header.title_About")}</H3Black>
          <NewsArticleTextContainer>
            <InnerTextCenter><NewsLpImage src={CarinaReturn} /></InnerTextCenter>
            <InnerTextLeft> {t('news_About')}
            </InnerTextLeft>
            </NewsArticleTextContainer>
        </NewsArticleSecond>

        <NewsArticleThird>
          <H3White>{t("article_header.title_MusicVideos")}</H3White>
          <NewsArticleTextContainer>
            <InnerTextCenter><PurpleLink href="https://youtu.be/AMNWrxuRp70" target="_blank" rel="noopener noreferrer"><NewsLpImageSecond src={AmISick} loading="lazy"/></PurpleLink>  </InnerTextCenter>
            <InnerTextCenter><PurpleLink href="https://youtu.be/BBihZJRHBD4" target="_blank" rel="noopener noreferrer"><NewsLpImage src={LuckySoulDreaming} loading="lazy"/></PurpleLink></InnerTextCenter>
            {/*<InnerTextCenter><NewsLpImageSecond src={SinceTheDay} loading="lazy"/></InnerTextCenter>
            <InnerTextCenter><NewsLpImage src={Jade} loading="lazy"/></InnerTextCenter>*/}
            <InnerTextLeft>
              {t("news_MusicVideos1")}
              <PurpleLink href="/videos">
                {t("news_MusicVideos2")}
              </PurpleLink>
              {t("news_MusicVideos3")}
            </InnerTextLeft>

            </NewsArticleTextContainer>

        </NewsArticleThird>
      </NewsContainer>
        <BackImg />

  </BackgroundImage>
</>
 
)};