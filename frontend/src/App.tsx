import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import TryOn from "./pages/TryOn";
import Recommendation from "./pages/Recommendation";
import About from "./pages/About";

function App() {

  const [currentPage, setCurrentPage] =
    useState("home");

  const navigate = (page) => {

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const renderPage = () => {

    switch (currentPage) {

      case "tryon":
        return <TryOn />;

      case "recommendation":
        return <Recommendation />;

      case "about":
        return <About />;

      case "home":
      default:
        return (
          <Home
            onNavigate={navigate}
          />
        );
    }
  };

  return (

    <div className="app">

      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
      />

      <main>
        {renderPage()}
      </main>

      <footer className="footer">

        <div>

          <h3>
            VirtualFit
          </h3>

          <p>
            AI-Based Virtual Try-On System
          </p>

        </div>

        <div>

          <p>
            Final Year Project
          </p>

          <p>
            © 2026 VirtualFit
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;