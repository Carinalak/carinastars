import styled from "styled-components";
import { H3BlackSmaller } from "../../styled/Fonts";

const LyricsWrapper = styled.div`
  //margin-top: 20px;
  //padding: 15px;
  background-color:  transparent;
  white-space: pre-wrap; /* behåller radbrytningar i lyrics */
  //width: 300px;
  align-self: center;
  justify-content: center;
  //border: 1px solid red;
  padding-bottom: 30px;
`;

type Props = {
  title: string;
  lyrics: string;
  //info?: string;
};

export const LyricsDisplay = ({ title, lyrics }: Props) => {
  return (
    <LyricsWrapper>
      <H3BlackSmaller>{title} - Lyrics</H3BlackSmaller>
      {/*{info && <div>{info}</div>}*/}
      <div>{lyrics}</div>

    </LyricsWrapper>
  );
};
