import styled, { css } from "styled-components";
import { COLORS } from "../assets/colors/Colors";
import media from "styled-media-query";

const FlexTemplate = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  ${FlexTemplate}
  width: 100%;
  height: 100%;
  background: ${COLORS.white};
`;

export const MainWindow = styled.div`
  ${FlexTemplate}
  width: 60%;
  height: 90%;
  border-radius: 0.9375rem;
  background: ${COLORS.windowBackground};
  box-shadow: 0 0.9375rem 1.5625rem ${COLORS.windowBackground};
  flex-direction: column;

  ${media.lessThan("medium")`
        width: 90%;
  `}
`;

export const InfoAndButtonBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 10%;
`;

export const LoadButton = styled.button`
  ${FlexTemplate}
  width: 15%;
  height: 50%;
  background-color: transparent;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border: 1px solid ${COLORS.white};
  border-radius: 0.9375rem;
  color: ${COLORS.white};
  font-weight: 600;

  ${media.lessThan("large")`
        width: 35%;
  `}
`;

export const FilterInput = styled.input`
  ${FlexTemplate}
  width: 35%;
  height: 45%;
  background-color: transparent;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom: 1px solid ${COLORS.white};
  outline: none;
  padding-left: 1rem;
  color: ${COLORS.white};

  ::placeholder {
    color: ${COLORS.white};
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  min-height: 5%;
  background: ${COLORS.windowBackground};
  color: ${COLORS.white};
  font-weight: 500;

  ${media.lessThan("small")`
        justify-content: space-evenly;
  `}
  ${media.greaterThan("large")`
        width: 95%;
  `}
`;

export const HeaderDiv = styled.div`
  ${FlexTemplate}
  flex-direction: row;
  height: 100%;
  font-weight: 600;
  font-size: 0.8125rem;

  ${media.lessThan("medium")`
        font-size: 0.75rem;
  `}
`;

export const PersonDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 80%;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 2px solid ${COLORS.white};
  border-radius: 0.9375rem;
  background: ${COLORS.white};

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.windowBackground};
    border-radius: 0.9375rem;
    border: 1px solid ${COLORS.white};
    margin-top: 0.3125rem;
  }
`;

export const PersonDataDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${COLORS.white};
  margin-bottom: 0.9375rem;
`;

export const PersonDataDivBoxes = styled.div`
  ${FlexTemplate}
  width: 20%;
  height: 100%;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.9375rem;
  margin: 1px;

  ${media.lessThan("medium")`
        font-size: 11px;
        justify-content: flex-start;
        word-break: break-word;
  `}
  ${media.between("medium", "large")`
        word-break: break-word;
  `}
`;

export const ItemBox = styled.div`
  ${FlexTemplate};
  width: 100%;
  height: 100%;
`;

export const PersonDataAvatarContainer = styled.img`
  ${FlexTemplate};
  width: 70%;
  height: 100%;
  border-radius: 50%;
`;

export const LoadingInfo = styled.h1`
  ${FlexTemplate};
  font-size: 1.125rem;
  color: ${COLORS.windowBackground};
`;
export const ButtonName = styled.p`
  font-size: 0.9375rem;
`;

export const ErrorMessage = styled.p`
  color: ${COLORS.errorMessage};
  font-weight: 600;
  font-size: 1.125rem;
`;
