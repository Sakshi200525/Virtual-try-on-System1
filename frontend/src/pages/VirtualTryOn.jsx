import { useState } from "react";

import ImageUpload from "../components/ImageUpload";
import TryOnViewer from "../components/TryOnViewer";

const garments = [
  {
    name: "T-Shirt",
    icon: "👕",
    type: "Casual",
  },
  {
    name: "Shirt",
    icon: "👔",
    type: "Formal",
  },
  {
    name: "Dress",
    icon: "👗",
    type: "Party",
  },
  {
    name: "Jeans",
    icon: "👖",
    type: "Casual",
  },
  {
    name: "Kurti",
    icon: "🥻",
    type: "Ethnic",
  },
  {
    name: "Saree",
    icon: "🥻",
    type: "Traditional",
  },
];

function VirtualTryOn({ onNavigate }) {
  const [uploadedImage, setUploadedImage] =
    useState(null);

  const [selectedGarment, setSelectedGarment] =
    useState("T-Shirt");

  const [selectedColor, setSelectedColor] =
    useState("Default");

  const [showResult, setShowResult] =
    useState(false);

  const handleImage = (
    file,
    preview
  ) => {
    setUploadedImage({
      file,
      preview,
    });

    setShowResult(false);
  };

  const startTryOn = () => {
    if (!uploadedImage) {
      alert(
        "Please upload your photo first."
      );
      return;
    }

    setShowResult(true);
  };

  return (
    <div className="page">

      <div className="page-header">

        <div className="section-label">
          AI VIRTUAL FITTING ROOM
        </div>

        <h1 className="section-title">
          Virtual Try-On
        </h1>

        <p>
          Upload your image, select a garment
          and preview your personalized style.
        </p>

      </div>

      <div className="dashboard-grid">

        <div>

          <div className="panel">

            <div className="panel-header">

              <div>
                <div className="panel-title">
                  01. Your Photo
                </div>

                <div className="panel-subtitle">
                  Upload a clear full-body photo
                </div>
              </div>

              <span>
                📸
              </span>

            </div>

            <ImageUpload
              onImageSelect={handleImage}
            />

          </div>

          <div className="panel">

            <div className="panel-header">

              <div>
                <div className="panel-title">
                  02. Select Garment
                </div>

                <div className="panel-subtitle">
                  Choose what you want to try
                </div>
              </div>

              <span>
                👗
              </span>

            </div>

            <div className="garment-grid">

              {garments.map(
                (garment) => (
                  <div
                    key={garment.name}
                    className={
                      selectedGarment ===
                      garment.name
                        ? "garment-option selected"
                        : "garment-option"
                    }
                    onClick={() =>
                      setSelectedGarment(
                        garment.name
                      )
                    }
                  >

                    <div className="garment-emoji">
                      {garment.icon}
                    </div>

                    <strong>
                      {garment.name}
                    </strong>

                    <span>
                      {garment.type}
                    </span>

                  </div>
                )
              )}

            </div>

          </div>

          <div className="panel">

            <div className="panel-title">
              03. Select Color
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: "15px",
              }}
            >

              {[
                "Default",
                "Black",
                "White",
                "Red",
                "Blue",
                "Pink",
              ].map((color) => (
                <button
                  key={color}
                  className={
                    selectedColor === color
                      ? "primary-btn"
                      : "secondary-btn"
                  }
                  style={{
                    padding:
                      "8px 12px",
                    fontSize: "11px",
                  }}
                  onClick={() =>
                    setSelectedColor(color)
                  }
                >
                  {color}
                </button>
              ))}

            </div>

          </div>

          <button
            className="primary-btn"
            style={{
              width: "100%",
              padding: "16px",
            }}
            onClick={startTryOn}
          >
            ✨ Generate Virtual Try-On
          </button>

          {showResult && (
            <div
              className="panel"
              style={{
                marginTop: "18px",
                background:
                  "linear-gradient(135deg,#f5f3ff,#fff)",
              }}
            >
              <strong>
                ✓ Virtual Try-On Ready
              </strong>

              <p
                style={{
                  color: "#777184",
                  fontSize: "11px",
                  marginTop: "6px",
                }}
              >
                {selectedGarment} •{" "}
                {selectedColor} • AI preview
                generated successfully.
              </p>
            </div>
          )}

        </div>

        <div className="panel">

          <div className="panel-header">

            <div>
              <div className="panel-title">
                Your Virtual Fitting Room
              </div>

              <div className="panel-subtitle">
                Interactive AI preview
              </div>
            </div>

            <span>
              ✨
            </span>

          </div>

          <TryOnViewer
            selectedGarment={
              selectedGarment
            }
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",
              gap: "8px",
              marginTop: "12px",
            }}
          >

            <div
              className="measurement-item"
              style={{
                textAlign: "center",
              }}
            >
              <span>
                Garment
              </span>

              <strong>
                {selectedGarment}
              </strong>
            </div>

            <div
              className="measurement-item"
              style={{
                textAlign: "center",
              }}
            >
              <span>
                Color
              </span>

              <strong>
                {selectedColor}
              </strong>
            </div>

            <div
              className="measurement-item"
              style={{
                textAlign: "center",
              }}
            >
              <span>
                Fit
              </span>

              <strong
                style={{
                  color:
                    "#059669",
                }}
              >
                Good
              </strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default VirtualTryOn;