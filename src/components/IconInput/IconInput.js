import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.label`
  border: none;
  border-bottom: var(--borderSize) solid ${COLORS.gray700};
  max-width: var(--width);
  position: relative;
  margin: 6px 0px;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: var(--fontSize);
  line-height: 16px;
  padding-left: var(--textOffset);
  width: var(--width);
  background-color: transparent;
  outline-offset: 4px;
  border: none;
  height: ${24 / 16}rem;
  color: inherit;

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 2px;
  top: var(--iconVertOffset);
`;

const styleForSizes = {
  large: {
    "--fontSize": `${16 / 16}rem`,
    "--borderSize": "2px",
    "--textOffset": "32px",
    "--iconVertOffset": "1px",
  },
  small: {
    "--fontSize": `${14 / 16}rem`,
    "--borderSize": "1px",
    "--textOffset": "24px",
    "--iconVertOffset": "4px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizeStyling = styleForSizes[size];
  return (
    <Wrapper style={{ "--width": `${width}px`, ...sizeStyling }}>
      <IconWrapper style={{ sizeStyling }}>
        <Icon
          id={icon}
          size={size === "large" ? 20 : 16}
          style={{
            pointerEvents: "none",
          }}
        />
      </IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={{ sizeSyling: sizeStyling }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
