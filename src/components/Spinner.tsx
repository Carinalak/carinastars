import styled, { keyframes } from "styled-components";


const dotsAnimation = keyframes`
  0%, 20% {
    content: "";
  }
  40% {
    content: ".";
  }
  60% {
    content: "..";
  }
  80%, 100% {
    content: "...";
  }
`;

const Dots = styled.span`
  &:after {
    content: "";
    animation: ${dotsAnimation} 1.2s infinite;
  }
`;
const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(213, 190, 205, 0.179);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const TextWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #765059;
  display: flex;
  align-items: center;
  padding-top: 200px;
  width: 100px;
`;

const Skickar = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px; // Avstånd mellan de två tassarna
`;




export const PawSpinner = () => {
  return (
    <OverlayBackground>
    <SpinnerWrapper>

    </SpinnerWrapper>
    <TextWrapper>
      <Skickar>Skickar <Dots /></Skickar>
      </TextWrapper>
    </OverlayBackground>
  );
};
