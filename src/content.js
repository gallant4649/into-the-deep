// Semua materi + speaker notes. Edit teks di sini, bukan di App.jsx.
export const slides = [
  {
    id: "home",
    label: "Judul",
    depth: "0 m",
    title: "INTO THE DEEP",
    subtitle: "Menjelajahi Zona Laut",
    notes:
      "Selamat pagi, teman-teman. Coba bayangkan kalian berdiri di tepi pantai. Yang terlihat hanya permukaan air yang berkilau. Padahal di bawahnya ada dunia yang sangat dalam, dan sebagian besar belum pernah dilihat manusia secara langsung. Hari ini kita akan menyelam bersama, dari permukaan yang terang sampai palung yang paling gelap. Perhatikan apa yang berubah semakin kita turun.",
  },
  {
    id: "objectives",
    label: "Tujuan",
    depth: "Persiapan",
    title: "Misi Penyelaman",
    items: [
      { verb: "Urutkan", text: "5 zona laut menurut kedalaman" },
      { verb: "Jelaskan", text: "perubahan cahaya, suhu, dan tekanan" },
      { verb: "Hubungkan", text: "adaptasi makhluk hidup dengan zonanya" },
    ],
    notes:
      "Sebelum menyelam, kita sepakati dulu misinya. Pertama, kalian bisa mengurutkan lima zona laut dari yang paling dangkal sampai paling dalam. Kedua, kalian bisa menjelaskan apa yang terjadi pada cahaya, suhu, dan tekanan ketika kedalaman bertambah. Ketiga, kalian bisa menghubungkan ciri tubuh atau perilaku makhluk laut dengan tempat hidupnya. Di akhir nanti ada tiga pertanyaan untuk mengecek ketiga misi ini.",
  },
  {
    id: "overview",
    label: "Peta zona",
    depth: "0 – 11.000 m",
    title: "Lima Lapisan Laut",
    notes:
      "Ini peta perjalanan kita. Laut dibagi menjadi lima zona berdasarkan kedalaman. Perhatikan urutannya: epipelagik, mesopelagik, batipelagik, abisopelagik, dan hadal. Dalam bahasa sehari-hari: zona cahaya matahari, zona senja, zona tengah malam, zona abisal, dan zona hadal. Sebelum aku klik, coba tebak: di zona mana tumbuhan laut bisa berfotosintesis? Ya, hanya di lapisan paling atas. Oh ya, gambar ini skema, jadi tinggi kotaknya tidak sesuai skala sebenarnya.",
  },
  {
    id: "sunlight",
    label: "Zona 1",
    depth: "0 – 200 m",
    title: "Zona Cahaya Matahari",
    latin: "Epipelagik",
    key: "Cahaya cukup untuk fotosintesis",
    chain: ["Matahari", "Fitoplankton", "Zooplankton", "Ikan"],
    notes:
      "Perhentian pertama, zona epipelagik, dari permukaan sampai sekitar 200 meter. Di sini cahaya matahari masih cukup untuk fotosintesis. Pelakunya adalah fitoplankton, organisme sangat kecil yang melayang di air. Walaupun kecil, mereka menghasilkan sekitar setengah oksigen di Bumi. Ikuti panahnya: energi matahari ditangkap fitoplankton, fitoplankton dimakan zooplankton, lalu zooplankton dimakan ikan. Jadi zona paling atas ini adalah dapur utama bagi lautan.",
  },
  {
    id: "twilight",
    label: "Zona 2",
    depth: "200 – 1.000 m",
    title: "Zona Senja",
    latin: "Mesopelagik",
    key: "Cahaya redup, tidak cukup untuk fotosintesis",
    organism: "Ikan lentera",
    notes:
      "Turun ke zona senja, 200 sampai 1.000 meter. Masih ada sedikit cahaya, tetapi terlalu lemah untuk fotosintesis. Suhu juga turun cepat di banyak wilayah laut. Kenalkan, ikan lentera. Ia punya organ penghasil cahaya di tubuhnya. Perilakunya menarik: aku tekan tombol malam. Pada malam hari ia naik mendekati permukaan untuk makan, lalu turun lagi saat siang untuk bersembunyi dari pemangsa. Ini disebut migrasi vertikal harian. Menurut kalian, kenapa ia memilih makan saat gelap?",
  },
  {
    id: "midnight",
    label: "Zona 3",
    depth: "1.000 – 4.000 m",
    title: "Zona Tengah Malam",
    latin: "Batipelagik",
    key: "Tanpa cahaya matahari",
    organism: "Ikan pemancing (anglerfish)",
    notes:
      "Sekarang kita masuk zona tengah malam, 1.000 sampai 4.000 meter. Cahaya matahari tidak sampai ke sini. Aku gerakkan kursor seperti senter. Itu ikan pemancing. Pada banyak jenis, betinanya punya semacam joran di kepala dengan ujung yang bercahaya. Cahaya itu berasal dari bakteri yang hidup di dalamnya. Mangsa mendekat karena penasaran, lalu ditangkap. Kemampuan makhluk hidup menghasilkan cahaya disebut bioluminesensi. Di tempat gelap, cahaya bisa menjadi umpan, alat komunikasi, atau pertahanan.",
  },
  {
    id: "abyss",
    label: "Zona 4",
    depth: "4.000 – 6.000 m",
    title: "Zona Abisal",
    latin: "Abisopelagik",
    key: "Sangat dingin, tekanan sangat besar",
    organism: "Teripang laut dalam",
    notes:
      "Zona abisal, 4.000 sampai 6.000 meter. Airnya mendekati titik beku, hanya beberapa derajat Celsius. Sekarang perhatikan tekanannya. Setiap turun 10 meter, tekanan bertambah kira-kira satu atmosfer. Aku geser penunjuknya: di 5.000 meter, tekanannya sekitar 500 kali tekanan udara di permukaan. Lalu makhluk di sini makan apa? Salah satu sumbernya salju laut, yaitu serpihan sisa organisme yang jatuh dari atas. Teripang laut dalam memakan endapan itu di dasar laut.",
  },
  {
    id: "hadal",
    label: "Zona 5",
    depth: "6.000 – ±11.000 m",
    title: "Zona Hadal",
    latin: "Hadalpelagik",
    key: "Palung laut, titik terdalam Bumi",
    organism: "Ikan siput hadal (snailfish)",
    notes:
      "Perhentian terdalam, zona hadal, yang ada di palung-palung laut. Titik terdalam yang diketahui adalah Challenger Deep di Palung Mariana, hampir 11.000 meter. Bandingkan dengan Gunung Everest. Kalau Everest dimasukkan ke sana, puncaknya masih tertutup air sekitar dua kilometer. Apakah ada ikan sedalam ini? Ikan siput pernah terekam kamera di kedalaman sekitar 8.300 meter. Tubuhnya lunak, dan zat di dalam selnya membantu protein tetap bekerja di bawah tekanan tinggi.",
  },
  {
    id: "threat",
    label: "Ancaman & aksi",
    depth: "Kembali ke permukaan",
    title: "Laut Terancam, Kita Bisa Bertindak",
    items: [
      { threat: "Sampah plastik", action: "Kurangi plastik sekali pakai" },
      {
        threat: "Penangkapan ikan merusak",
        action: "Dukung tangkapan ramah lingkungan",
      },
      { threat: "Perubahan iklim", action: "Hemat energi" },
    ],
    notes:
      "Kita naik kembali ke permukaan. Dalam atau dangkal, laut menghadapi ancaman dari aktivitas manusia. Sampah plastik bisa termakan atau menjerat hewan. Penangkapan dengan bom atau racun merusak terumbu karang. Perubahan iklim membuat laut makin hangat dan makin asam. Sekarang, sebelum aku buka jawabannya, sebutkan satu tindakan yang bisa kalian lakukan minggu ini. Klik tiap kartu. Tindakan kecil memang tidak menyelesaikan semuanya, tetapi kebiasaan banyak orang membawa perubahan.",
  },
  {
    id: "quiz",
    label: "Evaluasi & penutup",
    depth: "Cek misi",
    title: "Cek Misimu",
    questions: [
      {
        q: "Urutan dari atas yang benar?",
        options: [
          "Senja → Cahaya → Abisal",
          "Cahaya → Senja → Tengah Malam",
          "Tengah Malam → Senja → Hadal",
        ],
        answer: 1,
      },
      {
        q: "Semakin dalam, tekanan air…",
        options: ["Berkurang", "Tetap", "Bertambah"],
        answer: 2,
      },
      {
        q: "Mengapa anglerfish bercahaya?",
        options: ["Memancing mangsa", "Berfotosintesis", "Menghangatkan air"],
        answer: 0,
      },
    ],
    closing: "Kenali lautmu, jaga lautmu.",
    notes:
      "Saatnya mengecek misi. Ada tiga pertanyaan. Angkat tangan untuk memilih sebelum aku klik jawabannya. Pertanyaan pertama tentang urutan zona, kedua tentang tekanan, ketiga tentang adaptasi. Setelah tiap jawaban, minta satu teman menjelaskan alasannya. Sebagai penutup: semakin dalam kita turun, cahaya berkurang, suhu makin dingin, tekanan makin besar, dan makhluk hidup beradaptasi dengan caranya masing-masing. Kenali lautmu, jaga lautmu. Terima kasih.",
  },
];

