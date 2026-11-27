import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { slides } from "./content";
import "./presentation.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const [home, objectives, overview, sunlight, twilight, midnight, abyss, hadal, threat, quiz] = slides;
const zones = [sunlight, twilight, midnight, abyss, hadal];
const BASE = import.meta.env.BASE_URL; // mengikuti "base" di vite.config
const VOLUME = 0.25; // pelan, supaya suaramu tetap jelas

/* Judul dua baris: baris pertama putih, baris kedua cyan (gaya desain awal) */
const headings = {
  objectives: ["MISI", "PENYELAMAN"],
  overview: ["LIMA LAPISAN", "LAUT."],
  sunlight: ["ZONA", "CAHAYA MATAHARI"],
  twilight: ["ZONA", "SENJA"],
  midnight: ["ZONA", "TENGAH MALAM"],
  abyss: ["ZONA", "ABISAL"],
  hadal: ["ZONA", "HADAL"],
  threat: ["LAUT TERANCAM,", "KITA BERTINDAK"],
  quiz: ["CEK", "MISIMU."],
};
const motionOK = () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Gambar dari /public/images. Kalau belum ada, tampil lingkaran penanda. */
function Figure({ name, alt, className = "" }) {
  const [missing, setMissing] = useState(false);
  if (missing)
    return <div className={`placeholder ${className}`} role="img" aria-label={alt}><span>{name}.png</span></div>;
  return <img src={`${BASE}images/${name}.png`} alt={alt} onError={() => setMissing(true)} className={`figure ${className}`} />;
}

/* Kepala slide selalu di posisi yang sama; area isi yang berbeda-beda. */
function Slide({ data, children }) {
  const [first, second] = headings[data.id];
  return (
    <section id={data.id} className="slide">
      <div className="frame">
        <header data-reveal>
          <p className="kicker">{data.depth}{data.latin && ` / ${data.latin}`}</p>
          <h2 className="title font-display">{first}<span>{second}</span></h2>
        </header>
        <div className="body">{children}</div>
      </div>
    </section>
  );
}

/* 1. Poster terpusat */
function Hero() {
  return (
    <section id={home.id} className="slide hero">
      <div className="hero-sun" aria-hidden="true" />
      <div className="hero-rays" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-title kicker">Eksplorasi bawah laut</p>
        <h1 className="hero-title font-display">INTO THE<span>DEEP</span></h1>
        <p className="hero-title lead">{home.subtitle}</p>
      </div>
      <div className="hero-cue" aria-hidden="true">Gulir untuk menyelam<i /></div>
    </section>
  );
}

/* 2. Tangga menurun */
function Objectives() {
  return (
    <Slide data={objectives}>
      <ol className="stairs">
        {objectives.items.map((item, i) => (
          <li key={item.verb} data-reveal>
            <span className="num">0{i + 1}</span>
            <h3 className="font-display">{item.verb}</h3>
            <p className="lead soft">{item.text}</p>
          </li>
        ))}
      </ol>
    </Slide>
  );
}

/* 3. Kolom kedalaman interaktif + detail */
function Overview() {
  const [active, setActive] = useState(0);
  const zone = zones[active];
  const colors = ["#36BBD2", "#247DA5", "#2b6a9c", "#2a527f", "#27406a"];
  return (
    <Slide data={overview}>
      <div data-reveal className="overview">
        <div className="layers">
          {zones.map((z, i) => (
            <button key={z.id} onClick={() => setActive(i)} aria-pressed={i === active} style={{ "--zone": colors[i] }}>
              <small>0{i + 1}</small>
              {z.title.replace("Zona ", "")}
            </button>
          ))}
        </div>
        <div className="detail" style={{ "--zone": colors[active] }}>
          <p className="kicker">{zone.latin}</p>
          <p className="depth font-display">{zone.depth}</p>
          <hr />
          <p className="lead soft">{zone.key}</p>
        </div>
      </div>
    </Slide>
  );
}

/* 4. Rantai makanan horizontal */
function Sunlight() {
  return (
    <Slide data={sunlight}>
      <p data-reveal className="lead soft">{sunlight.key}</p>
      <ol className="chain">
        {sunlight.chain.map((name, i) => (
          <li key={name} className="chain-item">
            <Figure name={`chain-${i + 1}`} alt={name} className="orb" />
            <p className="lead">{name}</p>
          </li>
        ))}
      </ol>
    </Slide>
  );
}

