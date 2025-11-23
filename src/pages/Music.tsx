import { H2Banner } from "../components/styled/Fonts";
import { Banner, BackgroundOriginal } from "../components/styled/Wrappers";

import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE } from "../components/styled/Variables";
import { useLpInfo } from "../components/music/useLpInfo";
import { LpItem } from "../components/music/LpItem";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


export const AllLpContainer = styled.div `      // ------------------------------------- !
  background-color: ${WHITE};
  width: 350px;
  //height: 300px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  //border: 1px solid orange;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      justify-content: start; 
      width: 600px;
      height: 100vh;
      //flex-wrap: wrap;
      //align-items: start;
      align-items: center; // Gör så att "barnen" bli lika höga.

    }/*
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      grid-template-columns: repeat(3, 200px); 
      margin: 0;
      margin-top: 20px;
      margin-bottom: 20px;
      gap: 15px;
    }*/
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 1300px;
      padding-top: 60px;
    }
`;

export const OverLpContainerText = styled.div `
  color: ${WHITE};
  padding-top: 20px;
  width: 360px;
    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 400px;
    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      width: 500px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      width: 1300px;
      padding-top: 60px;
    }

`;


export const Music = () => {
  const lps = useLpInfo();
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
  <Banner><H2Banner>{t("header.titleMusic")}</H2Banner></Banner> 
  <BackgroundOriginal>
    <OverLpContainerText> {t("discography.about")}
    </OverLpContainerText>
     <AllLpContainer>
        {lps.map(lp => (
          <LpItem
            key={lp.slug}
            slug={lp.slug}
            src={lp.src}
            alt={lp.alt}
            name={lp.name}
            year={lp.year}
          />
        ))}
      </AllLpContainer>
  </BackgroundOriginal></>
 
)};