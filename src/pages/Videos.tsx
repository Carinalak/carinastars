import { useTranslation } from "react-i18next";
import { H2Banner } from "../components/styled/Fonts";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE_TRANSPARENT2 } from "../components/styled/Variables";
import { BackgroundOriginal, Banner } from "../components/styled/Wrappers";
import { useEffect } from "react";
import styled from "styled-components";

export const AllVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center; /* Centrera allt */
  width: 100%;

    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      padding-top: 20px;
      gap: 35px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      gap: 40px;
    }
`;

export const OneVideoWrapper = styled.div`
  background-color: ${WHITE_TRANSPARENT2};
  border-radius: 12px;
  padding: 10px;
  width: 100%;
  max-width: 350px; /* Mobilbredd */
  display: flex;
  justify-content: center;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      max-width: 450px; /* Desktop/tablet */
    }
      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        max-width: 550px; /* Desktop/tablet */
    }
      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
        max-width: 700px; /* Desktop/tablet */
    }
`;

/* ⭐ Perfekt responsiv 16:9-video med runda hörn */
export const ResponsiveVideo = styled.div`
  position: relative;
  width: 100%;          /* Fyll wrapperns bredd */
  padding-top: 56.25%;  /* 16:9 ratio */
  border-radius: 12px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }
`;

export const Videos = () => {
  const { t } = useTranslation();

  /* Scroll to top on load */
  useEffect(() => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <>
      <Banner>
        <H2Banner>{t("header.titleVideos")}</H2Banner>
      </Banner>

      <BackgroundOriginal>
        <AllVideoWrapper>

          {/* VIDEO 1 Jade */}
          <OneVideoWrapper>
            <ResponsiveVideo>
              <iframe 
                  src="https://www.youtube.com/embed/tyqiQGH2LOk?si=hSGVVs_qZ37liGBO" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
            </ResponsiveVideo>
          </OneVideoWrapper>
          {/* VIDEO 2 Girl*/}
          <OneVideoWrapper>
            <ResponsiveVideo>
              
             <iframe width="560" height="315" src="https://www.youtube.com/embed/bRiwf8TejzE?si=hVPBC17FiIrffIEw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </ResponsiveVideo>
          </OneVideoWrapper>

          {/* VIDEO 3 Lucky Soul */}
          <OneVideoWrapper>
            <ResponsiveVideo>
              <iframe
                src="https://www.youtube.com/embed/BBihZJRHBD4?si=ufuTfzuVIZ5Y137k"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </ResponsiveVideo>
          </OneVideoWrapper>

          {/* VIDEO 4 Am I Sick */}
          <OneVideoWrapper>
            <ResponsiveVideo>
              <iframe
                src="https://www.youtube.com/embed/AMNWrxuRp70?si=5OlZ0OVQLrb9U49z"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </ResponsiveVideo>
          </OneVideoWrapper>

          {/* VIDEO 5 Since the Day I Came Back*/}
          <OneVideoWrapper>
            <ResponsiveVideo>
              <iframe
                src="https://www.youtube.com/embed/Dn2TBlHfBDU?si=6ZZ6043Ok4D2HGcv"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </ResponsiveVideo>
          </OneVideoWrapper>

          {/* VIDEO 6 Crown of Sun*/}
          <OneVideoWrapper>
            <ResponsiveVideo>
              <iframe 
                src="https://www.youtube.com/embed/IgAjdiMQuMI?si=lETiQufojxkQ8mSA" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </ResponsiveVideo>
          </OneVideoWrapper>
          
          {/* VIDEO 7 Hösten är här */}
          <OneVideoWrapper>
            <ResponsiveVideo>
              <iframe
                src="https://www.youtube.com/embed/1621fzd4AQc?si=13c8t9De5t_oMQi0" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </ResponsiveVideo>
          </OneVideoWrapper>

          {/* VIDEO 8 Albin */}
          <OneVideoWrapper>
            <ResponsiveVideo>
            <iframe 
              src="https://www.youtube.com/embed/WwYMTJDu0zQ?si=Rau_E0XRCiQwUUiw" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>            
            </ResponsiveVideo>
          </OneVideoWrapper>

          {/* VIDEO 9 Lilla Tjej*/}
          <OneVideoWrapper>
            <ResponsiveVideo>
              <iframe 
                src="https://www.youtube.com/embed/4Ravid-U__A?si=dFEWM6tUr6FdkFd1" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>   
              </iframe>
            </ResponsiveVideo>
          </OneVideoWrapper>
          
          {/* VIDEO 10 Disappear*/}
          <OneVideoWrapper>
            <ResponsiveVideo>
             <iframe width="560" height="315" src="https://www.youtube.com/embed/oXNBJT2FwO0?si=SufVBiIdCsgSETY6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </ResponsiveVideo>
          </OneVideoWrapper>


        </AllVideoWrapper>
      </BackgroundOriginal>

      
    </>
  );
};
