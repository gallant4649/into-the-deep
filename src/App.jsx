import { createContext, useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getSlides } from "./content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LanguageContext = createContext(null);
const useLanguage = () => useContext(LanguageContext);

const uiText = {
  id: {
    switchLabel: "Pilih bahasa",
    headings: {
      objectives: ["MISI", "PENYELAMAN"],
      overview: ["LIMA LAPISAN", "LAUT."],
      sunlight: ["ZONA", "CAHAYA MATAHARI"],
      twilight: ["ZONA", "SENJA"],
      midnight: ["ZONA", "TENGAH MALAM"],
      abyss: ["ZONA", "ABISAL"],
      hadal: ["ZONA", "HADAL"],
      threat: ["LAUT TERANCAM,", "KITA BERTINDAK"],
      quiz: ["CEK", "MISIMU."],
    },
    scroll: "Gulir untuk menyelam",
    toolsSound: "Suara",
    soundOn: "nyala",
    soundOff: "mati",
    notes: "Catatan",
    close: "Tutup",
    note: "Catatan",
    time: "Waktu",
    day: "Siang",
    night: "Malam",
    rise: "Naik mencari makan",
    hide: "Bersembunyi di bawah",
    pressure: "atmosfer (perkiraan) di",
    meters: "m",
    seaSnow: "memakan “salju laut”",
    action: "Aksi kita",
    threat: "Ancaman",
    seeThreat: "Lihat ancaman",
    seeAction: "Lihat aksi",
    question: "Pertanyaan",
    of: "dari",
    next: "Lanjut",
    retry: "Ulangi kuis",
    navigation: "Navigasi slide",
    bioluminescence: "Bioluminesensi: cahaya dari makhluk hidup",
    depth: "Kedalaman",
    migrate: "bermigrasi vertikal",
    everest: "Gunung Everest",
    recordedFish: "Ikan siput terekam",
    footerEyebrow: "AKHIR PENYELAMAN",
    footerTitle: "Laut menyimpan lebih banyak\ncerita untuk dijelajahi.",
    footerDescription:
      "Semakin kita mengenal laut, semakin besar alasan untuk menjaganya. Perjalanan ini mungkin berakhir, tetapi eksplorasi dan kepedulian kita tidak.",
    footerExplore: "JELAJAHI LAGI",
    footerProject: "TENTANG PROYEK",
    footerProjectDescription:
      "Pengalaman belajar interaktif tentang zona laut dalam untuk mengenal kehidupan di bawah permukaan laut.",
    footerBack: "Kembali ke permukaan",
    footerCopyright: "Proyek media pembelajaran · Eksplorasi laut dalam",
    footerConnect: "TEMUKAN SAYA",
    footerGithub: "GitHub",
    footerInstagram: "Instagram",
  },
  en: {
    switchLabel: "Choose language",
    headings: {
      objectives: ["DIVE", "OBJECTIVES"],
      overview: ["THE FIVE", "OCEAN LAYERS."],
      sunlight: ["THE", "SUNLIGHT ZONE"],
      twilight: ["THE", "TWILIGHT ZONE"],
      midnight: ["THE", "MIDNIGHT ZONE"],
      abyss: ["THE", "ABYSSAL ZONE"],
      hadal: ["THE", "HADAL ZONE"],
      threat: ["THE OCEAN IS AT RISK,", "WE CAN ACT"],
      quiz: ["CHECK", "YOUR MISSION."],
    },
    scroll: "Scroll to descend",
    toolsSound: "Sound",
    soundOn: "on",
    soundOff: "off",
    notes: "Notes",
    close: "Close",
    note: "Notes",
    time: "Time",
    day: "Day",
    night: "Night",
    rise: "Rising to feed",
    hide: "Hiding below",
    pressure: "atmospheres (approx.) at",
    meters: "m",
    seaSnow: "feeds on marine snow",
    action: "Our action",
    threat: "Threat",
    seeThreat: "See threat",
    seeAction: "See action",
    question: "Question",
    of: "of",
    next: "Next",
    retry: "Retry quiz",
    navigation: "Slide navigation",
    bioluminescence: "Bioluminescence: light produced by living organisms",
    depth: "Depth",
    migrate: "migrate vertically",
    everest: "Mount Everest",
    recordedFish: "Recorded snailfish",
    footerEyebrow: "END OF THE DIVE",
    footerTitle: "The ocean holds more stories\nwaiting to be explored.",
    footerDescription:
      "The more we learn about the ocean, the more reasons we have to protect it. This journey may end, but our curiosity and care should not.",
    footerExplore: "EXPLORE AGAIN",
    footerProject: "ABOUT THE PROJECT",
    footerProjectDescription:
      "An interactive learning experience about deep-ocean zones and the life beneath the surface.",
    footerBack: "Back to the surface",
    footerCopyright: "Learning media project · Deep-ocean exploration",
    footerConnect: "FIND ME",
    footerGithub: "GitHub",
    footerInstagram: "Instagram",
  },
};
const BASE = import.meta.env.BASE_URL;
const VOLUME = 0.25;
const motionOK = () =>
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Gambar dari /public/images. Kalau belum ada, tampil lingkaran penanda. */
function Figure({ name, alt, className = "" }) {
  const [missing, setMissing] = useState(false);
  if (missing)
    return (
      <div className={`placeholder ${className}`} role="img" aria-label={alt}>
        <span>{name}.png</span>
      </div>
    );
  return (
    <img
      src={`${BASE}images/${name}.png`}
      alt={alt}
      onError={() => setMissing(true)}
      className={`figure ${className}`}
    />
  );
}

