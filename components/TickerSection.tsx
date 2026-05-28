const items = [
  "Ideas creativas",
  "Estrategia de marca",
  "Diseño editorial",
  "Contenido que importa",
  "Rosario, Argentina",
  "Tu mamá debería preocuparse",
  "Ideas creativas",
  "Estrategia de marca",
  "Diseño editorial",
  "Contenido que importa",
  "Rosario, Argentina",
  "Tu mamá debería preocuparse",
];

export default function TickerSection() {
  return (
    <div className="ticker-section">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-sep"> · </span>
          </span>
        ))}
      </div>
    </div>
  );
}
