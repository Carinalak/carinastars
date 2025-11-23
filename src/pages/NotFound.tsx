//import NotFoundImage from '../assets/images/CarinaStarsOgg.png';
import { styled } from "styled-components";
import { BackgroundOriginal } from "../components/styled/Wrappers";
import { H1White, WhiteLink } from "../components/styled/Fonts";
import CarinaStars from "/carinastars.png"
import { InnerTextCenter } from "./News";
import { ContactImage } from "./Contact";

export const NotFoundImg = styled.img `
width: 300px;
margin-bottom: 50px;
`;

export const NotFoundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 20px;
  height: 100vh;
  width: 100vw;
`;

export const NotFound = () => {
  return (
      <>
      <BackgroundOriginal>
        <NotFoundWrapper>
          <InnerTextCenter><ContactImage src={CarinaStars} loading="lazy"/></InnerTextCenter>
          <H1White>404 Not Found</H1White>
            {/**<NotFoundImg src={NotFoundImage}/>*/}
         <div> Go to <WhiteLink href={"/"} > Carina Stars</WhiteLink>.</div>
        </NotFoundWrapper>
      </BackgroundOriginal>
      </>
  )
}