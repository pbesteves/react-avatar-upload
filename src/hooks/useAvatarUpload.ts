import { useCallback, useContext, useEffect, useState } from "react";
import { AvatarContext } from "../store/context/avatar";

/**
 * This hook provides the logic to allow users to upload image files. The allowed
 * file types are:
 *
 * - image/jpeg
 * - image/jpg
 * - image/png
 * - image/gif
 * - image/x-icon
 *
 * The hook returns and object with the handlers needed by the <AvatarUpload />
 * component to properly work, the image element, and the error message.
 */
const useAvatarUpload = () => {
  const { dispatch } = useContext(AvatarContext);
  const [image, setImage] = useState<HTMLImageElement>(
    document.createElement("img")
  );
  const [error, setError] = useState<string>("");
  const [files, setFiles] = useState<FileList>();

  /**
   * @param file File
   * A helper used to validate that the file selected by the user is of a valid
   * type.
   *
   * If the file is invalid the function returns false, otherwise it returns true.
   * @returns false | true
   */
  const validateFile = (file: File | null) => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/x-icon",
    ];

    if (file && validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };
  /**
   * @param files FileList
   * Calls the validateFiles helper and if the file is valid it creates an image
   * element from the file and sets it to the image state. If the file is invalid
   * it sets an error message.
   * @returns void
   */
  const fileHandler = useCallback((files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = (e) => {
          const image = new Image();
          image.src = String(e.target?.result);
          image.onload = () => {
            setImage(image);
          };
        };
      } else {
        setError("Sorry, the upload failed");
      }
    }
  }, []);

  /**
   *
   * @param e React.DragEvent<HTMLDivElement>
   *
   * A handler that provides the dragover logic to the <DropZone /> component
   */
  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  /**
   *
   * @param e React.DragEvent<HTMLDivElement>
   *
   * A handler that provides the dragenter logic to the <DropZone /> component
   */
  const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  /**
   *
   * @param e React.DragEvent<HTMLDivElement>
   *
   * A handler that provides the dragleave logic to the <DropZone /> component
   */
  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  /**
   *
   * @param e React.DragEvent<HTMLDivElement>
   *
   * A handler that provides the drop logic to the <DropZone /> component
   */
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer?.files || [];
    setFiles(files);
    if (files.length) fileHandler(files);
  };

  /**
   *
   * @param e React.DragEvent<HTMLDivElement>
   *
   * A handler that provides the basic logic to the <HiddenFileInput /> component.
   * It allows the user to upload an image file by clicking in the <DropZone />
   * component.
   */
  const browseFilesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = e.currentTarget.files || undefined;
    if (e.target.files !== files) {
      dispatch({ type: "CLEAR_AVATAR_DATA", payload: "" });
      setFiles(currentFile);
      currentFile && fileHandler(currentFile);
    }
    setFiles(currentFile);
    if (currentFile?.length) fileHandler(currentFile);
  };

  /**
   * A handler used to reset the entire process. It sets the image element to newer
   * one, sets the error message to an empty string and dispatches an action to
   * empty the avatar data from the ```AvatarContext```.
   */
  const resetUploadHandler = () => {
    setImage(document.createElement("img"));
    setError("");
    dispatch({ type: "CLEAR_AVATAR_DATA", payload: "" });
  };

  useEffect(() => {
    dispatch({ type: "CLEAR_AVATAR_DATA", payload: "" });
    files && fileHandler(files);
  }, [files, dispatch, fileHandler]);

  return {
    browseFilesHandler,
    dropHandler,
    dragEnterHandler,
    dragOverHandler,
    dragLeaveHandler,
    error,
    image,
    resetUploadHandler,
  };
};

export default useAvatarUpload;
