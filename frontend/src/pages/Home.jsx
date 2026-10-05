function Home({ onNavigate }) {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            ✨ AI Powered Fashion Technology
          </span>

          <h1 className="hero-title">

            Try Clothes
            <br />

            <span>
              Before You Buy
            </span>

          </h1>

          <p className="hero-description">

            Experience the future of online fashion
            with our AI-Based Virtual Try-On System.
            Upload your image, analyze your body shape,
            try different outfits and get personalized
            recommendations.

          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() =>
                onNavigate("tryon")
              }
            >
              Start Virtual Try-On
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                onNavigate("body")
              }
            >
              Analyze My Body
            </button>

          </div>

        </div>

        <div className="hero-visual">

          <div className="avatar-placeholder">
            👗
          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features-section">

        <h2 className="section-title">
          System Features
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              📸
            </div>

            <h3>
              Body Analysis
            </h3>

            <p>
              Analyze body shape, height and
              important body measurements.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              👕
            </div>

            <h3>
              Virtual Try-On
            </h3>

            <p>
              Virtually try different garments
              before purchasing.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🤖
            </div>

            <h3>
              AI Recommendations
            </h3>

            <p>
              Get outfit suggestions based on
              your body shape.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              📏
            </div>

            <h3>
              Size Prediction
            </h3>

            <p>
              Predict suitable clothing sizes
              using body measurements.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;