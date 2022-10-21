import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const HiddenSelect = styled.select`
  pointer-events: auto;
  opacity: 0%;

  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;

const StyledSelect = styled.div`
  position: relative;
  cursor: pointer;
  margin: 10px 0px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 1rem;
  color: ${COLORS.gray700};
  border-radius: 8px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 56px 12px 16px;
  width: max-content;
  pointer-events: none;
  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid #4374cb;
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect>
      {displayedValue}
      <Icon
        id="chevron-down"
        size={24}
        strokeWidth={5}
        style={{
          position: "absolute",
          top: "8px",
          right: "10px",
          paddingLeft: "24px",
        }}
      />
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
    </StyledSelect>
  );
};

export default Select;
