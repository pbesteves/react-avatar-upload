import { BoxProps } from "./box";
import { BoxComponent } from "./style";

const defaultBoxProps = {
  display: "block",
  flexSettings: {
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap",
  },
  gridSettings: {
    columns: "1fr",
    columGap: "0",
    row: "1fr",
    rowGap: "0",
  },
  width: "100%",
};

const Box = ({
  children,
  display,
  flexSettings,
  gridSettings,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  width,
}: BoxProps & typeof defaultBoxProps) => {
  return (
    <BoxComponent
      display={display}
      flexSettings={flexSettings}
      gridSettings={gridSettings}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      width={width}
    >
      {children}
    </BoxComponent>
  );
};

Box.defaultProps = defaultBoxProps;

export default Box;
