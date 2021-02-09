import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../globalStyles";
import DefaultTheme from "../../../Themes/defaultTheme";
import Button from "../Button";
import { ButtonProps } from "../button";

const Component = ({
  children,
  disabled,
  primary,
  textOnly,
  iconOnly,
  justifySelf,
  alignSelf,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  onClick,
}: ButtonProps) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Button
        disabled={disabled}
        primary={primary}
        textOnly={textOnly}
        iconOnly={iconOnly}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        onClick={onClick}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};

describe("Button component", () => {
  it("should call the onClick function", () => {
    const onClickMock = jest.fn();
    render(<Component onClick={onClickMock}>Button</Component>);

    const button = screen.getByText(/button/i);

    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    render(<Component disabled>Button</Component>);

    const button = screen.getByText(/button/i);

    expect(button).toBeDisabled();
  });
});