/* Kepala slide selalu di posisi yang sama; area isi yang berbeda-beda. */
function Slide({ data, children }) {
  const { ui } = useLanguage();
  const [first, second] = ui.headings[data.id];
  return (
    <section id={data.id} className="slide">
      <div className="frame">
        <header data-reveal>
          <p className="kicker">
            {data.depth}
            {data.latin && ` / ${data.latin}`}
          </p>
          <h2 className="title font-display">
            {first}
            <span>{second}</span>
          </h2>
        </header>
        <div className="body">{children}</div>
      </div>
    </section>
  );
}

/* 1. Poster terpusat */
function Hero() {
  const { language, slides, ui } = useLanguage();
  const [home] = slides;
  return (
    <section id={home.id} className="slide hero">
      <div className="hero-sun" aria-hidden="true" />
      <div className="hero-rays" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-title kicker">
          {language === "id"
            ? "Eksplorasi bawah laut"
            : "Underwater exploration"}
        </p>
        <h1 className="hero-title font-display">
          INTO THE<span>DEEP</span>
        </h1>
        <p className="hero-title lead">{home.subtitle}</p>
      </div>
      <div className="hero-cue" aria-hidden="true">
        {ui.scroll}
        <i />
      </div>
    </section>
  );
}

/* 2. Tangga menurun */
function Objectives() {
  const { language, slides, ui } = useLanguage();
  const [, objectives] = slides;
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
  const { language, slides, ui } = useLanguage();
  const [, , overview, ...zoneSlides] = slides;
  const zones = zoneSlides.slice(0, 5);
  const [active, setActive] = useState(0);
  const zone = zones[active];
  const colors = ["#36BBD2", "#247DA5", "#2b6a9c", "#2a527f", "#27406a"];
  return (
    <Slide data={overview}>
      <div data-reveal className="overview">
        <div className="layers">
          {zones.map((z, i) => (
            <button
              key={z.id}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              style={{ "--zone": colors[i] }}
            >
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
  const { language, slides, ui } = useLanguage();
  const sunlight = slides[3];
  return (
    <Slide data={sunlight}>
      <p data-reveal className="lead soft">
        {sunlight.key}
      </p>
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
  const { language, slides, ui } = useLanguage();
  const twilight = slides[4];
  const [night, setNight] = useState(false);
  const fish = useRef(null);
  useEffect(() => {
    gsap.to(fish.current, {
      top: night ? "12%" : "66%",
      duration: motionOK() ? 1.8 : 0,
      ease: "power2.inOut",
    });
  }, [night]);
  return (
    <Slide data={twilight}>
      <div className="split">
        <div data-reveal>
          <p className="lead soft">{twilight.key}</p>
          <p className="lead accent gap">
            {twilight.organism} {ui.migrate}
          </p>
          <div className="switch" role="group" aria-label={ui.time}>
            <button aria-pressed={!night} onClick={() => setNight(false)}>
              {ui.day}
            </button>
            <button aria-pressed={night} onClick={() => setNight(true)}>
              {ui.night}
            </button>
          </div>
        </div>
        <div className={`water ${night ? "night" : ""}`}>
          <p className="kicker">{night ? ui.rise : ui.hide}</p>
          <div ref={fish} className="swimmer">
            <Figure
              name="lanternfish"
              alt={twilight.organism}
              className="orb"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* 6. Senter: kursor/sentuhan membuka gambar */
function Midnight() {
  const { language, slides, ui } = useLanguage();
  const midnight = slides[5];
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
          <Figure
            name="anglerfish"
            alt={midnight.organism}
            className="angler"
          />
        </div>
      </div>
      <div data-reveal className="pair">
        <p className="lead">{midnight.key}</p>
        <p className="lead soft">{ui.bioluminescence}</p>
      </div>
    </Slide>
  );
}

/* 7. Angka besar + slider tekanan */
function Abyss() {
  const { language, slides, ui } = useLanguage();
  const abyss = slides[6];
  const [depth, setDepth] = useState(5000);
  const atm = Math.round(1 + depth / 10);
  return (
    <Slide data={abyss}>
      <div className="split">
        <div data-reveal>
          <p className="giant font-display">{atm}</p>
          <p className="lead soft">
            {ui.pressure}{" "}
            {depth.toLocaleString(language === "id" ? "id-ID" : "en-US")}{" "}
            {ui.meters}
          </p>
          <input
            type="range"
            min="0"
            max="6000"
            step="100"
            value={depth}
            aria-label={ui.depth}
            style={{ "--fill": `${depth / 60}%` }}
            onChange={(e) => setDepth(Number(e.target.value))}
          />
        </div>
        <figure data-reveal className="specimen">
          <Figure
            name="sea-cucumber"
            alt={abyss.organism}
            className="orb big"
          />
          <figcaption className="lead soft">
            {abyss.organism} {ui.seaSnow}
          </figcaption>
        </figure>
      </div>
    </Slide>
  );
}

/* 8. Batang kedalaman berskala */
function Hadal() {
  const { language, slides, ui } = useLanguage();
  const hadal = slides[7];
  const bars = [
    { name: ui.everest, m: 8849, color: "#8d9db0" },
    { name: ui.recordedFish, m: 8336, color: "#f0a8c0" },
    { name: "Challenger Deep", m: 10935, color: "#67e8f9" },
  ];
  return (
    <Slide data={hadal}>
      <p data-reveal className="lead soft">
        {hadal.key}
      </p>
      <div className="trench">
        {bars.map((b) => (
          <div key={b.name} style={{ "--c": b.color }}>
            <div className="shaft">
              <div
                className="bar"
                style={{ height: `${(b.m / 11000) * 100}%` }}
              />
            </div>
            <p className="depth font-display">
              ±{b.m.toLocaleString(language === "id" ? "id-ID" : "en-US")} m
            </p>
            <p className="lead soft">{b.name}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* 9. Kolom ancaman: klik untuk membuka aksi */
function Threat() {
  const { language, slides, ui } = useLanguage();
  const threat = slides[8];
  const [open, setOpen] = useState([]);
  const toggle = (i) =>
    setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));
  return (
    <Slide data={threat}>
      <div className="threats">
        {threat.items.map((item, i) => {
          const flipped = open.includes(i);
          return (
            <button
              key={item.threat}
              data-reveal
              onClick={() => toggle(i)}
              aria-pressed={flipped}
            >
              <span className="kicker">{flipped ? ui.action : ui.threat}</span>
              <span className="statement font-display">
                {flipped ? item.action : item.threat}
              </span>
              <span className="hint">
                {flipped ? ui.seeThreat : ui.seeAction}
              </span>
            </button>
          );
        })}
      </div>
    </Slide>
  );
}

/* 10. Kuis satu pertanyaan per layar */
function Quiz() {
  const { language, slides, ui } = useLanguage();
  const quiz = slides[9];
  const [n, setN] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const item = quiz.questions[n];
  const choose = (i) => {
    setPicked(i);
    if (i === item.answer) setScore((s) => s + 1);
  };
  const next = () => {
    setN(n + 1);
    setPicked(null);
  };
  const reset = () => {
    setN(0);
    setPicked(null);
    setScore(0);
  };
  return (
    <Slide data={quiz}>
      <div aria-live="polite">
        {item ? (
          <div className="quiz">
            <div>
              <p className="kicker">
                {ui.question} {n + 1} {ui.of} {quiz.questions.length}
              </p>
              <p className="question font-display">{item.q}</p>
              {picked !== null && (
                <button className="btn" onClick={next}>
                  {ui.next}
                </button>
              )}
            </div>
            <div className="options">
              {item.options.map((option, i) => {
                const state =
                  picked === null
                    ? ""
                    : i === item.answer
                      ? "right"
                      : picked === i
                        ? "wrong"
                        : "dim";
                return (
                  <button
                    key={option}
                    className={state}
                    disabled={picked !== null}
                    onClick={() => choose(i)}
                  >
                    <span>{option}</span>
                    <b>
                      {state === "right" ? "✓" : state === "wrong" ? "✗" : ""}
                    </b>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="finish">
            <p className="giant font-display">
              {score}/{quiz.questions.length}
            </p>
            <p className="question font-display">{quiz.closing}</p>
            <button className="btn" onClick={reset}>
              {ui.retry}
            </button>
          </div>
        )}
      </div>
    </Slide>
  );
}

/* Penutup perjalanan eksplorasi */
function Footer() {
  const { ui } = useLanguage();
  const links = [
    {
      label: ui.headings.overview.join(" ").replace(".", ""),
      href: "#overview",
    },
    { label: ui.headings.sunlight.join(" "), href: "#sunlight" },
    { label: ui.headings.twilight.join(" "), href: "#twilight" },
    { label: ui.headings.midnight.join(" "), href: "#midnight" },
    { label: ui.headings.abyss.join(" "), href: "#abyss" },
    { label: ui.headings.hadal.join(" "), href: "#hadal" },
    { label: ui.headings.threat.join(" ").replace(",", ""), href: "#threat" },
  ];

  return (
    <footer className="ocean-footer">
      <div className="footer-inner">
        <div className="footer-closing">
          <p className="kicker">{ui.footerEyebrow}</p>
          <h2 className="footer-statement font-display">
            {ui.footerTitle.split("\n").map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </h2>
          <p className="footer-description">{ui.footerDescription}</p>
          <a className="footer-back" href="#home">
            <span>{ui.footerBack}</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="footer-details">
          {/* BRAND BLOCK — BAGIAN ATAS */}
          <div className="footer-brand-block flex items-center gap-5">
            <img
              src={`./deep_logo.png`}
              alt="Logo Into the Deep"
              className="h-30 w-30 rounded-2xl shrink-0 object-contain"
            />

            <div>
              <a href="#home" className="footer-brand font-display">
                INTO THE DEEP<span>.</span>
              </a>
              <p className="mt-2 max-w-xs text-sm font-light leading-7 text-[var(--soft)]">
                {ui.footerProjectDescription}
              </p>
            </div>
          </div>

          {/* SEMUA INFORMASI LAIN DI BAWAH BRAND */}
          <div className="footer-lower-grid">
            <div className="footer-links-block">
              <p className="footer-label">{ui.footerExplore}</p>
              <nav className="footer-links" aria-label={ui.footerExplore}>
                {links.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer-about-block">
              <p className="footer-label">{ui.footerProject}</p>
              <p>{ui.footerCopyright}</p>
            </div>

            <div className="footer-social-block">
              <p className="footer-label">{ui.footerConnect}</p>
              <div className="footer-social-links">
                <a
                  href="https://github.com/USERNAME"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* GitHub icon */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.6 1.2 14 3.6a13 13 0 0 0-7 0C3.4 1.2 2.2 1.5 2.2 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .7 8.7c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 6 18.1V22" />
                  </svg>
                  <span>{ui.footerGithub}</span>
                  <span className="social-arrow">↗</span>
                </a>

                <a
                  href="https://www.instagram.com/USERNAME/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* Instagram icon */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".8" className="social-dot" />
                  </svg>
                  <span>{ui.footerInstagram}</span>
                  <span className="social-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} INTO THE DEEP</span>
          <span>EXPLORE · UNDERSTAND · PROTECT</span>
        </div>
      </div>
    </footer>
  );
}

/* Pengukur kedalaman: penanda posisi sekaligus navigasi */
function DepthGauge({ index }) {
  const { slides, ui } = useLanguage();
  return (
    <nav
      className={`gauge ${index === 0 ? "on-light" : ""}`}
      aria-label={ui.navigation}
    >
      <p>
        {index + 1}/{slides.length}
      </p>
      <div>
        {slides.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={i === index}
            className={i <= index ? "passed" : ""}
          />
        ))}
      </div>
    </nav>
  );
}

/* Suara latar per section: public/sounds/<id>.mp3, berganti dengan fade */
function useSound(index, enabled) {
  const { language, slides, ui } = useLanguage();
  useEffect(() => {
    if (!enabled) return;
    const audio = new Audio(`${BASE}sounds/${slides[index].id}.mp3`);
    audio.loop = true;
    audio.volume = 0;
    audio.play().catch(() => {}); // file belum ada atau diblokir browser: diam saja
    gsap.to(audio, { volume: VOLUME, duration: 1.2 });
    return () => {
      gsap.killTweensOf(audio);
      gsap.to(audio, {
        volume: 0,
        duration: 0.8,
        onComplete: () => audio.pause(),
      });
    };
  }, [index, enabled]);
}

/* Speaker notes di halaman yang sama (tombol N, tutup dengan Esc) */
function Notes({ index, onClose }) {
  const { slides, ui } = useLanguage();
  return (
    <aside className="notes" aria-label="Speaker notes">
      <div>
        <p className="kicker">
          {ui.note} {index + 1}/{slides.length} / {slides[index].label}
        </p>
        <button onClick={onClose}>{ui.close}</button>
      </div>
      <p>{slides[index].notes}</p>
    </aside>
  );
}

/* Navigasi panah / PageUp / PageDown (cocok untuk clicker) */
function useSlideControls() {
  const { language, slides, ui } = useLanguage();
  const [index, setIndex] = useState(0);
  const [notes, setNotes] = useState(false);
  const [sound, setSound] = useState(false);
  const current = useRef(0);

  useEffect(() => {
    const triggers = slides.map((s, i) =>
      ScrollTrigger.create({
        trigger: `#${s.id}`,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (!self.isActive) return;
          current.current = i;
          setIndex(i);
        },
      }),
    );

    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.ctrlKey || e.metaKey || e.altKey)
        return;
      const key = e.key.toLowerCase();
      if (key === "n") setNotes((v) => !v);
      if (key === "m") setSound((v) => !v);
      if (key === "escape") setNotes(false);
      const step = ["ArrowDown", "ArrowRight", "PageDown"].includes(e.key)
        ? 1
        : ["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)
          ? -1
          : 0;
      if (!step) return;
      e.preventDefault();
      const target = Math.min(
        slides.length - 1,
        Math.max(0, current.current + step),
      );
      document
        .getElementById(slides[target].id)
        ?.scrollIntoView({ behavior: motionOK() ? "smooth" : "auto" });
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
  const { language, slides, ui, setLanguage } = useLanguage();
  const root = useRef(null);
  const { index, notes, setNotes, sound, setSound } = useSlideControls();
  useSound(index, sound);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-title", {
          y: 40,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.3,
        });
        gsap.utils.toArray("[data-reveal]").forEach((el) =>
          gsap.from(el, {
            y: 30,
            autoAlpha: 0,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }),
        );
        gsap.from(".chain-item", {
          autoAlpha: 0,
          x: -30,
          stagger: 0.5,
          scrollTrigger: { trigger: ".chain", start: "top 75%", once: true },
        });
        gsap.from(".bar", {
          scaleY: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: { trigger: ".trench", start: "top 70%", once: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <main ref={root} className="ocean-main">
      <div className="ocean-atmosphere" aria-hidden="true" />
      <a
        href="#home"
        className={`brand font-display ${index === 0 ? "on-light" : ""}`}
      >
        INTO THE DEEP<span>.</span>
      </a>
      <div
        className={`language-switch ${index === 0 ? "on-light" : ""}`}
        role="group"
        aria-label={ui.switchLabel}
      >
        <button
          type="button"
          onClick={() => setLanguage("id")}
          aria-pressed={language === "id"}
        >
          ID
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
        >
          EN
        </button>
      </div>
      <DepthGauge index={index} />
      <div className={`tools ${index === 0 ? "on-light" : ""}`}>
        <button onClick={() => setSound(!sound)} aria-pressed={sound}>
          {ui.toolsSound} {sound ? ui.soundOn : ui.soundOff}
        </button>
        <button onClick={() => setNotes(!notes)} aria-pressed={notes}>
          {ui.notes}
        </button>
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
      <Footer />
    </main>
  );
}

export default function App() {
  const [language, setLanguage] = useState("id");
  const slides = getSlides(language);
  const ui = uiText[language];
  return (
    <LanguageContext.Provider value={{ language, setLanguage, slides, ui }}>
      <Presentation />
    </LanguageContext.Provider>
  );
}
