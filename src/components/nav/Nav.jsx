import { Link } from "react-router-dom";
import "./Nav.css";
import { useRef, useState } from "react";

function Nav() {
  const [isOpened, setOpened] = useState(false);
  const logo = useRef("null");

  function openNav() {
    if (isOpened) {
      logo.current.src = '/mazahua_logo.webp';
      setOpened(false);
    } else {
        logo.current.src = '/x_logo.webp';
      setOpened(true);
    }
  }

  return (
    <>
      <nav className="navbar">
        <Link className="navCart" to="">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div onClick={openNav} className="navMenu">
          <img
            ref={logo}
            src="/mazahua_logo.webp"
            alt="Logo de Mazahua, una letra 'M' de color negro"
          />
        </div>
        <Link
          to="/inicio"
          className={`navMenuOption option-1 ${isOpened ? "opened" : ""}`}
        >
          <i className="fa-solid fa-house"></i>
          <p>Inicio</p>
        </Link>
        <Link
          to="/menu"
          className={`navMenuOption option-2 ${isOpened ? "opened" : ""}`}
        >
          <i className="fa-solid fa-list"></i>
          <p>Menú</p>
        </Link>
        <Link
          to="/historia"
          className={`navMenuOption option-3 ${isOpened ? "opened" : ""}`}
        >
          <i className="fa-solid fa-calendar"></i>
          <p>Historia</p>
        </Link>
        <Link
          to=""
          className={`navMenuOption option-4 ${isOpened ? "opened" : ""}`}
        >
          <i className="fa-solid fa-user"></i>
          <p>Usuario</p>
        </Link>
      </nav>
    </>
  );
}

export default Nav;