/* 5. Simulasi migrasi vertikal siang/malam */
function Twilight() {
  const [night, setNight] = useState(false);
  const fish = useRef(null);
  useEffect(() => {
    gsap.to(fish.current, { top: night ? "12%" : "66%", duration: motionOK() ? 1.8 : 0, ease: "power2.inOut" });
  }, [night]);
  return (
    <Slide data={twilight}>
      <div className="split">
        <div data-reveal>
          <p className="lead soft">{twilight.key}</p>
          <p className="lead accent gap">{twilight.organism} bermigrasi vertikal</p>
          <div className="switch" role="group" aria-label="Waktu">
            <button aria-pressed={!night} onClick={() => setNight(false)}>Siang</button>
            <button aria-pressed={night} onClick={() => setNight(true)}>Malam</button>
          </div>
        </div>
        <div className={`water ${night ? "night" : ""}`}>
          <p className="kicker">{night ? "Naik mencari makan" : "Bersembunyi di bawah"}</p>
          <div ref={fish} className="swimmer">
            <Figure name="lanternfish" alt={twilight.organism} className="orb" />
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* 6. Senter: kursor/sentuhan membuka gambar */
function Midnight() {
  const box = useRef(null);
  const move = (e) => {
    const r = box.current.getBoundingClientRect();
    box.current.style.setProperty("--x", `${e.clientX - r.left}px`);
    box.current.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <Slide data={midnight}>
      <div ref={box} onPointerMove={move} onPointerDown={move} className="dark">
        <div className="spotlight">
          <Figure name="anglerfish" alt={midnight.organism} className="angler" />
        </div>
      </div>
      <div data-reveal className="pair">
        <p className="lead">{midnight.key}</p>
        <p className="lead soft">Bioluminesensi: cahaya dari makhluk hidup</p>
      </div>
    </Slide>
  );
}

/* 7. Angka besar + slider tekanan */
function Abyss() {
  const [depth, setDepth] = useState(5000);
  const atm = Math.round(1 + depth / 10);
  return (
    <Slide data={abyss}>
      <div className="split">
        <div data-reveal>
          <p className="giant font-display">{atm}</p>
          <p className="lead soft">atmosfer (perkiraan) di {depth.toLocaleString("id-ID")} m</p>
          <input type="range" min="0" max="6000" step="100" value={depth} aria-label="Kedalaman"
            style={{ "--fill": `${depth / 60}%` }} onChange={(e) => setDepth(Number(e.target.value))} />
        </div>
        <figure data-reveal className="specimen">
          <Figure name="sea-cucumber" alt={abyss.organism} className="orb big" />
          <figcaption className="lead soft">{abyss.organism} memakan “salju laut”</figcaption>
        </figure>
      </div>
    </Slide>
  );
}

/* 8. Batang kedalaman berskala */
function Hadal() {
  const bars = [
    { name: "Gunung Everest", m: 8849, color: "#8d9db0" },
    { name: "Ikan siput terekam", m: 8336, color: "#f0a8c0" },
    { name: "Challenger Deep", m: 10935, color: "#67e8f9" },
  ];
  return (
    <Slide data={hadal}>
      <p data-reveal className="lead soft">{hadal.key}</p>
      <div className="trench">
        {bars.map((b) => (
          <div key={b.name} style={{ "--c": b.color }}>
            <div className="shaft"><div className="bar" style={{ height: `${(b.m / 11000) * 100}%` }} /></div>
            <p className="depth font-display">±{b.m.toLocaleString("id-ID")} m</p>
            <p className="lead soft">{b.name}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* 9. Kolom ancaman: klik untuk membuka aksi */
function Threat() {
  const [open, setOpen] = useState([]);
  const toggle = (i) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));
  return (
    <Slide data={threat}>
      <div className="threats">
        {threat.items.map((item, i) => {
          const flipped = open.includes(i);
          return (
            <button key={item.threat} data-reveal onClick={() => toggle(i)} aria-pressed={flipped}>
              <span className="kicker">{flipped ? "Aksi kita" : "Ancaman"}</span>
              <span className="statement font-display">{flipped ? item.action : item.threat}</span>
              <span className="hint">{flipped ? "Lihat ancaman" : "Lihat aksi"}</span>
            </button>
          );
        })}
      </div>
    </Slide>
  );
}

/* 10. Kuis satu pertanyaan per layar */
function Quiz() {
  const [n, setN] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const item = quiz.questions[n];
  const choose = (i) => {
    setPicked(i);
    if (i === item.answer) setScore((s) => s + 1);
  };
  const next = () => { setN(n + 1); setPicked(null); };
  const reset = () => { setN(0); setPicked(null); setScore(0); };
  return (
    <Slide data={quiz}>
      <div aria-live="polite">
        {item ? (
          <div className="quiz">
            <div>
              <p className="kicker">Pertanyaan {n + 1} dari {quiz.questions.length}</p>
              <p className="question font-display">{item.q}</p>
              {picked !== null && <button className="btn" onClick={next}>Lanjut</button>}
            </div>
            <div className="options">
              {item.options.map((option, i) => {
                const state = picked === null ? "" : i === item.answer ? "right" : picked === i ? "wrong" : "dim";
                return (
                  <button key={option} className={state} disabled={picked !== null} onClick={() => choose(i)}>
                    <span>{option}</span>
                    <b>{state === "right" ? "✓" : state === "wrong" ? "✗" : ""}</b>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="finish">
            <p className="giant font-display">{score}/{quiz.questions.length}</p>
            <p className="question font-display">{quiz.closing}</p>
            <button className="btn" onClick={reset}>Ulangi kuis</button>
          </div>
        )}
      </div>
    </Slide>
  );
}

/* Pengukur kedalaman: penanda posisi sekaligus navigasi */
function DepthGauge({ index }) {
  return (
    <nav className={`gauge ${index === 0 ? "on-light" : ""}`} aria-label="Navigasi slide">
      <p>{index + 1}/{slides.length}</p>
      <div>
        {slides.map((s, i) => (
          <a key={s.id} href={`#${s.id}`} aria-label={s.label} aria-current={i === index} className={i <= index ? "passed" : ""} />
        ))}
      </div>
    </nav>
  );
}

/* Suara latar per section: public/sounds/<id>.mp3, berganti dengan fade */
function useSound(index, enabled) {
  useEffect(() => {
    if (!enabled) return;
    const audio = new Audio(`${BASE}sounds/${slides[index].id}.mp3`);
    audio.loop = true;
    audio.volume = 0;
    audio.play().catch(() => {}); // file belum ada atau diblokir browser: diam saja
    gsap.to(audio, { volume: VOLUME, duration: 1.2 });
    return () => {
      gsap.killTweensOf(audio);
      gsap.to(audio, { volume: 0, duration: 0.8, onComplete: () => audio.pause() });
    };
  }, [index, enabled]);
}

/* Speaker notes di halaman yang sama (tombol N, tutup dengan Esc) */
function Notes({ index, onClose }) {
  return (
    <aside className="notes" aria-label="Speaker notes">
      <div>
        <p className="kicker">Catatan {index + 1}/{slides.length} / {slides[index].label}</p>
        <button onClick={onClose}>Tutup</button>
      </div>
      <p>{slides[index].notes}</p>
    </aside>
  );
}

/* Navigasi panah / PageUp / PageDown (cocok untuk clicker) */
function useSlideControls() {
  const [index, setIndex] = useState(0);
  const [notes, setNotes] = useState(false);
  const [sound, setSound] = useState(false);
  const current = useRef(0);

  useEffect(() => {
    const triggers = slides.map((s, i) =>
      ScrollTrigger.create({
        trigger: `#${s.id}`, start: "top center", end: "bottom center",
        onToggle: (self) => {
          if (!self.isActive) return;
          current.current = i;
          setIndex(i);
        },
      }),
    );

    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.ctrlKey || e.metaKey || e.altKey) return;
      const key = e.key.toLowerCase();
      if (key === "n") setNotes((v) => !v);
      if (key === "m") setSound((v) => !v);
      if (key === "escape") setNotes(false);
      const step = ["ArrowDown", "ArrowRight", "PageDown"].includes(e.key) ? 1
        : ["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key) ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      const target = Math.min(slides.length - 1, Math.max(0, current.current + step));
      document.getElementById(slides[target].id)?.scrollIntoView({ behavior: motionOK() ? "smooth" : "auto" });
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return { index, notes, setNotes, sound, setSound };
}

function Presentation() {
  const root = useRef(null);
  const { index, notes, setNotes, sound, setSound } = useSlideControls();
  useSound(index, sound);

  useGSAP(() => {
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".hero-title", { y: 40, autoAlpha: 0, duration: 1, stagger: 0.3 });
      gsap.utils.toArray("[data-reveal]").forEach((el) =>
        gsap.from(el, { y: 30, autoAlpha: 0, duration: 0.7, scrollTrigger: { trigger: el, start: "top 85%", once: true } }),
      );
      gsap.from(".chain-item", { autoAlpha: 0, x: -30, stagger: 0.5, scrollTrigger: { trigger: ".chain", start: "top 75%", once: true } });
      gsap.from(".bar", { scaleY: 0, duration: 1.5, stagger: 0.3, scrollTrigger: { trigger: ".trench", start: "top 70%", once: true } });
    });
  }, { scope: root });

  return (
    <main ref={root} className="ocean-main">
      <div className="ocean-atmosphere" aria-hidden="true" />
      <a href="#home" className={`brand font-display ${index === 0 ? "on-light" : ""}`}>INTO THE DEEP<span>.</span></a>
      <DepthGauge index={index} />
      <div className={`tools ${index === 0 ? "on-light" : ""}`}>
        <button onClick={() => setSound(!sound)} aria-pressed={sound}>Suara {sound ? "nyala" : "mati"}</button>
        <button onClick={() => setNotes(!notes)} aria-pressed={notes}>Catatan</button>
      </div>
      {notes && <Notes index={index} onClose={() => setNotes(false)} />}
      <Hero />
      <Objectives />
      <Overview />
      <Sunlight />
      <Twilight />
      <Midnight />
      <Abyss />
      <Hadal />
      <Threat />
      <Quiz />
    </main>
  );
}

export default function App() {
  return <Presentation />;
}