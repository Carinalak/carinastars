import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, WHITE } from "./styled/Variables";
import { faInstagram, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.footer`
background-color: transparent;
text-align: center;
margin-top: auto; /* Flyttar footern längst ner */
margin-bottom: 0 !important;
padding-bottom: 5px;
max-width: 100%;
height: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
color: ${WHITE};
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 12px;

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    height: 100px;
  }
`;

export const Footer = () => {

return (
  <FooterContainer>
    <div>Copyright &copy; Carina Stars 2025 All rights reserved</div>
    <div style={{ display: "flex", gap: "10px", color: "white", fontSize: "24px", paddingBottom: "8px" }}>
      <a href="https://open.spotify.com/artist/55qk3HvZGmJNg98ChI6MdJ" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSpotify} /></a>
      <a href="https://www.youtube.com/@carinastars1/videos?view=0&sort=dd&shelf_id=1" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="https://www.instagram.com/carinastars/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      {/*<a href="https://www.tiktok.com/search?q=carina%20stars&t=1761372933835" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>*/}
    </div>
  </FooterContainer>
);
}