import { useState, useRef } from "react";
import { decrypt } from "../helpers/encrypt";

function EncryptionForm() {
  const [formState, setFormState] = useState({
    encryptedMsg: "",
    secret: "",
  });
  const decryptedTextRef = useRef();

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const decryptedText = decrypt(formState.encryptedMsg, formState.secret);
    decryptedTextRef.current.value = decryptedText;
    console.log(formState);
  };

  return (
    <div className="flex w-[350px] flex-col mx-auto gap-3">
      <h1 className="text-3xl">Decryption Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="input-controller">
          <label htmlFor="encryptedMsg">Encrypted Message: </label>
          <input
            type="text"
            name="encryptedMsg"
            value={formState.encryptedMsg}
            onChange={handleChange}
          />
        </div>
        <div className="input-controller">
          <label htmlFor="secret">Secret Key: </label>
          <input
            type="text"
            name="secret"
            value={formState.secret}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-secondary w-20">Submit</button>
        <div className="result">
          <textarea
            name="decrypt"
            cols="30"
            rows="10"
            readOnly
            ref={decryptedTextRef}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default EncryptionForm;
