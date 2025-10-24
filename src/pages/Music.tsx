import { H2Banner } from "../components/styled/Fonts";
import { Banner, BackgroundOriginal } from "../components/styled/Wrappers";



import styled from "styled-components";
import { BLACK, BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, LIGHTERPURPLE, WHITE } from "../components/styled/Variables";
import { useLpInfo } from "../components/useLpInfo";

export const LpImage = styled.img `
  width: 300px;
 //margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 150px;
    }
`;


export const AllLpContainer = styled.div `
  background-color: transparent;
  width: 90%;
  //height: 300px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  //border: 1px solid red;

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      display: grid;
      grid-template-columns: repeat(2, 200px);   // 3 på första raden
      justify-content: start;                    // vänsterankra griden
      justify-content: center; 
      width: 90%;
      //flex-wrap: wrap;
      //align-items: start;
      gap: 15px;
      align-items: stretch; // Gör så att "barnen" bli lika höga.
      //flex-direction: row;

    }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
      grid-template-columns: repeat(3, 200px); 
      margin: 0;
      margin-top: 20px;
      margin-bottom: 20px;
      gap: 15px;
    }
    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
      margin: 0;
    }
`;

export const OverLpContainerText = styled.div `
  color: ${WHITE};
  padding-top: 20px;
  width: 360px;
        @media screen and (min-width: ${BREAKPOINT_TABLET}) {
          width: 400px;
    }
        @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
          width: 500px;
    }

`;

export const OneLpContainer = styled.div `
  width: 350px; // Går efter bildstorleken som är 300px i mobilläge och 150px i tablet
  background-color: ${LIGHTERPURPLE};
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  padding-top: 10px;
  padding-bottom: 10px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      width: 200px;
      /*transition: transform 0.3s ease-in-out, border 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }*/
    }
        @media screen and (min-width: ${BREAKPOINT_DESKTOP}){
    }
`;

export const InnerLpCenter = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;

`;

export const InnerLpLeft = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 300px;
  padding-top: 10px;
  padding-bottom: 10px;
  //border: 1px solid black;
  color: ${BLACK};
  padding-top: 0;
  margin-top: 0;
  font-weight: 600;
  font-size: 20px;
  text-align: justify;
    @media screen and (min-width: ${BREAKPOINT_TABLET}){
    width: 150px;     // samma bredd som lp-bilden
      font-size: 18px;
  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}){

    }
`;

export const Music = () => {
  const lps = useLpInfo();

return (  <>
  <Banner><H2Banner>Music - Diskografi</H2Banner></Banner> 
  <BackgroundOriginal>
    <OverLpContainerText>Carina släppte sin första skiva 2019. Du kan se alla skivorna hon släppt här.
      De går att hitta på Spotify, Itunes, YouTube och andra ställen. 
      Du kan även beställa vissa av dem på CD-skiva om du kontaktar Carina Stars.
    </OverLpContainerText>
       <AllLpContainer>
        {lps.map(lp => (
          <OneLpContainer key={lp.name}>
            <InnerLpCenter>
              <LpImage src={lp.src} alt={lp.alt} loading="lazy" />
            </InnerLpCenter>
            <InnerLpLeft>
              <div>{lp.name}</div>
              <div>{lp.year}</div>
            </InnerLpLeft>
          </OneLpContainer>
        ))}
      </AllLpContainer>
  </BackgroundOriginal></>
 
)};