// Terjemahan bahasa Inggris. Struktur data tetap sama agar komponen interaktif
// dapat menggunakan materi yang sama tanpa duplikasi implementasi.
const english = {
  home: {
    label: "Title",
    depth: "0 m",
    subtitle: "Exploring Ocean Zones",
    notes:
      "Good morning, everyone. Imagine standing at the beach. You can only see the sparkling surface. Beneath it lies an incredibly deep world, much of which humans have never seen directly. Today, we will dive together, from the bright surface to the darkest trenches. Notice what changes as we descend.",
  },
  objectives: {
    label: "Objectives",
    depth: "Preparation",
    items: [
      { verb: "Identify", text: "the five ocean zones by depth" },
      { verb: "Explain", text: "changes in light, temperature, and pressure" },
      { verb: "Connect", text: "organism adaptations to their zones" },
    ],
    notes:
      "Before diving, let's agree on our mission. First, you should be able to arrange the five ocean zones from shallowest to deepest. Second, explain what happens to light, temperature, and pressure as depth increases. Third, connect the characteristics or behaviors of marine organisms to their habitats. At the end, there will be three questions to check these objectives.",
  },
  overview: {
    label: "Ocean map",
    depth: "0–11,000 m",
    title: "The Five Ocean Layers",
    notes:
      "This is our journey map. The ocean is divided into five zones based on depth: epipelagic, mesopelagic, bathypelagic, abyssopelagic, and hadal. In everyday terms: sunlight, twilight, midnight, abyssal, and hadal zones. Before I click, can you guess where marine plants can photosynthesize? Only in the uppermost layer. This is a schematic illustration, so the layer heights are not drawn to scale.",
  },
  sunlight: {
    label: "Zone 1",
    depth: "0–200 m",
    title: "Sunlight Zone",
    key: "Enough sunlight for photosynthesis",
    chain: ["Sunlight", "Phytoplankton", "Zooplankton", "Fish"],
    notes:
      "Our first stop is the epipelagic zone, from the surface to about 200 meters. Sunlight is still strong enough for photosynthesis. This is where phytoplankton, tiny organisms drifting in the water, do their work. Although tiny, they produce about half of Earth's oxygen. Follow the energy flow: sunlight is captured by phytoplankton, which are eaten by zooplankton, which are then eaten by fish. This upper zone is one of the ocean's main food-producing areas.",
  },
  twilight: {
    label: "Zone 2",
    depth: "200–1,000 m",
    title: "Twilight Zone",
    key: "Dim light; not enough for photosynthesis",
    organism: "Lanternfish",
    notes:
      "We descend into the twilight zone, from 200 to 1,000 meters. A little sunlight remains, but it is too weak for photosynthesis. Temperatures also drop rapidly in many ocean regions. Meet the lanternfish. It has light-producing organs on its body. Its behavior is fascinating: at night it rises toward the surface to feed, then descends during the day to hide from predators. This is called diel vertical migration. Why do you think it chooses to feed in the dark?",
  },
  midnight: {
    label: "Zone 3",
    depth: "1,000–4,000 m",
    title: "Midnight Zone",
    key: "No sunlight reaches this zone",
    organism: "Anglerfish",
    notes:
      "We are now in the midnight zone, 1,000 to 4,000 meters deep. Sunlight does not reach here. Move the cursor like a flashlight. That is an anglerfish. In many species, the female has a lure on her head with a glowing tip. The light is produced by bacteria living inside it. Prey approach out of curiosity and are caught. The ability of living organisms to produce light is called bioluminescence. In darkness, light can be used as bait, communication, or defense.",
  },
  abyss: {
    label: "Zone 4",
    depth: "4,000–6,000 m",
    title: "Abyssal Zone",
    key: "Extremely cold, with immense pressure",
    organism: "Deep-sea sea cucumber",
    notes:
      "The abyssal zone lies 4,000 to 6,000 meters deep. Water temperatures are close to freezing, only a few degrees Celsius. Now look at the pressure. For every 10 meters of depth, pressure increases by roughly one atmosphere. At 5,000 meters, that is about 500 times the air pressure at the surface. What do organisms here eat? One source is marine snow: fragments of organic matter falling from above. Deep-sea sea cucumbers feed on this material on the seafloor.",
  },
  hadal: {
    label: "Zone 5",
    depth: "6,000–about 11,000 m",
    title: "Hadal Zone",
    key: "Ocean trenches, the deepest places on Earth",
    organism: "Hadal snailfish",
    notes:
      "Our deepest stop is the hadal zone, found in ocean trenches. The deepest known point is Challenger Deep in the Mariana Trench, nearly 11,000 meters down. Compare that with Mount Everest. If Everest were placed there, its summit would still be covered by about two kilometers of water. Are there fish this deep? Snailfish have been recorded at depths of around 8,300 meters. Their soft bodies and compounds inside their cells help proteins function under extreme pressure.",
  },
  threat: {
    label: "Threats & action",
    depth: "Back to the surface",
    title: "The Ocean Is at Risk. We Can Act.",
    items: [
      { threat: "Plastic waste", action: "Reduce single-use plastics" },
      { threat: "Destructive fishing", action: "Support sustainable fishing" },
      { threat: "Climate change", action: "Save energy" },
    ],
    notes:
      "We are returning to the surface. Deep or shallow, the ocean faces threats from human activities. Plastic waste can be swallowed by or entangle animals. Blast and poison fishing damage coral reefs. Climate change makes the ocean warmer and more acidic. Before revealing the answers, name one action you can take this week. Click each card. Small actions alone cannot solve everything, but the habits of many people can create change.",
  },
  quiz: {
    label: "Quiz & closing",
    depth: "Mission check",
    title: "Check Your Mission",
    questions: [
      {
        q: "Which sequence goes from shallow to deep?",
        options: [
          "Twilight → Sunlight → Abyssal",
          "Sunlight → Twilight → Midnight",
          "Midnight → Twilight → Hadal",
        ],
        answer: 1,
      },
      {
        q: "As depth increases, water pressure…",
        options: ["Decreases", "Stays the same", "Increases"],
        answer: 2,
      },
      {
        q: "Why does an anglerfish produce light?",
        options: ["To lure prey", "To photosynthesize", "To warm the water"],
        answer: 0,
      },
    ],
    closing: "Know your ocean. Protect your ocean.",
    notes:
      "Time to check our mission. There are three questions. Raise your hand to choose before I reveal the answer. The first question is about the order of the zones, the second about pressure, and the third about adaptation. After each answer, ask a classmate to explain their reasoning. To conclude: as we descend, light decreases, water gets colder, pressure increases, and organisms adapt in different ways. Know your ocean. Protect your ocean. Thank you.",
  },
};

export function getSlides(language = "id") {
  if (language !== "en") return slides;
  return slides.map((slide) => ({ ...slide, ...(english[slide.id] || {}) }));
}
