import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BLACK, EVENLIGHTERPURPLE, LIGHTERPURPLE, WHITE } from "../styled/Variables";
import { useTranslation } from "react-i18next";

/* ================================
   Types
================================ */

export type SortOrder =
  | "newest"
  | "oldest"
  | "nameAsc"
  | "nameDesc";

interface SortDropdownProps {
  sortOrder: SortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<SortOrder>>;
}

/* ================================
   Styled Components
   (du kan kopiera exakt samma styling)
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
  color: ${BLACK};
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 0 0 5px 5px;
  border: 1px solid ${LIGHTERPURPLE};
  overflow: hidden;
`;

const DropdownItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

/* ================================
   Component
================================ */

export const SortDropdown: React.FC<SortDropdownProps> = ({
  sortOrder,
  setSortOrder,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options: { label: string; value: SortOrder }[] = [
    { label: t("dropdown.newest"), value: "newest" },
    { label: t("dropdown.oldest"), value: "oldest" },
    { label: t("dropdown.nameAsc"), value: "nameAsc" },
    { label: t("dropdown.nameDesc"), value: "nameDesc" },
  ];

  const currentLabel =
    options.find(o => o.value === sortOrder)?.label ??
    t("dropdown.newest");

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (value: SortOrder) => {
    setSortOrder(value);
    setIsOpen(false);
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <CustomDropdown ref={ref}>
      <DropdownButton $isOpen={isOpen} onClick={toggleDropdown}>
        {currentLabel}
        <Arrow $isOpen={isOpen}>▼</Arrow>
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {options
            .filter(option => option.value !== sortOrder)
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