import { useState } from "react";

import SizePredictionCard from "../components/SizePrediction";

function SizePrediction() {
  const [height, setHeight] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [result, setResult] =
    useState(false);

  const predict = () => {
    if (!height || !weight) {
      alert(
        "Please enter height and weight."
      );
      return;
    }

    setResult(true);
  };

  return (
    <div className="page">

      <div className="page-header">

        <div className="section-label">
          SMART SIZE TECHNOLOGY
        </div>

        <h1 className="section-title">
          AI Size Prediction
        </h1>

        <p>
          Find the right clothing size before
          placing your order.
        </p>

      </div>

      <div
        className="dashboard-grid"
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >

        <div className="panel">

          <div className="panel-title">
            Your Details
          </div>

          <div className="panel-subtitle">
            Enter basic measurements
          </div>

          <div
            style={{
              marginTop: "25px",
            }}
          >

            <label
              style={{
                display: "block",
                fontSize: "11px",
                fontWeight: 700,
                marginBottom: "7px",
              }}
            >
              Height (cm)
            </label>

            <input
              type="number"
              value={height}
              onChange={(event) =>
                setHeight(
                  event.target.value
                )
              }
              placeholder="e.g. 165"
              style={{
                width: "100%",
                padding: "13px",
                border:
                  "1px solid #e8e4ef",
                borderRadius: "10px",
                outline: "none",
                marginBottom: "18px",
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: "11px",
                fontWeight: 700,
                marginBottom: "7px",
              }}
            >
              Weight (kg)
            </label>

            <input
              type="number"
              value={weight}
              onChange={(event) =>
                setWeight(
                  event.target.value
                )
              }
              placeholder="e.g. 55"
              style={{
                width: "100%",
                padding: "13px",
                border:
                  "1px solid #e8e4ef",
                borderRadius: "10px",
                outline: "none",
                marginBottom: "20px",
              }}
            />

            <button
              className="primary-btn"
              style={{
                width: "100%",
              }}
              onClick={predict}
            >
              ✨ Predict My Size
            </button>

          </div>

        </div>

        <div className="panel">

          <div className="panel-title">
            AI Prediction
          </div>

          <div className="panel-subtitle">
            Recommended size for your profile
          </div>

          <div
            style={{
              marginTop: "25px",
            }}
          >

            {result ? (
              <SizePredictionCard
                size="M"
                confidence="94%"
              />
            ) : (
              <div
                style={{
                  minHeight: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#777184",
                  fontSize: "12px",
                  background: "#faf9fd",
                  borderRadius: "15px",
                }}
              >
                Enter your details to
                <br />
                generate your AI size prediction.
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default SizePrediction;