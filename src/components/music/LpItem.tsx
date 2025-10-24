import { Link } from "react-router-dom";
import { InnerLpCenter, InnerLpLeft, LpImage, OneLpContainer } from "../../pages/Music";
import styled from "styled-components";

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
        <InnerLpCenter>
          <LpImage src={src} alt={alt} loading="lazy" />
        </InnerLpCenter>
      </Link>
      <InnerLpLeft>
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
      </InnerLpLeft>
    </OneLpContainer>
  );
};