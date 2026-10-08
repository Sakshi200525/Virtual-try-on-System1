function RecommendationCard({
  title,
  description,
  icon,
  score,
}) {
  return (
    <div className="recommendation-card">

      <div className="recommendation-image">
        {icon}
      </div>

      <div className="recommendation-content">

        <h3>
          {title}
        </h3>

        <p>
          {description}
        </p>

        <span className="match-score">
          ✨ {score}% MATCH
        </span>

      </div>

    </div>
  );
}

export default RecommendationCard;