import styled from "styled-components";
import { BREAKPOINT_TABLET, WHITE } from "./styled/Variables";
import { NavigationContainer, DesktopMenu } from "./menu/DesktopMenu";
import { HamburgerMenu } from "./menu/HamburgerMenu";
//import { HeaderTitle } from "./styled/Fonts";
//import { NavigationContainer, DesktopMenu } from "./Menu/DesktopMenu"
//import { LogoTitle } from "./styled/Fonts"
import CarinaStarsLogo from "/Logo_foto_text.png";

//import { LogoContainer, LogoImage, LpsLogo } from "./styled/Image";


const HeaderContainer = styled.header`
position: relative;
top: 0;
z-index: 100;
background-color: transparent;
color: ${WHITE};
margin: 0;
width: 100%;
padding: 0;
//box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//border: 1px pink solid;
align-items: center;
`;

// Måste ha denna så att bilden håller sig på plats

const LogoLink = styled.a`
  display: flex;
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
display: block;
//position: relative;
//width: 60px;
width: 250px;
height: auto;
padding: 0;
margin: 0;
//border: 1px solid red;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
     width: 300px;
    }
 `;

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
     {/* <HeaderTitle>Carina Stars</HeaderTitle>
      <LogoLink href="./">
      <LpsLogo src={Logo} alt="LPS-Tuva" loading="lazy" /></LogoLink>
      
*/}   

      <LogoLink href="./">
        <LogoImage src={CarinaStarsLogo} loading="lazy"></LogoImage>
      </LogoLink>
      <HamburgerMenu /> 
      <DesktopMenu />
    </NavigationContainer> 
  </HeaderContainer>
</>)
}