//import NotFoundImage from '../assets/images/LpsTuvaOgg.png';
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundImg = styled.img `
width: 300px;
margin-bottom: 50px;
`;


export const WrapperTransparent2 = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding-top: 10px;
  //padding-bottom: 10px;
  //border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 0;
  font-family: "Playpen Sans", serif;
  margin: 0 auto;
  gap: 20px;
  margin-bottom: 100px;
  //border: 1px solid black;
`;

export const NotFound = () => {
  return (
      <>

      <h1>404 Not Found</h1>
          <h4>Ooops, nu har du kommit fel!</h4>
          {/**<NotFoundImg src={NotFoundImage}/>*/}
          <Link to={"/"} >Gå tillbaka till sidan. </Link>

      </>
  )
}