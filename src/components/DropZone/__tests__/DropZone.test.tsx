import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../globalStyles";
import DefaultTheme from "../../../Themes/defaultTheme";
import { DropZoneProps } from "../dropdZone";
import DropZone from "../DropZone";

const Component = ({
  children,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
}: DropZoneProps) => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <DropZone
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {children}
      </DropZone>
    </ThemeProvider>
  );
};

describe("DropZone component", () => {
  it("should call the drag and drop functions", () => {
    const onDragOverMock = jest.fn();
    const onDragEnterMock = jest.fn();
    const onDragLeaveMock = jest.fn();
    const onDropMock = jest.fn();

    render(
      <Component
        onDragOver={onDragOverMock}
        onDragEnter={onDragEnterMock}
        onDragLeave={onDragLeaveMock}
        onDrop={onDropMock}
      >
        DropZone
      </Component>
    );

    const component = screen.getByText(/dropzone/i);

    fireEvent.dragOver(component);
    fireEvent.dragEnter(component);
    fireEvent.dragLeave(component);
    fireEvent.drop(component);

    expect(onDragOverMock).toHaveBeenCalled();
    expect(onDragEnterMock).toHaveBeenCalled();
    expect(onDragLeaveMock).toHaveBeenCalled();
    expect(onDropMock).toHaveBeenCalled();
  });
});
