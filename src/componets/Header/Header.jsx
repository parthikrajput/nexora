import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Nexora.svg";
// import search from "../../assets/img/search.svg";
import "./header.scss";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
  ];

  const openMenu = () => {
    setMenuActive(true);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="h-wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="nexora" />
            </Link>
          </div>
          <nav className={menuActive ? "active" : ""}>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link to="#" onClick={() => scrollToSection(item.id)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="close-menu" onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 329.269 329"
              >
                <path
                  d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                  fill="#fff"
                />
              </svg>
            </div>
          </nav>
          {/* <form action="">
            <input
              type="text"
              placeholder="I’am looking for..."
              name=""
              id=""
            />
            <img src={search} alt="" />
          </form> */}
          <div className="h-btn">
            {/* <div className="serch">
              <img
                className="serch-icon"
                src={search}
                alt="Search"
                onClick={() => setIsOpen(true)}
              />
              <div className={`mobile-form ${isOpen ? "show" : ""}`}>
                <form action="">
                  <input type="text" placeholder="I’m looking for..." />
                  <img src={search} alt="Search" />
                </form>

                <div className="close" onClick={() => setIsOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 329.269 329"
                  >
                    <path
                      d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Link to="">Log in</Link> */}
            {/* <div className="btn">
              <Link to="">Download</Link>
            </div> */}
            <div className="menu-icon" onClick={openMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3.5 7.5h17a1.5 1.5 0 1 0 0-3h-17a1.5 1.5 0 1 0 0 3zM20.5 10.5h-17a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 1 0 0-3zM20.5 16.5h-17a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 1 0 0-3z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
