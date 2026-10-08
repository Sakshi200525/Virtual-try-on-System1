function GarmentViewer({
  selectedGarment,
}) {
  const garment =
    selectedGarment || "T-Shirt";

  const icons = {
    "T-Shirt": "👕",
    Shirt: "👔",
    Dress: "👗",
    Jeans: "👖",
    Kurti: "🥻",
    Saree: "🥻",
  };

  return (
    <div className="viewer">

      <div className="viewer-grid" />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "130px",
            marginBottom: "15px",
          }}
        >
          {icons[garment] || "👕"}
        </div>

        <strong
          style={{
            fontSize: "18px",
          }}
        >
          {garment}
        </strong>

        <p
          style={{
            marginTop: "6px",
            color: "#777184",
            fontSize: "11px",
          }}
        >
          Virtual garment preview
        </p>
      </div>

      <div className="viewer-tag">
        👗 GARMENT PREVIEW
      </div>

    </div>
  );
}

export default GarmentViewer;