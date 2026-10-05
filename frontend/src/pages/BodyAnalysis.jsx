import { useState } from "react";

function BodyAnalysis() {

  const [image, setImage] =
    useState(null);

  const [result, setResult] =
    useState(null);

  const handleImageChange = (event) => {

    const file =
      event.target.files[0];

    if (!file) {
      return;
    }

    const imageURL =
      URL.createObjectURL(file);

    setImage(imageURL);

    setResult(null);
  };

  const analyzeBody = () => {

    if (!image) {

      alert(
        "Please upload your image first."
      );

      return;
    }

    /*
      Demo result.

      Later this section will call:
      FastAPI + AI Body Analysis Model.
    */

    setResult({
      bodyShape: "Rectangle",
      height: "165 cm",
      shoulder: "40 cm",
      chest: "34 cm",
      waist: "30 cm",
      hip: "36 cm"
    });
  };

  return (

    <div className="page-container">

      <div className="page-header">

        <h1>
          Body Analysis
        </h1>

        <p>
          Upload your image to analyze
          your body shape and measurements.
        </p>

      </div>

      <div className="form-layout">

        {/* UPLOAD */}

        <div className="card">

          <h2>
            Upload Image
          </h2>

          <label className="upload-box">

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            <div className="upload-icon">
              📸
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
                alt="Uploaded"
                className="preview-image"
              />

            )}

          </label>

          <button
            className="primary-btn"
            onClick={analyzeBody}
            style={{
              width: "100%",
              marginTop: "20px"
            }}
          >
            Analyze Body
          </button>

        </div>

        {/* RESULT */}

        <div className="card">

          <h2>
            Analysis Result
          </h2>

          {!result && (

            <div className="message">

              Upload an image and click
              "Analyze Body" to see the
              result.

            </div>

          )}

          {result && (

            <div className="result-box">

              <div className="result-item">

                <span>
                  Body Shape
                </span>

                <strong>
                  {result.bodyShape}
                </strong>

              </div>

              <div className="result-item">

                <span>
                  Height
                </span>

                <strong>
                  {result.height}
                </strong>

              </div>

              <div className="result-item">

                <span>
                  Shoulder
                </span>

                <strong>
                  {result.shoulder}
                </strong>

              </div>

              <div className="result-item">

                <span>
                  Chest
                </span>

                <strong>
                  {result.chest}
                </strong>

              </div>

              <div className="result-item">

                <span>
                  Waist
                </span>

                <strong>
                  {result.waist}
                </strong>

              </div>

              <div className="result-item">

                <span>
                  Hip
                </span>

                <strong>
                  {result.hip}
                </strong>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default BodyAnalysis;