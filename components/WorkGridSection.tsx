import Image from "next/image";

const grid = [
  { src: "/img/work/mj-post-1.jpg", col: "col-8" },
  { src: "/img/work/mj-post-2.jpg", col: "col-4" },
  { src: "/img/work/mj-post-3.jpg", col: "col-3" },
  { src: "/img/work/mj-post-4.jpg", col: "col-3" },
  { src: "/img/work/mj-post-5.jpg", col: "col-6" },
  { src: "/img/work/mj-post-6.jpg", col: "col-6" },
  { src: "/img/work/mj-post-7.jpg", col: "col-6" },
  { src: "/img/work/mj-post-8.jpg", col: "col-4" },
  { src: "/img/work/mj-post-9.jpg", col: "col-4" },
  { src: "/img/work/mj-post-10.jpg", col: "col-4" },
  { src: "/img/work/mj-post-11.jpg", col: "col-8" },
  { src: "/img/work/mj-post-12.jpg", col: "col-4" },
];

export default function WorkGridSection() {
  return (
    <section id="work" className="work-section">
      <div className="section-header">
        <h2 className="section-title">Work</h2>
        <span className="section-count">12 proyectos</span>
      </div>

      <div className="work-grid">
        {grid.map((item, i) => (
          <div key={i} className={`work-item ${item.col}`}>
            <Image
              src={item.src}
              alt={`Proyecto ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
            <div className="work-item-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}
