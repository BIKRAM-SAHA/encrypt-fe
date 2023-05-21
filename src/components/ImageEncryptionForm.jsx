import { useRef } from "react";
import { imageEncrypt } from "../helpers/imageEncrypt";

function ImageForm() {
  const fileRef = useRef();

  const handleSubmit = () => {
    if (fileRef.current) {
      if (fileRef.current.files[0]) {
        imageEncrypt(fileRef.current.files[0]);
        return;
      }
    }
  };

  return (
    <div className="flex w-[350px] flex-col mx-auto gap-3">
      <h1>Image Encrytion Form</h1>
      <div>
        <input id="image" ref={fileRef} type="file" accept="image/*" />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ImageForm;
