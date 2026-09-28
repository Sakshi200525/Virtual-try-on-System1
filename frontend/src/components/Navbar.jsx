function Navbar ({
    currentPage,
    onNavigate
}) {
    return (
        <header className="navbar">
            <div className="logo-area"
            onClick ={() =>
                onNavigate("home")
            } >

                <div className="logo-icon">VF</div>

                <div>
                    <h2>VirtualFit</h2>
                    <span>AI Virtual Try-On</span>
                </div>
            </div>

            <nav className="nav-links">
                <button
                  className={
                    currentPage === "home"
                    ? "nav-btn action"
                    : "nav-btn"
                  }
                  onClick={() =>
                    onNavigate("tryon")
                  } >
                    Virtual Try-On
                  </button>

                  <button 
                   className= {
                    currentPage === "recommendation"
                    ? "nav-btn-active"
                    : "nav-btn"
                   }
                   onClick={() =>
                    onNavigate("recommendation")
                   } >
                    Recommendations
                   </button>

                    <button
                        className={
                        currentPage === "about"
                          ? "nav-btn active"
                          : "nav-btn"
                        }
                        onClick={() =>
                        onNavigate("about")
                    }
        >
          About
        </button>
            </nav>

        </header>
    )
}