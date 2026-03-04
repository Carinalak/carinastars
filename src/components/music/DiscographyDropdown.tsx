import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BLACK, EVENLIGHTERPURPLE, LIGHTERPURPLE, WHITE } from "../styled/Variables";
import { t } from "i18next";

/* ================================
   Types
================================ */

export type ReleaseFilter = "all" | "lp" | "ep" | "single";

interface DiscographyDropdownProps {
  sortBy: ReleaseFilter;
  setSortBy: React.Dispatch<React.SetStateAction<ReleaseFilter>>;
}

/* ================================
   Styled Components
================================ */

const CustomDropdown = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownButton = styled.div<{ $isOpen: boolean }>`
  box-sizing: border-box;
  width: 100%;
  background-color: ${WHITE};
  border: 1px solid ${LIGHTERPURPLE};
  color: ${BLACK};
  font-size: 1rem;
  padding: 6px 12px;
  border-radius: ${({ $isOpen }) => ($isOpen ? "5px 5px 0 0" : "5px")};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
  to bottom, 
    ${WHITE},
    ${EVENLIGHTERPURPLE}
  );
  width: 100%;
  color: ${BLACK};
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 0 0 5px 5px;
  border: 1px solid ${LIGHTERPURPLE};
  overflow: hidden;
  //box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

/* ================================
   Component
================================ */

export const DiscographyDropdown: React.FC<DiscographyDropdownProps> = ({
  sortBy,
  setSortBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options: { label: string; value: ReleaseFilter }[] = [
    { label: t("dropdown.all"), value: "all" },
    { label: t("dropdown.lp"), value: "lp" },
    { label: t("dropdown.ep"), value: "ep" },
    { label: t("dropdown.single"), value: "single" },
  ];

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (value: ReleaseFilter) => {
    setSortBy(value);
    setIsOpen(false);
  };

  // -----------------------
  // Close when clicking outside
  // -----------------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentLabel =
    options.find(o => o.value === sortBy)?.label ?? "Show all";

  return (
    <CustomDropdown ref={ref}>
      <DropdownButton $isOpen={isOpen} onClick={toggleDropdown}>
        {currentLabel}
        <Arrow $isOpen={isOpen}>▼</Arrow>
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {options
            .filter(option => option.value !== sortBy)
            .map(option => (
              <DropdownItem
                key={option.value}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </DropdownItem>
            ))}
        </DropdownList>
      )}
    </CustomDropdown>
  );
};