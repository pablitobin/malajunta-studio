import Image from "next/image";

export default function ContactoSection() {
  return (
    <section
      id="contacto"
      style={{ margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
    >
      <div className="section-padding" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem" }}>
        <h2
          className="font-thin"
          style={{ fontSize: "66px", fontWeight: 300, alignSelf: "flex-start" }}
        >
          Hablemos
        </h2>

        {/* Primary contact link */}
        <ul
          id="redes-lista-primaria"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1.5rem",
            padding: "2rem",
            marginTop: "2rem",
          }}
        >
          <li>
            <a
              href="https://www.instagram.com/somosmalajunta/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
                alignItems: "center",
                color: "white",
              }}
            >
              <Image
                src="/svg/redes/instagram.svg"
                alt="Instagram"
                width={38}
                height={38}
                className="red-img red-img-primaria"
              />
              <span>@somosmalajunta</span>
            </a>
          </li>
        </ul>

        {/* Social links */}
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "1.5rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>
            <a
              href="https://www.instagram.com/somosmalajunta/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem" }}
            >
              <Image
                src="/svg/redes/instagram.svg"
                alt="Instagram"
                width={30}
                height={30}
                className="red-img red-img-secundaria"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
