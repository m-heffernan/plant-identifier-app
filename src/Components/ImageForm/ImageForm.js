import React from "react";
import "./ImageForm.css";

const ImageForm = () => {
  return (
    <div>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input type="text" className="f4 pa2 w-70 center" />
          <button className="w-30 grow f4 link ph3 pv dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
