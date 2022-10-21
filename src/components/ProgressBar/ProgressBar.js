/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const width = 370;

const styleForSizes = {
  large: {
    "--height": "24px",
    "--padding": "4px",
    "--radius": "8px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
    "--radius": "4px",
  },
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--radius": "2px",
  },
};

const ProgressWrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: ${width}px;
  height: var(--height);
  background-color ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--radius);

`;

const InnerBar = styled.div`
  width: var(--width);
  background-color ${COLORS.primary};
  height: calc(var(--height) - var(--padding) *2);
  border-radius: 4px 0px 0px 4px;
  margin: 0px;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  // Trims off corners when you need it
  border-radius: var(--radius);
`;

const ProgressBar = ({ value, size }) => {
  const sizeBasedStyles = styleForSizes[size];
  if (!sizeBasedStyles) {
    throw new Error(`What kind of size is ${size}? What's wrong with you?!?`);
  }
  console.log(JSON.stringify(sizeBasedStyles));
  return (
    <ProgressWrapper
      style={{ ...sizeBasedStyles }}
      aria-valuenow={value}
      role="progressbar"
    >
      <BarWrapper>
        <InnerBar style={{ ...sizeBasedStyles, "--width": value + "%" }} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </ProgressWrapper>
  );
};

export default ProgressBar;
