import { useParams } from "react-router-dom";

import { H2Banner } from "../styled/Fonts";
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
  padding-left: 20px;
  li {
    margin-bottom: 8px;
    line-height: 1.4;
  }
`;

export const TrackListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    max-width: 300px;
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
      <Banner><H2Banner>{lp.name}</H2Banner></Banner>
<BackgroundOriginal>
  <InfoWrapper>
    <SingleLpImage src={lp.src} alt={lp.alt} />
    <SingleInnerContainer>
      <div style={{ fontSize: "24px", fontWeight: 600 }}>{lp.name}</div>
      <div style={{ fontSize: "16px", marginBottom: "10px" }}>Utgiven: {lp.year}</div>

      {lp.tracks && lp.tracks.length > 0 && (
        <TrackListContainer>
          {/* Tracklist-rubrik som H2/H3 */}
          <div style={{ fontSize: "20px", fontWeight: 600, marginBottom: "10px" }}>
            Tracklist
          </div>
          <TrackList>
            {lp.tracks.map((track, index) => (
              <li key={index}>{track}</li>
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