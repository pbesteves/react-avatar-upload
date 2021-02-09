export type CropperProps = {
  /**
   * The ```img``` element.
   */
  image?: HTMLImageElement;
  /**
   * The height of the canvas element used to crop the image.
   *
   * Defaults to ```113px```.
   */
  height?: string;
  /**
   * A function passed to the component as prop to cancel the upload and return
   * to the beginning of the process.
   */
  onClose: () => void;
  /**
   * The width of the canvas element used to crop the image.
   *
   * Defaults to ```113px```.
   */
  width?: string;
};
