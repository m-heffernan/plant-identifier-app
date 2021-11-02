import React, { useEffect, useState } from "react";
import "./ImageForm.css";

function ImageForm() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [plant, setPlant] = useState(null);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("source", selectedFile);

    fetch(
      "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setPlant(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log("Plant", plant);

  return (
    <div className="center">
      <div className="form pa4">
        <input
          type="file"
          name="file"
          //style={{ display: "none" }}
          onChange={changeHandler}
        />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button
            onClick={handleSubmission}
            className="w-80 grow f4 link ph3 pv dib white bg-dark-pink"
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
}

// const ImageForm = () => {
//   return (
//     <div className="center">
//       <div className="form pa4">
//         <input type="file" name="file" style={{ display: "none" }} onChange={changeHandler} />
//         <button onClick={handleSubmission} className="w-80 grow f4 link ph3 pv dib white bg-dark-pink">
//           Upload Image
//         </button>
//       </div>
//     </div>
//   );
// };

export default ImageForm;
