import styled from "styled-components";
import { BREAKPOINT_BIGGER_DESKTOP, BREAKPOINT_DESKTOP, BREAKPOINT_TABLET, DARKPURPLE, LIGHTERPURPLE, WHITE } from "../styled/Variables";
import { NavLink, useLocation } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow_white_down.png";
import { useState } from "react";
import { MenuLinks } from "./MenuLinks";

export const NavigationContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;

`;

export const DesktopNav = styled.nav`
  display: none;
  @media screen and (min-width: ${BREAKPOINT_TABLET}) {
    display: block;
    width: 50%;
    //padding-left: 10px;
    //padding-right: 10px;
    

    @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
    align-items: flex-end;

  }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 95%;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      position: relative;
      //flex-grow: 1;
      text-align: center;
        -webkit-tap-highlight-color: transparent; // Tar bort blå markering på mobila enheter

      &:hover > ul {
        display: flex;
      }
    }

    a {
      font-family: "Esteban", serif;
      font-weight: 400;
      font-style: normal;
      font-size: 20px;
      color: ${WHITE};
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 60px; // link height
      padding: 0;
      cursor: pointer;

      @media screen and (min-width: ${BREAKPOINT_TABLET}) {
        font-size: 20px;
    }

      @media screen and (min-width: ${BREAKPOINT_DESKTOP}) {
        font-size: 20px;
      }
      
      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}) {
        font-size: 25px;
      }
    }

    a > span {
      display: block;
      line-height: 1; // lineheight for text
    }

    .icon {
      width: 10px;
      height: 10px;
      position: absolute;
      bottom: 5px;
      left: 50%; /* Centrerar pilen horisontellt */
      transform: translateX(-50%);

      @media screen and (min-width: ${BREAKPOINT_BIGGER_DESKTOP}){
        width: 25px;
        height: 25px;
        bottom: -28px;
      }
    }

    li a:hover {
      color: ${WHITE}; 
    }

    li a:active:focus {
      color: ${LIGHTERPURPLE};
    }

    li a:hover:active {
      color: ${LIGHTERPURPLE};
    }

    /* ------------------  Submenu -------------------- */

    ul.submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${LIGHTERPURPLE};
      list-style: none;
      padding: 30px 25px;
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      border-radius: 5px;
      width: auto;
      gap: 0;
      text-align: left;
      flex-direction: column;
      // justify-content: center;
      z-index: 99;
      //box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    ul.submenu li {
      display: block;
      width: 100%;
      //display: flex;
      //flex-direction: row;
      // align-items: start;
      gap: 0;
      margin: 0;
      padding: 0;
      text-align: left;
      white-space: nowrap;

    }

    ul.submenu li a {
      color: ${WHITE};
      font-weight: 600;
      font-size: 1rem;
      padding: 5;
      margin: 0;
      display: block;
      width: 100%;
      height: 30px;
      text-align: left;
    }

    ul.submenu li a:hover {
      color: ${DARKPURPLE};
    }

    ul.submenu li a:active {
      color: ${LIGHTERPURPLE};
    }
  }
`;


export const DesktopMenu = () => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const location = useLocation();

  // Toggle submenu när användaren klickar på pilikonen
  const handleArrowClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault(); // Förhindra navigation när pilen klickas
    setActiveSubMenu(activeSubMenu === index ? null : index); // Växla undermenyn
  };

  // Hantera klick på länkar och scrolla till toppen
  const handleLinkClick = () => {
    const topElement = document.getElementById("top");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "auto" });
    }
    setActiveSubMenu(null); // Stäng submenyn vid klick
  };


  const handleMainLinkClick = (index: number, path: string) => {
    if (location.pathname === path) {
      // Om vi är på samma sida, toggla undermenyn
      setActiveSubMenu(activeSubMenu === index ? null : index);
    } else {
      setActiveSubMenu(null); // Navigera bort och stäng undermenyn
    }
  };

  return (
    <DesktopNav>
      <ul>
        {MenuLinks.map((link, index) => (
          <li
            key={link.path}
            onMouseEnter={() => setActiveSubMenu(index)}
            onMouseLeave={() => setActiveSubMenu(null)}
          >
            
             {link.target === "_blank" ? (  // Markerad ändring
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"  // Markerad ändring
                onClick={() => handleLinkClick()}
              >
                <span>{link.label}</span>
              </a>
            ) : (
              <NavLink
                to={link.path}
                onClick={() => {
                  handleMainLinkClick(index, link.path);
                  handleLinkClick();
                }}
              >
                <span>{link.label}</span>
              </NavLink>
            )}

            {link.subLinks && (
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="icon"
                onClick={(e) => handleArrowClick(e, index)}
              />
            )}

            {link.subLinks && activeSubMenu === index && (
              <ul className="submenu">
                {link.subLinks.map((subLink) => (
                  <li key={subLink.path}>
                    {/* Ändring: Kontrollera om sublänken ska öppnas i en ny flik */}
                    {subLink.target === "_blank" ? (  // Markerad ändring
                      <a
                        href={subLink.path}
                        target="_blank"
                        rel="noopener noreferrer"  // Markerad ändring
                        onClick={() => setActiveSubMenu(null)}
                      >
                        {subLink.label}
                      </a>
                    ) : (
                      <NavLink
                        to={subLink.path}
                        onClick={() => {
                          setActiveSubMenu(null);
                          handleLinkClick();
                        }}
                      >
                        {subLink.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </DesktopNav>
  );
};