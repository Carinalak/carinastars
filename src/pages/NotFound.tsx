//import NotFoundImage from '../assets/images/CarinaStarsOgg.png';
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { BackgroundOriginal } from "../components/styled/Wrappers";
import { H1White } from "../components/styled/Fonts";

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
          <H1White>404 Not Found</H1White>
          
            {/**<NotFoundImg src={NotFoundImage}/>*/}
          <Link to={"/"} >Back</Link>
        </NotFoundWrapper>
      </BackgroundOriginal>
      </>
  )
}