function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <h2>
            VirtualFit
          </h2>

          <p>
            An AI-powered virtual fashion
            experience designed to help users
            visualize outfits, understand their
            body profile and make smarter fashion
            decisions.
          </p>
        </div>

        <div className="footer-column">
          <h4>
            PRODUCT
          </h4>

          <button
            onClick={() =>
              onNavigate("tryon")
            }
          >
            Virtual Try-On
          </button>

          <button
            onClick={() =>
              onNavigate("body")
            }
          >
            Body Analysis
          </button>

          <button
            onClick={() =>
              onNavigate("size")
            }
          >
            Size Prediction
          </button>
        </div>

        <div className="footer-column">
          <h4>
            EXPLORE
          </h4>

          <button
            onClick={() =>
              onNavigate(
                "recommendations"
              )
            }
          >
            AI Recommendations
          </button>

          <button
            onClick={() =>
              onNavigate("home")
            }
          >
            Home
          </button>

          <button
            onClick={() =>
              onNavigate("tryon")
            }
          >
            Start Experience
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 VirtualFit. Final Year
          Project.
        </span>

        <span>
          AI • Fashion • Technology
        </span>
      </div>
    </footer>
  );
}

export default Footer;