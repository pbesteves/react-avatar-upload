import { ChangeEvent } from "react";

export type SliderProps = {
  /** Defines the minimum value for the slider.
   *
   * Defaults 0 */
  min: string;
  /** Defines the maximum value for the slider.
   *
   * Defaults to 4 */
  max: string;
  /** A number indicating each step in the range slider. */
  step?: string;
  /** A function that receives an event as a parameter. 
   * Used to zoom in and out the Avatar Image */
  resize: (e: ChangeEvent<HTMLInputElement>) => void;
};
