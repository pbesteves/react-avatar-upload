import { DropZoneProps } from "./dropdZone";
import { DropZoneComponent } from "./style";

const DropZone = ({
  children,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
  showBorder,
}: DropZoneProps) => {
  return (
    <DropZoneComponent
      aria-label="Drop files here"
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      showBorder={showBorder}
    >
      {children}
    </DropZoneComponent>
  );
};

export default DropZone;
