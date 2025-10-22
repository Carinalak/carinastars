import { Link } from "react-router-dom";
import { H2Banner } from "../components/styled/Fonts";
import { BackgroundOriginal, Banner } from "../components/styled/Wrappers";
import { OverLpContainerText } from "./Music";

export const Contact = () => {

return (  <>
  <Banner>
    <H2Banner>Contact</H2Banner>
  </Banner> 
  <BackgroundOriginal>

<OverLpContainerText>Kontakta <Link to="mailto:carina.lakosil@gmail.com" target="_blank" rel="noopener noreferrer"> Carina Stars</Link>.</OverLpContainerText>

  </BackgroundOriginal>

</>
 
)};