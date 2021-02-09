import { ReactComponent as ErrorIcon } from "../../assets/error.svg";
import { AvatarContainer } from "./style";

const AvatarError = () => {
  return (
    <AvatarContainer>
      <ErrorIcon role="image" aria-label="Avatar upload error" />
    </AvatarContainer>
  );
};

export default AvatarError;
