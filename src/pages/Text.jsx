import EncryptionForm from "../components/EncryptionForm";
import DecryptionForm from "../components/DecryptionForm";

function Text() {
  return (
    <div className="flex flex-wrap gap-11">
      <EncryptionForm />
      <DecryptionForm />
    </div>
  );
}

export default Text;
