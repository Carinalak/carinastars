import { Link } from "react-router-dom";
import styled from "styled-components";
import { BLACK, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, WHITE } from "../styled/Variables";

type Track = {
  title: string;
  duration: string;
};

type Props = {
  slug: string;
  src: string;
  alt: string;
  name: string;
  year: number;
  tracks?: Track[];
};


export const LpImage = styled.img `
  width: 80px;     //width: 300px;
 //margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: ${BREAKPOINT_TABLET}) {
      width: 60px;
    }
`;


export const OneLpContainer = styled.div `
  width: 350px; // Går efter bildstorleken som är 300px i mobilläge och 150px i tablet
  background-color: ${WHITE};
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;

    @media screen and (min-width: ${BREAKPOINT_TABLET}){
      width: 90%;
    }
        @media screen and (min-width: ${BREAKPOINT_DESKTOP}){
    }
`;


export const InnerLpLeft = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: left;
  //border: 1px solid black;
  color: ${BLACK};
  padding-top: 0;
  margin-top: 0;
    @media screen and (min-width: ${BREAKPOINT_TABLET}){

  }
    @media screen and (min-width: ${BREAKPOINT_DESKTOP}){

    }
`;

export const InnerLpRight = styled(InnerLpLeft)`
  padding-left: 10px;
  padding-top: 5px;

`;


const TrackAndLength = styled.ul`
  margin-top: 5px;
  //padding-left: 0px;
  padding-left: "20px"; 
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    padding: 0 0;
  }
  
`;

export const LpItem = ({ slug, src, alt, name, year , tracks}: Props) => {
  return (
    <OneLpContainer>
      <Link to={`/music/${slug}`}>
        <InnerLpLeft>
          <LpImage src={src} alt={alt} loading="lazy" />
        </InnerLpLeft>
      </Link>
      <InnerLpRight>
        <div>{name}</div>
        <div>{year}</div>

        {tracks && tracks.length > 0 && (
          <TrackAndLength>
            {tracks.map((track, index) => (
              <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{track.title}</span>
                <span>{track.duration}</span>
              </li>
            ))}
          </TrackAndLength>
        )}
      </InnerLpRight>
    </OneLpContainer>
  );
};