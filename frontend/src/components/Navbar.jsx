function Navbar({
  currentPage,
  onNavigate,
}) {
  const navItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "tryon",
      label: "Virtual Try-On",
    },
    {
      id: "body",
      label: "Body Analysis",
    },
    {
      id: "recommendations",
      label: "Recommendations",
    },
    {
      id: "size",
      label: "Size AI",
    },
  ];

  return (
    <header className="navbar">
      <div
        className="brand"
        onClick={() => onNavigate("home")}
      >
        <div className="brand-logo">
          VF
        </div>

        <div>
          <div className="brand-name">
            VirtualFit
          </div>

          <span className="brand-subtitle">
            AI FASHION EXPERIENCE
          </span>
        </div>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={
              currentPage === item.id
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              onNavigate(item.id)
            }
          >
            {item.label}
          </button>
        ))}

        <button
          className="nav-cta"
          onClick={() =>
            onNavigate("tryon")
          }
        >
          Try Now →
        </button>
      </nav>
    </header>
  );
}

export default Navbar;