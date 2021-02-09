import { useContext } from "react";
import {
  AvatarError,
  AvatarSuccess,
  Box,
  Button,
  Cropper,
  DropZone,
  Text,
} from "..";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as PictureIcon } from "../../assets/picture.svg";
import useAvatarUpload from "../../hooks/useAvatarUpload";
import { AvatarContext } from "../../store/context/avatar";
import { HiddenFileInput } from "./style";

/**
 * The ```<AvatarUpload />``` component is used to allow users of the application
 * to upload their avatars. It takes no arguments and return a React Element. It
 * uses the ```useAvatarUpload``` hook to allow users to drag and drop a file, or
 * click on the area to upload an image.
 *
 * Once the image is cropped and saved, its raw data is sent to the ```AvatarContext```.
 * Therefore, any element that is child of the ```<AvatarProvider />``` can access
 * the raw data.
 */
const AvatarUpload = () => {
  const {
    browseFilesHandler,
    dropHandler,
    dragEnterHandler,
    dragLeaveHandler,
    dragOverHandler,
    image,
    error,
    resetUploadHandler,
  } = useAvatarUpload();
  const {
    state: { avatarData },
  } = useContext(AvatarContext);

  const isInitialState = error.length === 0 && image.src.length === 0;

  return (
    <Box>
      <DropZone
        onDragOver={dragOverHandler}
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
        showBorder={isInitialState || avatarData.length !== 0}
      >
        {isInitialState && (
          <HiddenFileInput
            type="file"
            name="avatar"
            onChange={browseFilesHandler}
            aria-label="Avatar input"
            aria-hidden="true"
          />
        )}
        {isInitialState && (
          <>
            <Box
              display="flex"
              flexSettings={{
                alignItems: "center",
                justifyContent: "center",
              }}
              marginBottom="xs"
              HiddenFileInput
            >
              <PictureIcon role="img" aria-label="Organization Logo Icon" />
              <Text
                as="p"
                fontSize="small"
                fontWeight="medium"
                marginLeft="small"
              >
                Organization Logo
              </Text>
            </Box>
            <Text as="p" fontSize="small" color="mediumGrayText">
              Drop the image here or click to browse
            </Text>
          </>
        )}
        {!isInitialState && avatarData.length !== 0 && (
          <>
            <Box display="flex" flexSettings={{ alignItems: "center" }}>
              <Box width="max-content">
                <AvatarSuccess src={avatarData} alt="Avatar" />
              </Box>
              <Box
                display="flex"
                flexSettings={{
                  direction: "column",
                  alignItems: "center",
                }}
              >
                <Box display="flex" width="max-content" marginBottom="xs">
                  <PictureIcon />
                  <Text
                    as="p"
                    fontSize="small"
                    fontWeight="medium"
                    marginLeft="small"
                  >
                    Organization Logo
                  </Text>
                </Box>
                <Text as="p" fontSize="small" color="mediumGrayText">
                  Drop the image here or click to browse
                  <HiddenFileInput
                    type="file"
                    name="avatar"
                    onChange={browseFilesHandler}
                    aria-label="Avatar input"
                    aria-hidden="true"
                  />
                </Text>
              </Box>
            </Box>
          </>
        )}
        {error.length > 0 && (
          <Box display="flex">
            <AvatarError />
            <Box marginTop="medium" marginRight="xxl" marginLeft="large">
              <Text color="error" marginBottom="xs">
                {error}
              </Text>
              <Button onClick={resetUploadHandler} textOnly>
                Try again
              </Button>
            </Box>
            <Button onClick={resetUploadHandler} iconOnly>
              <CloseIcon />
            </Button>
          </Box>
        )}
        {image.src.length > 0 && (
          <Cropper image={image} onClose={resetUploadHandler} />
        )}
      </DropZone>
    </Box>
  );
};

export default AvatarUpload;
