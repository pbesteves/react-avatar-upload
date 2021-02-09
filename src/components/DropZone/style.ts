import styled from "styled-components";
import { DropZoneProps } from "./dropdZone";

export const DropZoneComponent = styled.div<DropZoneProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  width: 553px;
  height: 177px;
  border: ${({ theme, showBorder }) =>
    showBorder && `2px dashed ${theme.colors.dropZoneBorderGray}`};
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  padding-left: 2em;
  padding-right: ${29 / 16}em;
`;
