import ImageEncryptionForm from "../components/ImageEncryptionForm";
import ImageDecryptionForm from "../components/ImageDecryptionForm";

function Image() {
  return (
    <div className="flex flex-wrap gap-11">
      <ImageEncryptionForm />
      <ImageDecryptionForm />
    </div>
  );
}

export default Image;
