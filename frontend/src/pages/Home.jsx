function Home({ onNavigate }) {
  return (
    <>
      <section className="hero-section">

        <div className="hero-container">

          <div>

            <div className="hero-badge">
              ✨ AI-POWERED FASHION TECHNOLOGY
            </div>

            <h1 className="hero-title">

              Your Style.
              <br />

              <span className="gradient-text">
                Your Fit.
              </span>

              <br />

              Your Confidence.

            </h1>

            <p className="hero-description">
              Experience the future of online
              fashion. Upload your photo, create
              your personalized body profile,
              virtually try clothes and discover
              styles made for you.
            </p>

            <div className="hero-actions">

              <button
                className="primary-btn"
                onClick={() =>
                  onNavigate("tryon")
                }
              >
                Start Virtual Try-On →
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  onNavigate(
                    "recommendations"
                  )
                }
              >
                Explore AI Styles
              </button>

            </div>

          </div>

          <div className="hero-visual">

            <div className="floating-card one">

              <div className="floating-icon">
                🧍
              </div>

              <strong>
                AI Body Analysis
              </strong>

              <span>
                Personalized profile
              </span>

            </div>

            <div className="hero-image-card">

              <img
                src="/src/assets/hero.png"
                alt="Virtual fashion"
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />

              <div className="hero-image-overlay">

                <strong>
                  Smart Virtual Styling
                </strong>

                <span>
                  Try. Discover. Shop with confidence.
                </span>

              </div>

            </div>

            <div className="floating-card two">

              <div className="floating-icon">
                ✨
              </div>

              <strong>
                94% Style Match
              </strong>

              <span>
                AI recommendation
              </span>

            </div>

          </div>

        </div>

      </section>

      <section className="section">

        <div className="section-heading">

          <div className="section-label">
            ONE SMART PLATFORM
          </div>

          <h2 className="section-title">
            Everything you need to find
            your perfect style
          </h2>

          <p className="section-description">
            Our intelligent fashion system
            combines body analysis, virtual
            try-on, size prediction and
            personalized recommendations.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              📸
            </div>

            <h3>
              Smart Image Upload
            </h3>

            <p>
              Upload your photo and let our
              system prepare it for your
              personalized experience.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              🧍
            </div>

            <h3>
              Body Analysis
            </h3>

            <p>
              Understand your body profile,
              measurements and shape.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              👗
            </div>

            <h3>
              Virtual Try-On
            </h3>

            <p>
              Visualize how different garments
              can look on your personalized avatar.
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
              Discover outfits selected according
              to your body profile and preferences.
            </p>

          </div>

        </div>

      </section>

      <section
        className="section"
        style={{
          paddingTop: 30,
        }}
      >

        <div className="stats-grid">

          <div className="stat-card">
            <strong>AI</strong>
            <span>
              Personalized Styling
            </span>
          </div>

          <div className="stat-card">
            <strong>3D</strong>
            <span>
              Virtual Avatar
            </span>
          </div>

          <div className="stat-card">
            <strong>360°</strong>
            <span>
              Fashion Experience
            </span>
          </div>

          <div className="stat-card">
            <strong>Smart</strong>
            <span>
              Size Prediction
            </span>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;