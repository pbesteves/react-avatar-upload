import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../globalStyles";
import DefaultTheme from "../../../Themes/defaultTheme";
import AvatarError from "../AvatarError";

const Component = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <AvatarError />
    </ThemeProvider>
  );
};

describe("AvatarError component", () => {
  it("should render with an icon", () => {
    render(<Component />);

    const component = screen.getByLabelText(/avatar upload error/i);

    expect(component).toBeInTheDocument();
  });

});
