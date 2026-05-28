import Image from "next/image";

const brands = [
  { src: "/svg/marcas/marcas-supervielle.svg", alt: "Supervielle" },
  { src: "/svg/marcas/marcas-atma.svg", alt: "Atma" },
  { src: "/svg/marcas/marcas-max.svg", alt: "Max" },
  { src: "/svg/marcas/marcas-exquisita.svg", alt: "Exquisita" },
  { src: "/svg/marcas/marcas-zonaprop.svg", alt: "Zonaprop" },
  { src: "/svg/marcas/marcas-tiendanube.svg", alt: "Tiendanube" },
  { src: "/svg/marcas/marcas-nobleza-gaucha.svg", alt: "Nobleza Gaucha" },
  {
    src: "/svg/marcas/marcas-family-wellness.svg",
    alt: "Alberta Family Wellness Initiative",
  },
  { src: "/svg/marcas/marcas-pepsico.svg", alt: "Pepsico" },
];

export default function MarcasSection() {
  return (
    <section
      id="marcas"
      className="section-padding"
      style={{ backgroundColor: "white", color: "black", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      {/* Top bg decoration */}
      <div id="bg-decoracion-marcas-1" className="bg-decoracion" style={{ position: "relative", backgroundColor: "transparent" }} />

      <div
        style={{
          position: "relative",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <h2
          id="marcas-titulo"
          className="font-thin"
          style={{ color: "black", fontWeight: 300, lineHeight: 1.1, whiteSpace: "nowrap" }}
        >
          Marcas
          <br />
          que Trabajan
          <br />
          con Nosotros
        </h2>

        {/* Brand logos grid */}
        <div className="marcas-grid">
          {brands.map((brand, i) => (
            <div key={i} className="marca-wrapper fade-in">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={160}
                height={160}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bg decoration */}
      <div id="bg-decoracion-marcas-2" className="bg-decoracion" style={{ position: "relative", backgroundColor: "transparent" }} />
    </section>
  );
}
