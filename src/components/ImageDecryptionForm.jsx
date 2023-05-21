import { useRef } from "react";
import { imageDecrypt } from "../helpers/imageEncrypt";

function ImageForm() {
  const imageFileRef = useRef();
  const keyFileRef = useRef();

  const handleSubmit = () => {
    if (imageFileRef.current && keyFileRef.current) {
      if (imageFileRef.current.files[0] && keyFileRef.current.files[0]) {
        imageDecrypt(
          imageFileRef.current.files[0],
          keyFileRef.current.files[0]
        );
        return;
      }
    }
  };

  return (
    <div className="flex w-[350px] flex-col mx-auto gap-3">
      <h1>Image Decryption Form</h1>
      <div className="flex gap-5">
        <label htmlFor="image">Image:</label>
        <input id="image" ref={imageFileRef} type="file" accept="image/*" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="secret">key:</label>
        <input id="secret" ref={keyFileRef} type="file" accept="text/*" />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ImageForm;
