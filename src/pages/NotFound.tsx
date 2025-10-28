//import NotFoundImage from '../assets/images/CarinaStarsOgg.png';
import { styled } from "styled-components";
import { BackgroundOriginal } from "../components/styled/Wrappers";
import { H1White, WhiteLink } from "../components/styled/Fonts";
import CarinaStars from "../assets/images/carina/carinastars.png"
import { InnerTextCenter, NewsLpImage } from "./News";

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
          <InnerTextCenter><NewsLpImage src={CarinaStars} loading="lazy"/></InnerTextCenter>
          <H1White>404 Not Found</H1White>
            {/**<NotFoundImg src={NotFoundImage}/>*/}
         <div> Go to<WhiteLink to={"/"} > Carina Stars</WhiteLink>.</div>
        </NotFoundWrapper>
      </BackgroundOriginal>
      </>
  )
}