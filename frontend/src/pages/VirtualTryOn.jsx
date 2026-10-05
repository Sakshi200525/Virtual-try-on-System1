import { useState } from "react";

const garments = [

  {
    id: 1,
    name: "Casual T-Shirt",
    icon: "👕",
    color: "White"
  },

  {
    id: 2,
    name: "Formal Shirt",
    icon: "👔",
    color: "Blue"
  },

  {
    id: 3,
    name: "Summer Dress",
    icon: "👗",
    color: "Pink"
  },

  {
    id: 4,
    name: "Denim Jeans",
    icon: "👖",
    color: "Blue"
  },

  {
    id: 5,
    name: "Traditional Kurti",
    icon: "🥻",
    color: "Red"
  },

  {
    id: 6,
    name: "Saree",
    icon: "🥻",
    color: "Green"
  }

];

function VirtualTryOn() {

  const [image, setImage] =
    useState(null);

  const [selectedGarment, setSelectedGarment] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const handleImageChange =
    (event) => {

      const file =
        event.target.files[0];

      if (!file) {
        return;
      }

      setImage(
        URL.createObjectURL(file)
      );

      setMessage("");
    };

  const selectGarment =
    (garment) => {

      setSelectedGarment(garment);

      setMessage("");
    };

  const startTryOn = () => {

    if (!image) {

      setMessage(
        "Please upload your image first."
      );

      return;
    }

    if (!selectedGarment) {

      setMessage(
        "Please select a garment."
      );

      return;
    }

    setMessage(
      `Virtual try-on started for ${selectedGarment.name}.`
    );
  };

  return (

    <div className="page-container">

      <div className="page-header">

        <h1>
          Virtual Try-On
        </h1>

        <p>
          Upload your photo and select
          an outfit to try virtually.
        </p>

      </div>

      {/* IMAGE */}

      <div className="card">

        <h2>
          1. Upload Your Image
        </h2>

        <label className="upload-box">

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <div className="upload-icon">
            📷
          </div>

          <h3>
            Choose Your Photo
          </h3>

          <p>
            JPG, PNG or WEBP
          </p>

          {image && (

            <img
              src={image}
              alt="Person"
              className="preview-image"
            />

          )}

        </label>

      </div>

      {/* GARMENTS */}

      <div
        className="card"
        style={{
          marginTop: "25px"
        }}
      >

        <h2>
          2. Select Garment
        </h2>

        <div className="garment-grid">

          {garments.map(
            (garment) => (

              <div
                key={garment.id}
                className={
                  selectedGarment?.id ===
                  garment.id
                    ? "garment-card selected"
                    : "garment-card"
                }
                onClick={() =>
                  selectGarment(
                    garment
                  )
                }
              >

                <div className="garment-icon">
                  {garment.icon}
                </div>

                <h3>
                  {garment.name}
                </h3>

                <p>
                  {garment.color}
                </p>

              </div>

            )
          )}

        </div>

        <button
          className="primary-btn"
          onClick={startTryOn}
          style={{
            marginTop: "25px"
          }}
        >
          Start Virtual Try-On
        </button>

        {message && (

          <div className="message">
            {message}
          </div>

        )}

      </div>

    </div>
  );
}

export default VirtualTryOn;