export type DropZoneProps = {
  children: React.ReactNode;
  /**
   * A function that is called when a file is dragged over the DropZone component.
   * It takes an ```event``` parameter and returnos nothing.
   */
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  /**
   * A function that is called when a file enters the DropZone component.
   * It takes an ```event``` parameter and returnos nothing.
   */
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void;
  /**
   * A function that is called when a file leaves the DropZone component.
   * It takes an ```event``` parameter and returnos nothing.
   */
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
  /**
   * A function that is called when a file is dropped into the DropZone component
   * It takes an ```event``` parameter and returnos nothing.
   */
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  /**
   * Tells the component if it should display its border or not.
   *
   * Defaults to ```true```
   */
  showBorder?: boolean;
};
