import { useState } from "react";

function ImageUpload({
  onImageSelect,
}) {
  const [preview, setPreview] =
    useState(null);

  const handleChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert(
        "Please select a valid image."
      );
      return;
    }

    const imageUrl =
      URL.createObjectURL(file);

    setPreview(imageUrl);

    if (onImageSelect) {
      onImageSelect(
        file,
        imageUrl
      );
    }
  };

  return (
    <label className="upload-box">
      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleChange}
      />

      {!preview ? (
        <div>
          <div className="upload-symbol">
            📸
          </div>

          <h3>
            Upload your photo
          </h3>

          <p>
            Drag & drop or click to
            browse your image
          </p>

          <span className="upload-format">
            JPG • PNG • WEBP • Max 10MB
          </span>
        </div>
      ) : (
        <div>
          <img
            src={preview}
            alt="Uploaded preview"
            className="upload-preview"
          />

          <p
            style={{
              marginTop: "12px",
              color: "#7c3aed",
              fontWeight: 700,
            }}
          >
            Click to change image
          </p>
        </div>
      )}
    </label>
  );
}

export default ImageUpload;