import { useState, useEffect } from "react";

const NAV_LINKS = ["Work", "About", "Services", "Book Now"];
const GALLERY_ITEMS = [
  { id: 1, category: "Portraits", aspectRatio: "tall", bg: "#1a1a1a" },
  { id: 2, category: "Weddings", aspectRatio: "wide", bg: "#2a2a2a" },
  { id: 3, category: "Events", aspectRatio: "square", bg: "#222" },
  { id: 4, category: "Portraits", aspectRatio: "tall", bg: "#1e1e1e" },
  { id: 5, category: "Family", aspectRatio: "wide", bg: "#252525" },
  { id: 6, category: "Weddings", aspectRatio: "square", bg: "#1c1c1c" },
];
const CATEGORIES = ["All", "Portraits", "Weddings", "Events", "Family"];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif", background: "#0d0d0d", color: "#f0ebe3", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .hero-title { animation: fadeUp 1s ease 0.2s both; }
        .hero-sub   { animation: fadeUp 1s ease 0.5s both; }
        .hero-cta   { animation: fadeUp 1s ease 0.8s both; }
        .nav-link { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #a89d8f; text-decoration: none; transition: color 0.2s; cursor: pointer; }
        .nav-link:hover { color: #f0ebe3; }
        .book-btn { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; background: #f0ebe3; color: #0d0d0d; border: none; padding: 14px 36px; cursor: pointer; transition: all 0.25s; }
        .book-btn:hover { background: #d4c9ba; transform: translateY(-1px); }
        .outline-btn { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; background: transparent; color: #f0ebe3; border: 1px solid #f0ebe3; padding: 14px 36px; cursor: pointer; transition: all 0.25s; margin-left: 16px; }
        .outline-btn:hover { background: rgba(240,235,227,0.08); }
        .filter-btn { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; background: none; border: 1px solid transparent; padding: 6px 16px; cursor: pointer; transition: all 0.2s; }
        .filter-btn.active { border-color: #f0ebe3; color: #f0ebe3; }
        .filter-btn:not(.active) { color: #6b6258; border-color: #2a2a2a; }
        .gallery-item { transition: transform 0.4s ease; cursor: pointer; }
        .gallery-item:hover { transform: scale(1.02); opacity: 0.85; }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 48px", height: 64, display: "flex", alignItems: "center", background: scrolled ? "rgba(13,13,13,0.95)" : "transparent", backdropFilter: scrolled ? "blur(10px)" : "none", borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent", transition: "all 0.3s ease" }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.25em" }}>J. CRUZ</span>
          <div style={{ display: "flex", gap: 40 }}>
            {NAV_LINKS.map((link) => <span key={link} className="nav-link">{link}</span>)}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 48px", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ maxWidth: 680, paddingTop: 80 }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", color: "#6b6258", marginBottom: 24, textTransform: "uppercase" }} className="hero-sub">— San Francisco, CA</p>
          <h1 style={{ fontSize: "clamp(56px, 8vw, 112px)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 32 }} className="hero-title">
            Capturing<br /><em>moments</em><br />that last.
          </h1>
          <div style={{ height: 1, background: "#2e2a26", marginBottom: 24 }} />
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.2em", color: "#6b6258", textTransform: "uppercase", marginBottom: 48 }} className="hero-sub">Portrait · Wedding · Event Photography</p>
          <div className="hero-cta">
            <button className="book-btn">Book a Session</button>
            <button className="outline-btn">View Work</button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontSize: 36, fontWeight: 300 }}>Selected Work</h2>
          <div style={{ display: "flex", gap: 8 }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} className={`filter-btn ${activeCategory === cat ? "active" : ""}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: "200px", gap: 8 }}>
          {filtered.map((item) => (
            <div key={item.id} className="gallery-item" style={{ background: item.bg, borderRadius: 2, gridRow: item.aspectRatio === "tall" ? "span 2" : "span 1", gridColumn: item.aspectRatio === "wide" ? "span 2" : "span 1" }} />
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 48px", borderTop: "1px solid #1e1e1e" }}>
        <h2 style={{ fontSize: 36, fontWeight: 300, marginBottom: 48 }}>Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, border: "1px solid #1e1e1e" }}>
          {[
            { name: "Portraits", price: "From $250", desc: "Individual and couple sessions, 1–2 hours, 30+ edited images." },
            { name: "Weddings", price: "From $2,000", desc: "Full-day coverage, two shooters, online gallery within 3 weeks." },
            { name: "Events", price: "From $400", desc: "Corporate, social, and milestone events. 4-hour minimum." },
            { name: "Family", price: "From $350", desc: "Family sessions at a location of your choice, up to 6 people." },
          ].map((s) => (
            <div key={s.name} style={{ padding: "36px 28px", borderRight: "1px solid #1e1e1e" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 22, fontWeight: 300 }}>{s.name}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6b6258" }}>{s.price}</span>
              </div>
              <div style={{ height: 1, background: "#1e1e1e", marginBottom: 20 }} />
              <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.65, color: "#6b6258" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 48px", textAlign: "center", borderTop: "1px solid #1e1e1e", background: "#0a0a0a" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.25em", color: "#6b6258", textTransform: "uppercase", marginBottom: 20 }}>Ready?</p>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          Let's make something<br /><em>beautiful together.</em>
        </h2>
        <button className="book-btn" style={{ marginTop: 40 }}>Book Your Session</button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 48px", borderTop: "1px solid #1e1e1e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.25em" }}>J. CRUZ</span>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#3a3530", letterSpacing: "0.1em" }}>© 2025 · San Francisco, CA · All rights reserved</p>
      </footer>
    </div>
  );
}
