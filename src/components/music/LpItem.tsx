// LpItem.tsx
import { Link } from "react-router-dom";
import { InnerLpCenter, InnerLpLeft, LpImage, OneLpContainer } from "../../pages/Music";


type Props = {
  slug: string;
  src: string;
  alt: string;
  name: string;
  year: number;
  tracks?: string[];
};

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
          <div style={{ fontSize: "14px", marginTop: "5px" }}>
            {tracks[0]}{/* visar bara första track */}
          </div>
        )}
      </InnerLpLeft>
    </OneLpContainer>
  );
};