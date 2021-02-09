import { AvatarSuccessComponent } from "../AvatarUpload/style";
import { AvatarSuccessProps } from "./avatarSuccess";

const AvatarSuccess = ({ src, alt }: AvatarSuccessProps) => {
  return (
    <AvatarSuccessComponent
      src={src}
      alt={alt}
      aria-label="Avatar upload success"
    />
  );
};

export default AvatarSuccess;
