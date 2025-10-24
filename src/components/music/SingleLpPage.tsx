import { useParams } from "react-router-dom";

import { BoldBlackText, H2Banner, WhiteLink } from "../styled/Fonts";
import { Banner, BackgroundOriginal } from "../styled/Wrappers";
import { useLpInfo } from "./useLpInfo";
import styled from "styled-components";
import { BREAKPOINT_TABLET, WHITE } from "../styled/Variables";


export const SingleLpImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 250px;
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

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 90%;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const SingleInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    margin-left: 20px;
  }
`;

const TrackList = styled.ul`
  margin-top: 10px;
  padding-left: 0px;
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    padding: 0 0;

    border-bottom: 1px solid rgba(0,0,0,0.2);
    //font-size: 16px;
  }
      li:last-child {
      border-bottom: none;   /* ingen linje efter sista */
    }
`;

export const TrackListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  //border: 1px solid red;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 250px;
  }
`;


export const SingleLpPage = () => {
  const { slug } = useParams();
  const lp = useLpInfo().find(x => x.slug === slug);

 
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
  return (
    <>
      <Banner><H2Banner><WhiteLink to= "/music">Music</WhiteLink> - {lp.name}</H2Banner></Banner>
<BackgroundOriginal>
  <InfoWrapper>
    <SingleLpImage src={lp.src} alt={lp.alt} />
    <SingleInnerContainer>
      <BoldBlackText>{lp.name}</BoldBlackText>
      
      <div>{lp.date} {lp.year}</div>

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