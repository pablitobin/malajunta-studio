import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-text">
        <p className="about-tag">Estudio Creativo · Desde Rosario</p>
        <h2 className="about-heading">
          IDEAS<br />
          QUE SE<br />
          METEN<br />
          DONDE NO<br />
          LAS INVITARON.
        </h2>
        <p className="about-body">
          Diseño, estrategia y contenido para marcas que entienden
          que la creatividad resuelve problemas de verdad. Somos
          chicos de Rosario con ideas que no se quedan quietas.
        </p>
        <a
          href="https://www.instagram.com/somosmalajunta/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          @somosmalajunta
        </a>
      </div>

      <div className="about-image">
        <Image
          src="/img/work/mj-post-1.jpg"
          alt="Mala Junta en acción"
          fill
          style={{ objectFit: "cover" }}
          sizes="50vw"
        />
      </div>
    </section>
  );
}
