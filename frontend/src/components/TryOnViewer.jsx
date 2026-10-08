import AvatarViewer from "./AvatarViewer";

function TryOnViewer({
  selectedGarment,
}) {
  return (
    <div>
      <AvatarViewer />

      {selectedGarment && (
        <div
          style={{
            marginTop: "12px",
            padding: "12px 15px",
            background: "#faf7ff",
            borderRadius: "12px",
            border: "1px solid #eadff9",
            fontSize: "12px",
          }}
        >
          <strong>
            Selected garment:
          </strong>{" "}
          {selectedGarment}
        </div>
      )}
    </div>
  );
}

export default TryOnViewer;