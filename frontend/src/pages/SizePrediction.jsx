import { useState } from "react";

const recommendationData = {

  Hourglass: [
    "Fitted tops",
    "Wrap dresses",
    "High-waist jeans",
    "Belted outfits"
  ],

  Rectangle: [
    "Layered outfits",
    "Peplum tops",
    "High-waist trousers",
    "Structured jackets"
  ],

  Pear: [
    "A-line dresses",
    "Boat-neck tops",
    "Wide-leg pants",
    "Bright upper wear"
  ],

  "Inverted Triangle": [
    "A-line skirts",
    "Wide-leg trousers",
    "V-neck tops",
    "Flared dresses"
  ]

};

function Recommendations() {

  const [bodyShape, setBodyShape] =
    useState("Rectangle");

  const recommendations =
    recommendationData[bodyShape];

  return (

    <div className="page-container">

      <div className="page-header">

        <h1>
          AI Outfit Recommendations
        </h1>

        <p>
          Get outfit recommendations
          based on your body shape.
        </p>

      </div>

      <div className="card">

        <div className="input-group">

          <label>
            Select Body Shape
          </label>

          <select
            value={bodyShape}
            onChange={(event) =>
              setBodyShape(
                event.target.value
              )
            }
          >

            <option value="Rectangle">
              Rectangle
            </option>

            <option value="Hourglass">
              Hourglass
            </option>

            <option value="Pear">
              Pear
            </option>

            <option value="Inverted Triangle">
              Inverted Triangle
            </option>

          </select>

        </div>

        <div className="recommendation-grid">

          <div className="recommendation-card">

            <h3>
              👗 Recommended Outfits
            </h3>

            <ul>

              {recommendations.map(
                (item, index) => (

                  <li key={index}>
                    {item}
                  </li>

                )
              )}

            </ul>

          </div>

          <div className="recommendation-card">

            <h3>
              🎨 Style Tips
            </h3>

            <ul>

              <li>
                Select comfortable fabrics
              </li>

              <li>
                Choose suitable colors
              </li>

              <li>
                Consider proper fitting
              </li>

              <li>
                Try different combinations
              </li>

            </ul>

          </div>

          <div className="recommendation-card">

            <h3>
              🛍️ Shopping Tips
            </h3>

            <ul>

              <li>
                Check size charts
              </li>

              <li>
                Compare brand sizes
              </li>

              <li>
                Check fabric details
              </li>

              <li>
                Check return policy
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Recommendations;