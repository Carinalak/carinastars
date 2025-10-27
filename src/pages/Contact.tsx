import { Link } from "react-router-dom";
import { H2Banner } from "../components/styled/Fonts";
import { BackgroundOriginal, Banner } from "../components/styled/Wrappers";
import { OverLpContainerText } from "./Music";
import { useTranslation } from "react-i18next";

export const Contact = () => {
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
    <H2Banner>{t("header.titleContact")}</H2Banner>
  </Banner> 
  <BackgroundOriginal>

<OverLpContainerText>Kontakta <Link to="mailto:carina.lakosil@gmail.com" target="_blank" rel="noopener noreferrer"> Carina Stars</Link>.</OverLpContainerText>

  </BackgroundOriginal>

</>
 
)};