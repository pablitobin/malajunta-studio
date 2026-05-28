import Image from "next/image";

export default function ContactoModern() {
  return (
    <>
      <section id="contacto" className="contact-modern">
        <p className="contact-tag">Contacto</p>
        <h2 className="contact-heading">
          HABLE<em>MOS.</em>
        </h2>
        <div className="contact-row">
          <span className="contact-location">Rosario, Argentina · 2025</span>
          <a
            href="https://www.instagram.com/somosmalajunta/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta"
          >
            <Image
              src="/svg/redes/instagram.svg"
              alt=""
              width={18}
              height={18}
              style={{ filter: "invert(1)" }}
            />
            @somosmalajunta
          </a>
        </div>
      </section>

      <footer className="footer-modern">
        <span className="footer-copy">
          © 2025 Mala Junta Creative Studio.
        </span>
        <a
          href="https://www.instagram.com/somosmalajunta/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-ig"
        >
          @somosmalajunta
        </a>
      </footer>
    </>
  );
}
