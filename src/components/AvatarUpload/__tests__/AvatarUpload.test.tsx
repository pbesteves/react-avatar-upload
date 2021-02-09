import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../globalStyles";
import { AvatarProvider } from "../../../store/context/avatar";
import DefaultTheme from "../../../Themes/defaultTheme";
import AvatarUpload from "../AvatarUpload";

const Component = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <AvatarProvider>
        <AvatarUpload />
      </AvatarProvider>
    </ThemeProvider>
  );
};

describe("AvatarUpload component", () => {
  it("should render the first step", () => {
    render(<Component />);

    const organizationLogoText = screen.getByText(/organization logo/i);
    const organizationLogoIcon = screen.getByLabelText(
      /organization logo icon/i
    );
    const dropText = screen.getByText(
      /drop the image here or click to browse/i
    );

    expect(organizationLogoText).toBeInTheDocument();
    expect(organizationLogoIcon).toBeInTheDocument();
    expect(dropText).toBeInTheDocument();
  });
});
