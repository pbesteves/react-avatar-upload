export type AvatarSuccessProps = {
  /**
   * A string used to display the cropped image to the user. The string is the
   * base64 information of the image and is stored in the AvatarContext.
   */
  src: string;
  /**
   * A string to be used in case the image can't be displayed
   */
  alt: string;
};
