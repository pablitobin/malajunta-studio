import Image from "next/image";

export default function HeroSection() {
  return (
    <header
      id="header"
      className="section-padding"
      style={{ position: "relative" }}
    >
      <Image
        id="header-logo"
        src="/img/malajunta/logo.jpg"
        alt="Mala Junta Creative Studio"
        width={280}
        height={280}
        priority
        style={{ position: "relative", zIndex: 5, borderRadius: "50%" }}
      />
    </header>
  );
}
