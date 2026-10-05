import { useState } from "react";

function SizePrediction() {

  const [chest, setChest] =
    useState("");

  const [waist, setWaist] =
    useState("");

  const [hip, setHip] =
    useState("");

  const [size, setSize] =
    useState("");

  const predictSize = () => {

    const chestValue =
      Number(chest);

    const waistValue =
      Number(waist);

    const hipValue =
      Number(hip);

    if (
      !chestValue ||
      !waistValue ||
      !hipValue
    ) {

      alert(
        "Please enter all measurements."
      );

      return;
    }

    const average =
      (
        chestValue +
        waistValue +
        hipValue
      ) / 3;

    let predictedSize;

    if (average < 32) {

      predictedSize = "S";

    } else if (average < 36) {

      predictedSize = "M";

    } else if (average < 40) {

      predictedSize = "L";

    } else {

      predictedSize = "XL";

    }

    setSize(predictedSize);
  };

  return (

    <div className="page-container">

      <div className="page-header">

        <h1>
          Size Prediction
        </h1>

        <p>
          Enter your measurements to
          estimate your clothing size.
        </p>

      </div>

      <div
        className="card"
        style={{
          maxWidth: "600px",
          margin: "auto"
        }}
      >

        <div className="input-group">

          <label>
            Chest / Bust (inches)
          </label>

          <input
            type="number"
            placeholder="Example: 34"
            value={chest}
            onChange={(event) =>
              setChest(
                event.target.value
              )
            }
          />

        </div>

        <div className="input-group">

          <label>
            Waist (inches)
          </label>

          <input
            type="number"
            placeholder="Example: 30"
            value={waist}
            onChange={(event) =>
              setWaist(
                event.target.value
              )
            }
          />

        </div>

        <div className="input-group">

          <label>
            Hip (inches)
          </label>

          <input
            type="number"
            placeholder="Example: 36"
            value={hip}
            onChange={(event) =>
              setHip(
                event.target.value
              )
            }
          />

        </div>

        <button
          className="primary-btn"
          onClick={predictSize}
        >
          Predict My Size
        </button>

        {size && (

          <div className="size-result">

            <h3>
              Predicted Size
            </h3>

            <div className="size-value">
              {size}
            </div>

            <p>
              This is currently a demo
              prediction. The final system
              can connect this page to your
              ML size prediction model.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default SizePrediction;