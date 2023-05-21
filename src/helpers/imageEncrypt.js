export const imageEncrypt = (image) => {
  let fileAsDataURL;
  const reader = new FileReader();
  reader.onload = (evt) => {
    fileAsDataURL = evt.target.result;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("imageAsDataURL", fileAsDataURL);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    fetch("http://localhost:5000/encryptImages", requestOptions)
      .then((res) => {
        // console.log(res.blob());
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "download";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  };
  reader.readAsDataURL(image);
};

export const imageDecrypt = (image, secret) => {
  let imageFileAsDataURL;
  let keyFileAsDataURL;

  const reader = new FileReader();
  const reader2 = new FileReader();

  reader.onload = (evt) => {
    imageFileAsDataURL = evt.target.result;

    reader2.readAsDataURL(secret);

    reader2.onload = (evt2) => {
      keyFileAsDataURL = evt2.target.result;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("imageAsDataURL", imageFileAsDataURL);
      urlencoded.append("keyAsDataURL", keyFileAsDataURL);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      console.log("sending req....");

      fetch("http://localhost:5000/decryptImages", requestOptions)
        .then((response) => response.blob())
        .then((blob) => {
          console.log("recieved response....");
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = "download";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => console.log("error", error));
    };
  };
  reader.readAsDataURL(image);
};
