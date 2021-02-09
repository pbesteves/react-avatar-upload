import styled from "styled-components";
import { ButtonProps } from "./button";

export const ButtonComponent = styled.button<ButtonProps>`
  align-self: ${({ alignSelf }) => alignSelf};

  background: ${({ primary, theme }) =>
    primary ? theme.colors.darkGray : "none"};

  border: 0;

  border-radius: ${({ primary }) => (primary ? "16px" : "none")};

  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.darkGray};

  cursor: pointer;

  font-family: ${({
    theme: {
      fonts: [inter],
    },
  }) => inter};

  font-size: ${({ primary, theme }) =>
    primary ? theme.fontSizes.small : theme.fontSizes.regular};

  font-weight: ${({ theme }) => theme.fontWeights.medium};

  height: max-content;

  justify-self: ${({ justifySelf }) => justifySelf};

  line-height: 25.25.px;

  margin: ${({ marginTop, marginRight, marginBottom, marginLeft, theme }) =>
    `${theme.spacings[marginTop || "none"]} ${
      theme.spacings[marginRight || "none"]
    } ${theme.spacings[marginBottom || "none"]} ${
      theme.spacings[marginLeft || "none"]
    }`};

  padding: ${({ primary, paddingTop, paddingRight, paddingBottom, paddingLeft, theme }) =>
    primary
      ? `${9 / 16}em ${36 / 16}em`
      : `${theme.spacings[paddingTop || "none"]} ${
          theme.spacings[paddingRight || "none"]
        } ${theme.spacings[paddingBottom || "none"]} ${
          theme.spacings[paddingLeft || "none"]
        }`};

  text-decoration: ${({ primary, iconOnly }) =>
    primary || iconOnly ? "none" : "underline"};

  width: ${({ primary }) => (primary ? "109px" : "max-content")};
`;
