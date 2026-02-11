import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { H2Banner, H3BlackSmaller, LinkSpan, WhiteLink } from "../styled/Fonts";
import { Banner, BackgroundOriginal, BackgroundAlbum } from "../styled/Wrappers";
import { useLpInfo } from "./useLpInfo";
import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE_TRANSPARENT } from "../styled/Variables";
import { useEffect, useState } from "react";
import PlayArrow from "../../assets/icons/play-arrow.png"
import { NewsLpImage } from "../../pages/News";
import { LyricsDisplay } from "./lyrics/LyricsDisplay";



export const SingleLpImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /*transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }*/

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 250px;
    object-fit: cover;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 400px;
    object-fit: cover;
  }
`;

export const PlayArrowImage = styled.img`
 width: 20px;
 border-radius: 3px;
 margin-right: 5px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
       margin-right: 10px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){ 
    
    }
`;

export const NewsLpImageSecond = styled(NewsLpImage)`
  display: none;

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      display: block;
      border-radius: 5px;
    }
    
`;

export const InfoInnerWrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 20px;
align-items: center;
justify-content: center;
width: 100%;
gap: 30px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 20px;
  }
`;

export const InfoWrapper = styled.div`
  width: 300px;
  max-width: 900px;

  //margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: ${WHITE_TRANSPARENT};
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: black;
  //border: 1px solid orange;
  margin-bottom: 40px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 200px;

  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
   padding-top: 60px;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    min-width: 1300px;
    padding-top: 20px;
  }
`;

export const SingleInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

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
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    width: 270px;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    @media screen and (min-width: ${BREAKPOINT_TABLET}) { 
      width: 300px;  
    }

    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) { 
      height: 60px;
      width: 400px;  
    }
  }

  li:first-child {
    border-top: 1px solid rgba(0,0,0,0.2);
  }
    li:last-child {
    margin-bottom: 20px;
    }
`;

export const TrackListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 300px;
    //height: 600px;
  }
  @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
    width: 400px;
    max-height: 600px;
    overflow-y: auto;
  }
  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 700px;
  }
`;

export const TrackRow = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 
 `;
/* ---------------- Modal styling ---------------- */

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  cursor: zoom-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255,255,255,0.9);
  border: none;
  padding: 6px 12px;
  font-size: 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;
const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 16px;
  border-radius: 10px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  cursor: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: calc(90vh - 32px); /* <-- så bilden aldrig blir högre än modalens höjd */
    border-radius: 8px;
    display: block;
  }
`;

type TrackWithLyrics = {
  title: string;
  lyrics?: string;
  duration: string;
};



export const SingleLpPage = () => {
  const { slug } = useParams();
  const lp = useLpInfo().find(x => x.slug === slug);
  const { t } = useTranslation();
  

  const [selectedTrack, setSelectedTrack] = useState<TrackWithLyrics | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

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
  
// Lås body-scroll när modal är öppen + ESC för att stänga
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  if (isModalOpen) {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // lås scrolling i bakgrunden
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previous; // återställ
      window.removeEventListener("keydown", handleKey);
    };
  }

  // När modal inte är öppen, säkerställ att listener tas bort
  window.removeEventListener("keydown", handleKey);
  return;
}, [isModalOpen]);

  return (
    <>
      <Banner>
        <H2Banner><WhiteLink href="/music">Music</WhiteLink> - {lp.name}</H2Banner>
      </Banner>

      <BackgroundAlbum bg={lp.src}>
        <InfoWrapper>
          <InfoInnerWrapper>
          <SingleLpImage
            src={lp.src}
            alt={lp.alt}
            loading="lazy"
            onClick={() => openModal(lp.src, lp.alt)}
          />

          <SingleInnerContainer>
            <H3BlackSmaller>{lp.name}</H3BlackSmaller>

            <div>
              {t("LpReleaseDate.text")}
              {lp.date.day} {t(`months.${lp.date.month}`)} {lp.year} <br />
              {t("discography.ReleaseType")}
              {t(`releaseType.${lp.release_type}`)}  
              <br /> 
            </div>

            {lp.tracks && lp.tracks.length > 0 && (
              <>
                <TrackListContainer>
                  <TrackList>
                    {lp.tracks.map((track, index) => (
                      <li key={index}>
                        <TrackRow>
                          {track.spotifyUrl && (
                            <button
                              onClick={() => window.open(track.spotifyUrl, "_blank")}
                              style={{ cursor: "pointer", background: "none", border: "none" }}
                            >
                              <PlayArrowImage src={PlayArrow} />
                            </button>
                          )}

                          <LinkSpan
                              disabled={!track.lyrics}
                              onClick={() => track.lyrics && setSelectedTrack(track)}
                          >
                            {track.title}
                          </LinkSpan>
                        </TrackRow>

                        <span>{track.duration}</span>
                      </li>
                    ))}
                  </TrackList>

                </TrackListContainer>
              </>
            )}

          </SingleInnerContainer>
          </InfoInnerWrapper>

            {selectedTrack?.lyrics && (
              <LyricsDisplay
                title={selectedTrack.title}
                lyrics={selectedTrack.lyrics}
                //info={`Info: ${selectedTrack.duration}`}
              />
            )}

        </InfoWrapper>

      </BackgroundAlbum>

      {/* ---------------- Modal rendering ---------------- */}
      {isModalOpen && selectedImage && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
