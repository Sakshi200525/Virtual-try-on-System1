function SizePrediction({
  size = "M",
  confidence = "94%",
}) {
  return (
    <div className="size-result">

      <div className="size-circle">

        <strong>
          {size}
        </strong>

        <span>
          Recommended
        </span>

      </div>

      <h3>
        Your recommended size
      </h3>

      <p
        style={{
          marginTop: "8px",
          color: "#777184",
          fontSize: "12px",
        }}
      >
        AI confidence:{" "}
        <strong>
          {confidence}
        </strong>
      </p>

    </div>
  );
}

export default SizePrediction;