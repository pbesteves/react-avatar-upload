import { ChangeEvent, useState } from "react";
import { SliderProps } from "./slider";
import { SliderComponent } from "./style";

const defaultSliderProps = {
  min: "0",
  max: "1",
  step: "1",
};

const Slider = ({
  min,
  max,
  resize,
  step,
}: SliderProps & typeof defaultSliderProps) => {
  const [value, setValue] = useState<number>(0);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    resize(e);
    setValue(+e.currentTarget.value);
  };

  return (
    <SliderComponent
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChangeHandler}
      aria-label="Zoom in and out"
    />
  );
};

Slider.defaultProps = defaultSliderProps;

export default Slider;
