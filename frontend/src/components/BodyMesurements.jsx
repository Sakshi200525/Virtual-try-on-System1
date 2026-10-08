function BodyMeasurements({
  measurements,
}) {
  const data =
    measurements || {
      Height: "165 cm",
      Shoulder: "38 cm",
      Chest: "86 cm",
      Waist: "70 cm",
      Hip: "92 cm",
      "Body Shape": "Hourglass",
    };

  return (
    <div className="measurement-grid">
      {Object.entries(data).map(
        ([key, value]) => (
          <div
            className="measurement-item"
            key={key}
          >
            <span>
              {key}
            </span>

            <strong>
              {value}
            </strong>
          </div>
        )
      )}
    </div>
  );
}

export default BodyMeasurements;