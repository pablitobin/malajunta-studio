import Image from "next/image";

const teamMembers = [
  {
    id: "miembro-1",
    name: "NOMBRE\nAPELLIDO",
    role: "Director Creativo & Fundador",
    image: "/img/work/mj-post-7.jpg",
    alt: "Integrante del equipo",
    bgClass: "bg-rojo",
    frase: "El que tiene la idea loca a las 2 de la mañana y al día siguiente la convierte en algo que funciona.",
    linkedin: [{ name: "LinkedIn", url: "#" }],
    wrapperStyle: {},
  },
  {
    id: "miembro-2",
    name: "NOMBRE\nAPELLIDO",
    role: "Diseño & Producción",
    image: "/img/work/mj-post-5.jpg",
    alt: "Integrante del equipo",
    bgClass: "",
    frase: "El que hace que todo se vea bien sin que parezca que lo intentó.",
    linkedin: [{ name: "LinkedIn", url: "#" }],
    wrapperStyle: { flexDirection: "row-reverse" as const },
  },
  {
    id: "miembro-3",
    name: "NOMBRE\nAPELLIDO",
    role: "Estrategia & Cuentas",
    image: "/img/work/mj-post-6.jpg",
    alt: "Integrante del equipo",
    bgClass: "bg-rojo",
    frase: "La que se asegura de que todo pase, tenga sentido y llegue a tiempo.",
    linkedin: [{ name: "LinkedIn", url: "#" }],
    wrapperStyle: {},
  },
];

export default function QuienSection() {
  return (
    <section
      id="quien"
      className="section-padding"
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "5rem",
      }}
    >
      <h2
        className="font-thin"
        style={{ fontSize: "66px", fontWeight: 300 }}
      >
        De Quién
        <br />
        Estamos Hechos
      </h2>

      <h5
        id="quien-subtitulo"
        style={{
          fontSize: "0.8rem",
          fontWeight: 400,
          marginBottom: "3rem",
        }}
      >
        &quot;El único resultado posible de juntar buena gente y buenas ideas,
        <br />
        es una buena junta&quot;.
      </h5>

      {/* Team grid */}
      <div
        id="equipo-wrapper"
        style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
      >
        {teamMembers.map((member) => (
          <div key={member.id} className="equipo-miembro">
            <div
              id={`equipo-${member.id}-wrapper`}
              className="equipo-miembro-img-frase-wrapper"
              style={member.wrapperStyle}
            >
              {/* Photo */}
              <div
                className={`equipo-miembro-img-wrapper ${member.bgClass}`}
              >
                <Image
                  className="equipo-miembro-img"
                  src={member.image}
                  alt={member.alt}
                  width={1080}
                  height={1080}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Hover bio */}
              <div className="equipo-miembro-frase-wrapper">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                    paddingRight: "1rem",
                  }}
                >
                  <p className="equipo-miembro-frase">{member.frase}</p>
                  <ul className="equipo-miembro-linkedin-lista">
                    {member.linkedin.map((l) => (
                      <li key={l.name}>
                        <a
                          href={l.url}
                          className="equipo-miembro-linkedin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src="/svg/redes/linkedin.svg"
                            alt="LinkedIn"
                            width={16}
                            height={16}
                            className="red-img-miembro-linkedin"
                            style={{ display: "inline", marginRight: "0.4rem" }}
                          />
                          {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Border fix overlay */}
              <div className="equipo-miembro-frase-borde-fix" />
            </div>

            {/* Name & role below photo */}
            <div style={{ marginTop: "0.75rem" }}>
              <p
                className="equipo-miembro-nombre"
                style={{ whiteSpace: "pre-line", marginBottom: "0.25rem" }}
              >
                {member.name}
              </p>
              <p className="equipo-miembro-puesto">{member.role}</p>
            </div>

            {/* Size corrector */}
            <p className="equipo-size-corrector" aria-hidden="true">
              {member.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
