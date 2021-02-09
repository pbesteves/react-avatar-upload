import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../globalStyles";
import DefaultTheme from "../../../Themes/defaultTheme";
import AvatarSuccess from "../AvatarSuccess";
import { AvatarSuccessProps } from "../avatarSuccess";
import dataUrl from "../mocks/AvatarSuccessMock";

const Component = ({ src, alt }: AvatarSuccessProps) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <AvatarSuccess src={src} alt={alt} />
    </ThemeProvider>
  );
};

describe("AvatarSuccess component", () => {
  it("should display an image with the given base64", () => {
    render(<Component src={dataUrl} alt="avatar" />);

    const component = screen.getByAltText(/avatar/i);

    expect(component).toHaveAttribute("src", dataUrl);
  });
});
