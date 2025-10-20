import styled from "styled-components";
import { WHITE } from "./styled/Variables";
import { NavigationContainer, DesktopMenu } from "./menu/DesktopMenu";
import { HamburgerMenu } from "./menu/HamburgerMenu";
import { HeaderTitle } from "./styled/Fonts";
//import { NavigationContainer, DesktopMenu } from "./Menu/DesktopMenu"
//import { HamburgerMenu } from "./Menu/HamburgerMenu"
//import { LogoTitle } from "./styled/Fonts"

//import { LogoContainer, LogoImage, LpsLogo } from "./styled/Image";


const HeaderContainer = styled.header`
position: relative;
top: 0;
z-index: 100;
background-color: transparent;
color: ${WHITE};
margin: 0;
width: 100%;
//box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//border: 1px pink solid;
`;

// Måste ha denna så att bilden håller sig på plats
/*
const LogoLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;*/

export const Header = () => {

return (<>

  <HeaderContainer>
{/**
  <LogoContainer>
    <LogoLink href="./">
    <LogoImage src={LogoRund} alt="Logo" loading="lazy"/>
    </LogoLink>
    </LogoContainer>*/}
    
    <NavigationContainer>
     <HeaderTitle>Carina Stars</HeaderTitle>{/* 
      <LogoLink href="./">
      <LpsLogo src={Logo} alt="LPS-Tuva" loading="lazy" /></LogoLink>
*/}
      <HamburgerMenu /> 
      <DesktopMenu />
    </NavigationContainer> 
  </HeaderContainer>
</>)
}