"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handleClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>no image selected yet</p>}
          {pickedImage && <Image src={pickedImage} alt="selected" fill />}
        </div>
        {/* hide input */}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image here
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
