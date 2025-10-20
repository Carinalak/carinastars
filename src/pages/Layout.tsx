import { Outlet } from "react-router-dom"
//import { Header } from "../components/Header"
//import { Footer } from "../components/Footer";
import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MainContainer = styled.main`
 // padding-top: 130px; // Höjd på main för att när header är fixed tar den upp den plats över main som dens egen höjd.
  //width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  //margin-left: 0;
 // padding-bottom: 30px;
 //border: 1px solid red;
`;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Gör att hela sidan alltid fyller hela höjden, måste vara i kombination med <BackgroundOriginal> på sidan */
  overflow-x: hidden;
  //border: 1px solid yellow;
   //width: 100vw;
`;

export const Layout = () => {
  return (
    <AppContainer>
     <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
     <Footer />
    </AppContainer>
  );
};