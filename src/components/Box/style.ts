import styled from "styled-components";
import { BoxProps } from "./box";

export const BoxComponent = styled.div<BoxProps>`
  display: ${({ display }) => display};

  flex-direction: ${({ flexSettings }) => flexSettings.direction};
  justify-content: ${({ flexSettings }) => flexSettings.justifyContent};
  align-items: ${({ flexSettings }) => flexSettings.alignItems};
  flex-wrap: ${({ flexSettings }) => flexSettings.flexWrap};

  grid-template-columns: ${({ gridSettings }) => gridSettings.columns};
  grid-template-rows: ${({ gridSettings }) => gridSettings.rows};
  column-gap: ${({ gridSettings }) => gridSettings.columnGap};
  row-gap: ${({ gridSettings }) => gridSettings.rowGap};

  margin: ${({ marginTop, marginRight, marginBottom, marginLeft, theme }) =>
    `${theme.spacings[marginTop || "none"]} ${
      theme.spacings[marginRight || "none"]
    } ${theme.spacings[marginBottom || "none"]} ${
      theme.spacings[marginLeft || "none"]
    }`};

  padding: ${({
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    theme,
  }) =>
    `${theme.spacings[paddingTop || "none"]} ${
      theme.spacings[paddingRight || "none"]
    } ${theme.spacings[paddingBottom || "none"]} ${
      theme.spacings[paddingLeft || "none"]
    }`};

  width: ${({ width }) => width};
`;
