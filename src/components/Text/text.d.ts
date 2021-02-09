export type TextProps = {
  /**
   * Tells the component which HTML Element should be used to render the component.
   *
   * Defaults to the Paragraph tag
   * */
  as?: React.ElementType;
  children: React.ReactNode;
  /**
   * Defines what color the text should be.
   *
   * Defaults to the color "black"
   */
  color?:
    | "white"
    | "mediumGrayText"
    | "mediumGray"
    | "dropZoneBorderGray"
    | "darkGray"
    | "mediumGrayText"
    | "darkGrayText"
    | "error"
    | "lightBlue"
    | "mediumBlue";
  /**
   * Defines the font-size of the text.
   *
   * Defaults to "regular"
   */
  fontSize?: "small" | "regular";
  /**
   * Defines the font-family of the text.
   *
   * Defaults to "Inter"
   */
  fontFamily?: string;
  /**
   * Defines the font-weight of the text.
   *
   * Defaults to "regular"
   */
  fontWeight?: "regular" | "medium";
  /**
   * Defines the top margin of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```margin-top: 0;```.
   */
  marginTop?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
  /**
   * Defines the right margin of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```margin-right: 0;```.
   */
  marginRight?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
  /**
   * Defines the bottomn margin of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```margin-bottom: 0;```.
   */
  marginBottom?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
  /**
   * Defines the left margin of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```margin-left: 0;```.
   */
  marginLeft?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
};
