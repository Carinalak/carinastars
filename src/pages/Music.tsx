import { H2Banner } from "../components/styled/Fonts";
import {
  Banner,
  BackgroundOriginal,
  DropdownWrapper,
} from "../components/styled/Wrappers";
import {
  DiscographyDropdown,
  type ReleaseFilter,
} from "../components/music/DiscographyDropdown";
import styled from "styled-components";
import {
  BLACK,
  BREAKPOINT_BIGGER_DESKTOP,
  BREAKPOINT_TABLET,
  WHITE,
} from "../components/styled/Variables";
import { useLpInfo } from "../components/music/useLpInfo";
import { LpItem } from "../components/music/LpItem";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import { SortDropdown, type SortOrder } from "../components/music/SortDropdown";

/* ================================
   Styled Components
================================ */

export const AllLpContainer = styled.div`
  background-color: ${WHITE};
  width: 350px;
  border-radius: 5px;
  margin: 20px 0;
  padding: 10px;
  color: ${BLACK};
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
    align-items: center;
  }

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 1300px;
    padding-top: 60px;
  }
`;

export const OverLpContainerText = styled.div`
  color: ${WHITE};
  padding-top: 20px;
  width: 360px;

  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    width: 600px;
  }

  @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    width: 1300px;
    padding-top: 60px;
  }
`;

/* ================================
   Component
================================ */

export const Music = () => {
  const [sortBy, setSortBy] = useState<ReleaseFilter>("all");

  const lps = useLpInfo();
  const { t } = useTranslation();
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const { i18n } = useTranslation();

  /* Scroll to top on mount */
  useEffect(() => {
    document.getElementById("top")?.scrollIntoView({ behavior: "auto" });
  }, []);

  /* ================================
     Filtering + Sorting (memoized)
  ================================= */

const filteredLps = useMemo(() => {
  const filtered =
    sortBy === "all"
      ? lps
      : lps.filter(lp => lp.release_type === sortBy);

  const sorted = [...filtered];

  switch (sortOrder) {
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.releaseDate).getTime() -
          new Date(a.releaseDate).getTime()
      );

    case "oldest":
      return sorted.sort(
        (a, b) =>
          new Date(a.releaseDate).getTime() -
          new Date(b.releaseDate).getTime()
      );

    case "nameAsc":
      return sorted.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          sensitivity: "base",
        })
      );

    case "nameDesc":
      return sorted.sort((a, b) =>
        b.name.localeCompare(a.name, undefined, {
          sensitivity: "base",
        })
      );

    default:
      return sorted;
  }
}, [lps, sortBy, sortOrder]);

  return (
    <>
      <Banner>
        <H2Banner>{t("header.titleMusic")}</H2Banner>
      </Banner>

      <BackgroundOriginal>
        <OverLpContainerText>
          {t("discography.about")}
        </OverLpContainerText>

        <AllLpContainer>
          <DropdownWrapper>
         {/*  {t("discography.filterLabel") ?? "Filter:"} */}  
            <DiscographyDropdown
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <SortDropdown
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              />
            </DropdownWrapper>

          {filteredLps.map(lp => {
            const formattedDate = new Date(lp.releaseDate).toLocaleDateString(
              i18n.language,
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            );

            return (
              <LpItem
                key={lp.slug}
                slug={lp.slug}
                src={lp.src}
                year={new Date(lp.releaseDate).getFullYear()}
                alt={lp.alt}
                name={lp.name}
                releaseDate={formattedDate}
                release_type={lp.release_type}
              />
            );
          })}
        </AllLpContainer>
      </BackgroundOriginal>
    </>
  );
};