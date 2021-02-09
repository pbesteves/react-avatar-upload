import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { Box, Button, Slider, Text } from "..";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { AvatarContext } from "../../store/context/avatar";
import { CropperProps } from "./croppet";
import { Canvas } from "./style";

const defaultCropperProps = {
  height: "113px",
  width: "113px",
};

const flexSettings = {
  direction: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "nowrap",
};

const Cropper = ({
  image,
  height,
  width,
  onClose,
}: CropperProps & typeof defaultCropperProps) => {
  const {
    state: { avatarData },
    dispatch,
  } = useContext(AvatarContext);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [step, setStep] = useState(1);
  const [avatarDataUrl, setAvatarDataUrl] = useState<string>("");

  const stepChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (step < +e.currentTarget.value) {
      setStep(+e.currentTarget.value);
    } else {
      setStep(+e.currentTarget.value);
    }
  };

  const saveAvatarHandler = () => {
    dispatch({ type: "SET_AVATAR_DATA", payload: avatarDataUrl });
  };

  useEffect(() => {
    const canvas = canvasRef && canvasRef.current;
    const context = canvas && canvas.getContext("2d");
    if (context && image && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.setTransform(
        step,
        0,
        0,
        step,
        canvas.width / 2,
        canvas.height / 2
      );
      context.drawImage(image, -image.width / 2, -image.height / 2);
      context.setTransform(
        1 / step,
        0,
        0,
        1 / step,
        canvas.width / 2,
        canvas.height / 2
      );
      setAvatarDataUrl(canvas.toDataURL());
    }
  }, [image, step]);

  return (
    <Box display="flex">
      {!avatarData ? (
        <>
          <Canvas
            ref={canvasRef}
            width={width}
            height={height}
            role="img"
            aria-label="Avatar Crop Zone"
          />
          <Box
            display="flex"
            flexSettings={flexSettings}
            marginRight="xxl"
            marginLeft="large"
          >
            <Text color="mediumGrayText" marginBottom="small">
              Crop
            </Text>
            <Slider min="1" max="4" step="0.1" resize={stepChangeHandler} />
            <Button
              onClick={saveAvatarHandler}
              primary
              alignSelf="flex-end"
              marginTop="xl"
            >
              Save
            </Button>
          </Box>
          <Button onClick={onClose} iconOnly>
            <CloseIcon role="img" aria-label="Close without saving"/>
          </Button>
        </>
      ) : (
        ""
      )}
    </Box>
  );
};

Cropper.defaultProps = defaultCropperProps;

export default Cropper;
