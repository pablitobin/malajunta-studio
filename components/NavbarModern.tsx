"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavbarModern() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar-modern${scrolled ? " scrolled" : ""}`}>
      <a href="#" className="navbar-logo">
        <Image
          src="/img/malajunta/logo.jpg"
          alt="Mala Junta"
          width={40}
          height={40}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <span className="navbar-logo-text">Mala Junta</span>
      </a>

      <ul className="navbar-links">
        {[
          { label: "Work", href: "#work" },
          { label: "Nosotros", href: "#nosotros" },
          { label: "Contacto", href: "#contacto" },
        ].map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <li>
          <a
            href="https://www.instagram.com/somosmalajunta/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-ig-link"
          >
            @somosmalajunta
          </a>
        </li>
      </ul>

      <button className="navbar-burger" aria-label="Menú">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
