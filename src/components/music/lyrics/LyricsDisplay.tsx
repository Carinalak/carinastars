import styled from "styled-components";

const LyricsWrapper = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: rgba(255,255,255,0.8);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  white-space: pre-wrap; /* behåller radbrytningar i lyrics */
`;

type Props = {
  title: string;
  lyrics: string;

};

export const LyricsDisplay = ({ title, lyrics }: Props) => {
  return (
    <LyricsWrapper>
      <h3>{title}</h3>
      <p>{lyrics}</p>

    </LyricsWrapper>
  );
};
