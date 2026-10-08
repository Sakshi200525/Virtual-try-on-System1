import { useState } from "react";

import RecommendationCard from "../components/RecommendationCard";

const recommendationData = {
  Hourglass: [
    {
      title: "Elegant Wrap Dress",
      description:
        "Highlights your natural proportions while creating an elegant silhouette.",
      icon: "👗",
      score: 96,
    },
    {
      title: "Fitted V-Neck Top",
      description:
        "A balanced fitted style designed for your body profile.",
      icon: "👚",
      score: 93,
    },
    {
      title: "High-Waist Jeans",
      description:
        "Creates a clean and flattering waistline.",
      icon: "👖",
      score: 91,
    },
  ],

  Rectangle: [
    {
      title: "Layered Jacket Look",
      description:
        "Adds structure and visual definition to the silhouette.",
      icon: "🧥",
      score: 94,
    },
    {
      title: "A-Line Dress",
      description:
        "Creates a stylish and balanced appearance.",
      icon: "👗",
      score: 90,
    },
    {
      title: "Wide-Leg Jeans",
      description:
        "Adds shape and creates a modern fashion look.",
      icon: "👖",
      score: 88,
    },
  ],

  Pear: [
    {
      title: "Structured Blazer",
      description:
        "Adds balance between the upper and lower body.",
      icon: "🧥",
      score: 95,
    },
    {
      title: "A-Line Skirt",
      description:
        "A classic silhouette for a balanced look.",
      icon: "👗",
      score: 92,
    },
    {
      title: "Bright Statement Top",
      description:
        "Draws attention upward and creates balance.",
      icon: "👚",
      score: 89,
    },
  ],
};

function Recommendations() {
  const [shape, setShape] =
    useState("Hourglass");

  const data =
    recommendationData[shape];

  return (
    <div className="page">

      <div className="page-header">

        <div className="section-label">
          PERSONALIZED AI STYLING
        </div>

        <h1 className="section-title">
          Recommendations
        </h1>

        <p>
          Discover fashion recommendations
          designed around your unique body profile.
        </p>

      </div>

      <div
        className="panel"
        style={{
          maxWidth: "600px",
          margin:
            "0 auto 35px",
        }}
      >

        <div className="panel-title">
          Your Body Shape
        </div>

        <select
          value={shape}
          onChange={(event) =>
            setShape(
              event.target.value
            )
          }
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "13px",
            border:
              "1px solid #e8e4ef",
            borderRadius: "10px",
            outline: "none",
            background: "white",
          }}
        >

          <option value="Hourglass">
            Hourglass
          </option>

          <option value="Rectangle">
            Rectangle
          </option>

          <option value="Pear">
            Pear
          </option>

        </select>

      </div>

      <div className="recommendation-grid">

        {data.map((item) => (
          <RecommendationCard
            key={item.title}
            title={item.title}
            description={
              item.description
            }
            icon={item.icon}
            score={item.score}
          />
        ))}

      </div>

    </div>
  );
}

export default Recommendations;