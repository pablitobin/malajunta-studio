export default function ComoSomosSection() {
  return (
    <section
      id="como-somos"
      className="section-padding"
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "5rem",
        marginTop: "5rem",
        position: "relative",
      }}
    >
      {/* Background decorations */}
      <div id="bg-decoracion-como-somos-1" className="bg-decoracion" />
      <div id="bg-decoracion-como-somos-2" className="bg-decoracion" />

      <h2
        className="display-5 font-thin"
        style={{ fontSize: "66px", fontWeight: 300 }}
      >
        Cómo Somos
      </h2>

      <div id="como-somos-p-wrapper" style={{ zIndex: 2 }}>
        <p style={{ margin: 0 }}>
          Somos un estudio creativo con base en Rosario, Argentina.
        </p>
        <p>
          Nos llaman Mala Junta porque hacemos ideas que se meten donde no las
          invitaron. Ideas que se quedan. Ideas que resuelven.
        </p>
        <p>
          Trabajamos para marcas que entienden que la creatividad no es
          decoración: es estrategia. Que el diseño no es adorno: es decisión.
          Que el contenido no es relleno: es intención.
        </p>
        <p>
          Y sí. Tu mamá debería preocuparse. O no. Eso ya lo decide ella.
        </p>
      </div>
    </section>
  );
}
