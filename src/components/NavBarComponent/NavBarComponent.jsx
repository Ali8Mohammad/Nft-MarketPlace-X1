import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ButtonBh from "../ButtonBh/ButtonBh";
import "./NavBarComponent.css";
import { IoClose } from "react-icons/io5";

export default function NavBarComponent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const closeButtonRef = useRef(null); // Ref for the close button

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Close sidebar when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Focus on the close button when sidebar opens
  useEffect(() => {
    if (sidebarOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [sidebarOpen]);

  return (
    <nav className="af-nav">
      <Link to="/">
        <img
          className="af-nav-img"
          src="../../../public/Images/nav/Logo.svg"
          alt="logo"
        />
      </Link>
      <div className="af-nav-body d-none d-lg-flex">
        <ul role="navigation">
          <li className="af-nav-link">
            <Link to="/market-place">Marketplace</Link>
          </li>
          <li className="af-nav-link">
            <Link to="/rankings">Rankings</Link>
          </li>
          <li className="af-nav-link">
            <Link to="/connect-wallet">Connect a wallet</Link>
          </li>
          <Link to="/create-account">
            <ButtonBh
              showIcon="true"
              buttonText="Sign Up"
              buttonClass="bh-button-one d-none d-md-flex af-nav-button"
              buttonIcon="../../../public/Images/nav/nav-button-icon.png"
            />
          </Link>
        </ul>

      </div>
      <img
        className="d-flex d-lg-none toggler"
        onClick={toggleSidebar}
        aria-label="Menu"
        aria-expanded={sidebarOpen}
        src="../../../public/Images/nav/nav menu.svg"
        alt="Menu icon"
      />
      {sidebarOpen && (
        <div className="af-offcanvas-nav">
          <IoClose
            ref={closeButtonRef} // Set focus on this ref
            onClick={toggleSidebar}
            className="side-nav-icon"
            aria-label="Close menu"
          />
          <Link to="/">
            <img
              className="af-nav-img"
              src="../../../public/Images/nav/Logo.svg"
              alt="logo"
            />
          </Link>
          <div className="af-offcanvas-nav-body">
            <ul role="navigation">
              <li className="af-nav-link">
                <Link to="/market-place">Marketplace</Link>
              </li>
              <li className="af-nav-link">
                <Link to="/ranking">Rankings</Link>
              </li>
              <li className="af-nav-link">
                <Link to="/connect-wallet">Connect a wallet</Link>
              </li>
              <Link to="/create-account">
                <ButtonBh
                  showIcon="true"
                  buttonText="Sign Up"
                  buttonClass="bh-button-one af-nav-button"
                  buttonIcon="../../../public/Images/nav/nav-button-icon.png"
                />
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}