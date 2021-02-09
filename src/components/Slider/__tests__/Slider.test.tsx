import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../globalStyles";
import DefaultTheme from "../../../Themes/defaultTheme";
import Slider from "../Slider";
import { SliderProps } from "../slider";

const Component = ({ min, max, step, resize }: SliderProps) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Slider min={min} max={max} step={step} resize={resize} />
    </ThemeProvider>
  );
};

describe("Range Slider component", () => {
  it("should call the onChange function", () => {
    const reiszeMock = jest.fn();
    render(<Component resize={reiszeMock} min="1" max="3" step="0.1" />);

    const component = screen.getByLabelText(/zoom in and out/i);

    fireEvent.change(component);

    expect(reiszeMock).toHaveBeenCalled();
  });

  it("should update the input value", () => {
    const reiszeMock = jest.fn();
    render(<Component resize={reiszeMock} min="1" max="3" step="0.1" />);

    const component = screen.getByLabelText(/zoom in and out/i);

    fireEvent.change(component, { target: { value: "2" } });

    expect(component).toHaveValue("2");
  });

  it("should have the min prop set to 2, max to 5, and step to 1", () => {
    const reiszeMock = jest.fn();
    render(<Component resize={reiszeMock} min="2" max="5" step="1" />);

    const component = screen.getByLabelText(/zoom in and out/i);

    expect(component).toHaveAttribute("min", "2");
    expect(component).toHaveAttribute("max", "5");
    expect(component).toHaveAttribute("step", "1");
  });
});
