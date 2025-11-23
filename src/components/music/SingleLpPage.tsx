import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { H2Banner, H3BlackSmaller, WhiteLink } from "../styled/Fonts";
import { Banner, BackgroundOriginal } from "../styled/Wrappers";
import { useLpInfo } from "./useLpInfo";
import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE } from "../styled/Variables";
import { useEffect } from "react";


export const SingleLpImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 250px;
  }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 400px;
  }
`;

export const InfoWrapper = styled.div`
  //width: 90%;
  width: 300px;
  max-width: 900px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;  // mellan LP och tracklist
  background-color: ${WHITE}; // lite kontrast mot bakgrunden
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: black;
  border: 1px solid orange;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 90%;
    flex-direction: row;
    align-items: flex-start;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      padding-top: 60px;

    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      min-width: 1300px;

    }

`;

export const SingleInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
 // border: 1px solid red;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    margin-left: 20px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 60%;
  }

`;

const TrackList = styled.ul`
  margin-top: 10px;
  padding-left: 0px;
  //border: 1px solid green;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    padding: 0 0;

    border-bottom: 1px solid rgba(0,0,0,0.2);
    //font-size: 16px;

    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
       height: 60px;
    }
  }
    li:first-child {
      border-top: 1px solid rgba(0,0,0,0.2);   // linje före första
    }
    /*
      li:last-child {
      border-bottom: none;   // ingen linje efter sista 
    }*/


`;

export const TrackListContainer = styled.div`     // -------------------- !
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  //border: 1px solid red;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 300px;
    height: 600px;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 400px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
    width: 700px;
  }
  
`;


export const SingleLpPage = () => {
  const { slug } = useParams();
  const lp = useLpInfo().find(x => x.slug === slug);
  const { t } = useTranslation();


 
  if (!lp) {
    return (
      <>
        <Banner><H2Banner>Hittades inte</H2Banner></Banner>
        <BackgroundOriginal>
          <InfoWrapper>Ingen skiva hittades för {slug}</InfoWrapper>
        </BackgroundOriginal>
      </>
    );
  }

  // --------------------- This code enables the page to be in right position when opened ---------------------- // 
  // It is used together with <div id="top"></div> in index.html. Scrolls to top only with first mount, not in external clicks.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
  const topElement = document.getElementById("top");
  if (topElement) {
    topElement.scrollIntoView({ behavior: "auto" });
  }
}, []); // Körs EN gång när sidan laddas
  // ---------------------------------------- End of position code ---------------------------------------------- //

  return (
    <>
    <Banner><H2Banner><WhiteLink href= "/music">Music</WhiteLink> - {lp.name}</H2Banner></Banner>
    <BackgroundOriginal>
      <InfoWrapper>
        <SingleLpImage src={lp.src} alt={lp.alt} />
        <SingleInnerContainer>
          <H3BlackSmaller>{lp.name}</H3BlackSmaller>
          
          <div>
            {t("LpReleaseDate.text")}
          {lp.date.day} {t(`months.${lp.date.month}`)} {lp.year}
          </div>

          {lp.tracks && lp.tracks.length > 0 && (
            <TrackListContainer>
              {/* 
              <div style={{ fontSize: "20px", fontWeight: 600, marginBottom: "10px" }}>
                Låtar
              </div>*/}
              <TrackList>
                {lp.tracks.map((track, index) => (
                  <li key={index}>
                    {track.title} <span style={{ float: "right" }}>{track.duration}</span>
                  </li>
                ))}
              </TrackList>
            </TrackListContainer>
          )}
        </SingleInnerContainer>
      </InfoWrapper>
    </BackgroundOriginal>

    </>
  );
};