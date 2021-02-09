import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../globalStyles";
import DefaultTheme from "../../../Themes/defaultTheme";
import Cropper from "../Cropper";
import { CropperProps } from "../croppet";

const Component = ({ image, height, width, onClose }: CropperProps) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Cropper image={image} onClose={onClose} width={width} height={height} />
    </ThemeProvider>
  );
};

describe("Cropper component", () => {
  it("should render a canvas element", () => {
    render(<Component onClose={() => {}} />);

    const [canvas] = screen.getAllByRole("img");

    expect(canvas).toBeInTheDocument();
  });

  it("should render the Text component", () => {
    render(<Component onClose={() => {}} />);

    const textComponent = screen.getByText(/crop/i);

    expect(textComponent).toBeInTheDocument();
  });

  it("should render the Slider component", () => {
    render(<Component onClose={() => {}} />);

    const sliderComponent = screen.getByLabelText(/zoom in and out/i);

    expect(sliderComponent).toBeInTheDocument();
  });

  it("should render the Button components", () => {
    render(<Component onClose={() => {}} />);

    const closeButton = screen.getByLabelText(/close without saving/i);
    const saveButton = screen.getByText(/save/i);

    expect(closeButton).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });
});
