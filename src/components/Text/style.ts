import styled from "styled-components";
import { TextProps } from "./text";

export const TextComponent = styled.span<TextProps>`
  align-items: center;
  color: ${({ color, theme }) => (color ? theme.colors[color] : "black")};
  display: flex;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize, theme }) => theme.fontSizes[fontSize || "regular"]};
  font-weight: ${({ fontWeight, theme }) =>
    theme.fontWeights[fontWeight || "regular"]};
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft, theme }) =>
    `${theme.spacings[marginTop || "none"]} ${
      theme.spacings[marginRight || "none"]
    } ${theme.spacings[marginBottom || "none"]} ${
      theme.spacings[marginLeft || "none"]
    }`};
`;
