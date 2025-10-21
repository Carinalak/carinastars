import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, WHITE } from "./styled/Variables";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSpotify } from '@fortawesome/free-brands-svg-icons';
//import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
//import { faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
//import { FooterTextWhite, StyledLinkHalloween } from "./styled/Fonts";

const FooterContainer = styled.footer`
background-color: transparent;
text-align: center;
margin-top: auto; /* Flyttar footern längst ner */
margin-bottom: 0 !important;
max-width: 100%;
height: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 40px;
color: ${WHITE};
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 12px;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    height: 100px;
  }
`;
/*
const ResponsiveIcon = styled(FontAwesomeIcon)`
  color: ${WHITE};
  font-size: 32px;

  @media (min-width: ${BREAKPOINT_TABLET}) {
    font-size: 35px;
  }

  @media (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 40px;
      }

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    font-size: 60px;
    gap: 60px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;*/

export const Footer = () => {

return (
  <FooterContainer>
    <div>&copy; Carina Stars 2025</div>
  {/** 
    <FooterTextWhite>&copy; Carina Stars 2025 - <StyledLinkHalloween to="/webmaster"> Webmaster </StyledLinkHalloween></FooterTextWhite>
    <SocialMediaWrapper>
      <a href="https://www.youtube.com/c/LPSTuwa" target="_blank" rel="noopener noreferrer">
        <ResponsiveIcon icon={faSquareYoutube} />
      </a>

      <a href="https://www.instagram.com/tuvasundgren/" target="_blank" rel="noopener noreferrer">
        <ResponsiveIcon icon={faSquareInstagram} />
      </a>

      <a href="https://open.spotify.com/artist/2zdnWVvx5WeaD3vctR5DnO" target="_blank" rel="noopener noreferrer">
        <ResponsiveIcon icon={faSpotify} />
      </a>
    </SocialMediaWrapper>*/}
  </FooterContainer>
);
}