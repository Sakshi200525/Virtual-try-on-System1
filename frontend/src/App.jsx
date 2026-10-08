import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import VirtualTryOn from "./pages/VirtualTryOn";
import BodyAnalysis from "./pages/BodyAnalysis";
import Recommendations from "./pages/Recommendations";
import SizePrediction from "./pages/SizePrediction";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "tryon":
        return <VirtualTryOn onNavigate={navigate} />;

      case "body":
        return <BodyAnalysis onNavigate={navigate} />;

      case "recommendations":
        return <Recommendations onNavigate={navigate} />;

      case "size":
        return <SizePrediction onNavigate={navigate} />;

      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        onNavigate={navigate}
      />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;