import { useTranslation } from "react-i18next";
import styled from "styled-components";
import enFlag from "../assets/icons/eng.png";
import svFlag from "../assets/icons/sv.png";
import { BREAKPOINT_TABLET } from "./styled/Variables";

const FlagButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.2s;
        -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter

  &:hover {
    transform: scale(1.1);
  }
  
      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        width: 25px;
        height: 25px;
      }
`;

export function LanguageFlag() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const switchLanguage = () => {
    const newLang = isEnglish ? "sv" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lng", newLang);
  };

  return <FlagButton src={isEnglish ? svFlag : enFlag} alt="Switch Language" onClick={switchLanguage} />;
}
