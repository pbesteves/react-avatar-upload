import { ButtonProps } from "./button";
import { ButtonComponent } from "./style";

const defaultButtonProps = {
  primary: false,
  textOnly: false,
  iconOnly: false,
  disabled: false,
  justifySelf: "flex-start",
  alignSelf: "flex-start",
};

const Button = ({
  children,
  disabled,
  primary,
  textOnly,
  iconOnly,
  justifySelf,
  alignSelf,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  onClick,
}: ButtonProps & typeof defaultButtonProps) => {
  return (
    <ButtonComponent
      disabled={disabled}
      primary={primary}
      textOnly={textOnly}
      iconOnly={iconOnly}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

Button.defaultProps = defaultButtonProps;

export default Button;
