import { TextComponent } from "./style";
import { TextProps } from "./text";

const defaultTextProps = {
  as: "p",
  color: "black",
  fontFamily: "Inter",
  fontSize: "1em",
  fontWeight: "regular",
};

const Text = ({
  as,
  children,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: TextProps & typeof defaultTextProps) => {
  return (
    <TextComponent
      as={as}
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      {children}
    </TextComponent>
  );
};

Text.defaultProps = defaultTextProps;

export default Text;
