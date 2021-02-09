import { Spacings } from "../../types/basicTypes";

export type ButtonProps = {
  children: React.ReactNode;
  /**
   * Tells the component if it should be displayed with a background and rounded
   * borders.
   *
   * Defaults to ```false```
   */
  primary?: boolean;
  /**
   * Tells the component if it should be displayed only as an text
   *
   * Defaults to ```false```
   */
  textOnly?: boolean;
  /**
   * Tells the component if it should be displayed only as an icon
   *
   * Defaults to ```false```
   */
  iconOnly?: boolean;
  /**
   * Tells the component if the Button should be disabled or not
   *
   * Defaults to ```false```
   */
  disabled?: boolean;
  /**
   * Used to align the element withing an flex item or grid
   *
   * Defaults to "flex-start"
   */
  justifySelf?: string;
  /**
   * Used to align the element withing an flex item or grid
   *
   * Defaults to "flex-start"
   */
  alignSelf?: string;
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
   * A function that takes no parameters and returns void
   */
  onClick?: () => void;
};
