"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  return (
    <div id="navbar-container">
      <nav className={isOpen ? "open" : ""}>
        {/* Burger */}
        <div
          id="nav-burger"
          className={isOpen ? "open" : ""}
          onClick={toggle}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Nav content (hidden until open) */}
        <div
          id="navbar-content"
          className="navbar-collapse position-relative"
          style={{ display: "flex" }}
        >
          {/* Language */}
          <ul className="lang-wrapper">
            <li>
              <a href="" className="lang-link selected">
                Español
              </a>
            </li>
            <li>
              <a href="../en/index.html" className="lang-link">
                English
              </a>
            </li>
          </ul>

          {/* Nav links */}
          <ul
            id="navbar-ul"
            style={{ alignItems: "center", paddingLeft: "5rem" }}
          >
            {[
              { label: "Work", href: "#work" },
              { label: "Cómo Somos", href: "#como-somos" },
              { label: "Nosotros", href: "#quien" },
              { label: "Contacto", href: "#contacto" },
            ].map(({ label, href }) => (
              <li key={href} className="nav-li" style={{ listStyle: "none" }}>
                <a
                  className="nav-link"
                  href={href}
                  onClick={close}
                  style={{ color: "white" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Logo (mobile) */}
          <div id="nav-logo-mobile">
            <a href="#web-wrapper">
              <Image
                className="nav-logo"
                src="/img/malajunta/logo.jpg"
                alt="Mala Junta Creative Studio"
                width={132}
                height={132}
                style={{ borderRadius: "50%" }}
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
