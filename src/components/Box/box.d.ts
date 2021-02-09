export type BoxProps = {
  children?: React.ReactNode;
  /**
   * Defines the display property for the container.
   * 
   * Defaults to "block"
   */
  display?: string;
  /**
   * An object with properties to configure an element with ```display: flex;```.
   */
  flexSettings?: {
    /**
     * This property sets the direction of the flexbox container.
     *
     * Defaults to "row"
     */
    direction?: string;
    /**
     * This property defines how to align elements inside a flexbox container.
     *
     * Defaults to "flex-start"
     */
    justifyContent?: string;
    /**
     * This property defines how to align elements inside a flexbox container.
     *
     * Defaults to "flex-start"
     */
    alignItems?: string;
    /**
     * This property informs the container if it should wrap or not elements to
     * a next line.
     *
     * Defaults to "nowrap"
     */
    flexWrap?: string;
  };
  /**
   * An object with properties to configure an element with ```display: grid;```.
   */
  gridSettings?: {
    /** A string to define the columns for the grid
     *
     * Defaults to "1fr"
     */
    columns?: string;
    /**
     * Defines the gap between the columns
     *
     * Defaults to "0"
     */
    columnGap?: string;
    /** A string to define the rows for the grid
     *
     * Defaults to "1fr"
     */
    rows?: string;
    /**
     * Defines the gap between the rows
     *
     * Defaults to "0"
     */
    rowGap?: string;
  };
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
  /**
   * Defines the top padding of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```padding-top: 0;```.
   */
  paddingTop?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
  /**
   * Defines the top padding of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```padding-right: 0;```.
   */
  paddingRight?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
  /**
   * Defines the top padding of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```padding-bottom: 0;```.
   */
  paddingBottom?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
  /**
   * Defines the top padding of the element. All values are in "em"
   *
   * Defaults to "none" that is the same as ```padding-left: 0;```.
   */
  paddingLeft?: "xs" | "small" | "medium" | "large" | "xl" | "xxl";
  /**
   * Sets the width of the element.
   *
   * Defaults to 100%.
   */
  width: string;
} & defaultBoxProps;
