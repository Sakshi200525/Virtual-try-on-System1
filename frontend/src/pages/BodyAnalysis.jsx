import { useState } from "react";

import ImageUpload from "../components/ImageUpload";
import AvatarViewer from "../components/AvatarViewer";
import BodyMeasurements from "../components/BodyMesurements";

function BodyAnalysis({ onNavigate }) {
  const [image, setImage] =
    useState(null);

  const [analyzed, setAnalyzed] =
    useState(false);

  const measurements = {
    Height: "165 cm",
    Shoulder: "38 cm",
    Chest: "86 cm",
    Waist: "70 cm",
    Hip: "92 cm",
    "Body Shape": "Hourglass",
  };

  const analyze = () => {
    if (!image) {
      alert(
        "Please upload your image first."
      );
      return;
    }

    setAnalyzed(true);
  };

  return (
    <div className="page">

      <div className="page-header">

        <div className="section-label">
          AI BODY INTELLIGENCE
        </div>

        <h1 className="section-title">
          Body Analysis
        </h1>

        <p>
          Build your personalized fashion
          profile using AI-powered body analysis.
        </p>

      </div>

      <div className="dashboard-grid">

        <div>

          <div className="panel">

            <div className="panel-header">

              <div>
                <div className="panel-title">
                  Upload Photo
                </div>

                <div className="panel-subtitle">
                  Use a clear full-body image
                </div>
              </div>

              <span>
                🧍
              </span>

            </div>

            <ImageUpload
              onImageSelect={(file, preview) =>
                setImage({
                  file,
                  preview,
                })
              }
            />

            <button
              className="primary-btn"
              style={{
                width: "100%",
                marginTop: "15px",
              }}
              onClick={analyze}
            >
              🔍 Analyze My Body
            </button>

          </div>

          {analyzed && (
            <div className="panel">

              <div className="panel-title">
                Your Measurements
              </div>

              <div
                className="panel-subtitle"
                style={{
                  marginBottom: "18px",
                }}
              >
                AI estimated measurements
              </div>

              <BodyMeasurements
                measurements={measurements}
              />

            </div>
          )}

        </div>

        <div className="panel">

          <div className="panel-header">

            <div>
              <div className="panel-title">
                Personalized Avatar
              </div>

              <div className="panel-subtitle">
                Your digital fashion profile
              </div>
            </div>

            <span>
              ✨
            </span>

          </div>

          <AvatarViewer />

          {analyzed && (
            <div
              style={{
                marginTop: "15px",
                padding: "15px",
                background: "#ecfdf5",
                borderRadius: "12px",
                color: "#047857",
                fontSize: "12px",
              }}
            >
              ✓ Body analysis completed.
              Your profile is ready for
              personalized recommendations.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default BodyAnalysis;