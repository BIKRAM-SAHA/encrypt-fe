import { useState, useRef } from "react";
import { encrypt } from "../helpers/encrypt";

function EncryptionForm() {
  const [formState, setFormState] = useState({
    msg: "",
    secret: "",
  });
  const encryptedTextRef = useRef();

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const encryptedText = encrypt(formState.msg, formState.secret);
    encryptedTextRef.current.value = encryptedText;
    console.log(formState);
  };

  return (
    <div className="flex w-[350px] flex-col mx-auto gap-3">
      <h1 className="text-3xl">Encryption Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="input-controller">
          <label htmlFor="msg">Message </label>
          <input
            type="text"
            name="msg"
            value={formState.msg}
            onChange={handleChange}
          />
        </div>
        <div className="input-controller">
          <label htmlFor="secret">Secret Key </label>
          <input
            type="text"
            name="secret"
            value={formState.secret}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary w-20">Submit</button>
        <div className="result">
          <textarea
            name="decrypt"
            cols="30"
            rows="10"
            readOnly
            ref={encryptedTextRef}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default EncryptionForm;
