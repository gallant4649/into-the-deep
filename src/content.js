// Semua materi + speaker notes. Edit teks di sini, bukan di App.jsx.
export const slides = [
  {
    id: "home", label: "Judul", depth: "0 m",
    title: "INTO THE DEEP", subtitle: "Menjelajahi Zona Laut",
    notes: "Selamat pagi, teman-teman. Coba bayangkan kalian berdiri di tepi pantai. Yang terlihat hanya permukaan air yang berkilau. Padahal di bawahnya ada dunia yang sangat dalam, dan sebagian besar belum pernah dilihat manusia secara langsung. Hari ini kita akan menyelam bersama, dari permukaan yang terang sampai palung yang paling gelap. Perhatikan apa yang berubah semakin kita turun.",
  },
  {
    id: "objectives", label: "Tujuan", depth: "Persiapan",
    title: "Misi Penyelaman",
    items: [
      { verb: "Urutkan", text: "5 zona laut menurut kedalaman" },
      { verb: "Jelaskan", text: "perubahan cahaya, suhu, dan tekanan" },
      { verb: "Hubungkan", text: "adaptasi makhluk hidup dengan zonanya" },
    ],
    notes: "Sebelum menyelam, kita sepakati dulu misinya. Pertama, kalian bisa mengurutkan lima zona laut dari yang paling dangkal sampai paling dalam. Kedua, kalian bisa menjelaskan apa yang terjadi pada cahaya, suhu, dan tekanan ketika kedalaman bertambah. Ketiga, kalian bisa menghubungkan ciri tubuh atau perilaku makhluk laut dengan tempat hidupnya. Di akhir nanti ada tiga pertanyaan untuk mengecek ketiga misi ini.",
  },
  {
    id: "overview", label: "Peta zona", depth: "0 – 11.000 m",
    title: "Lima Lapisan Laut",
    notes: "Ini peta perjalanan kita. Laut dibagi menjadi lima zona berdasarkan kedalaman. Perhatikan urutannya: epipelagik, mesopelagik, batipelagik, abisopelagik, dan hadal. Dalam bahasa sehari-hari: zona cahaya matahari, zona senja, zona tengah malam, zona abisal, dan zona hadal. Sebelum aku klik, coba tebak: di zona mana tumbuhan laut bisa berfotosintesis? Ya, hanya di lapisan paling atas. Oh ya, gambar ini skema, jadi tinggi kotaknya tidak sesuai skala sebenarnya.",
  },
  {
    id: "sunlight", label: "Zona 1", depth: "0 – 200 m",
    title: "Zona Cahaya Matahari", latin: "Epipelagik",
    key: "Cahaya cukup untuk fotosintesis",
    chain: ["Matahari", "Fitoplankton", "Zooplankton", "Ikan"],
    notes: "Perhentian pertama, zona epipelagik, dari permukaan sampai sekitar 200 meter. Di sini cahaya matahari masih cukup untuk fotosintesis. Pelakunya adalah fitoplankton, organisme sangat kecil yang melayang di air. Walaupun kecil, mereka menghasilkan sekitar setengah oksigen di Bumi. Ikuti panahnya: energi matahari ditangkap fitoplankton, fitoplankton dimakan zooplankton, lalu zooplankton dimakan ikan. Jadi zona paling atas ini adalah dapur utama bagi lautan.",
  },
  {
    id: "twilight", label: "Zona 2", depth: "200 – 1.000 m",
    title: "Zona Senja", latin: "Mesopelagik",
    key: "Cahaya redup, tidak cukup untuk fotosintesis",
    organism: "Ikan lentera",
    notes: "Turun ke zona senja, 200 sampai 1.000 meter. Masih ada sedikit cahaya, tetapi terlalu lemah untuk fotosintesis. Suhu juga turun cepat di banyak wilayah laut. Kenalkan, ikan lentera. Ia punya organ penghasil cahaya di tubuhnya. Perilakunya menarik: aku tekan tombol malam. Pada malam hari ia naik mendekati permukaan untuk makan, lalu turun lagi saat siang untuk bersembunyi dari pemangsa. Ini disebut migrasi vertikal harian. Menurut kalian, kenapa ia memilih makan saat gelap?",
  },
  {
    id: "midnight", label: "Zona 3", depth: "1.000 – 4.000 m",
    title: "Zona Tengah Malam", latin: "Batipelagik",
    key: "Tanpa cahaya matahari",
    organism: "Ikan pemancing (anglerfish)",
    notes: "Sekarang kita masuk zona tengah malam, 1.000 sampai 4.000 meter. Cahaya matahari tidak sampai ke sini. Aku gerakkan kursor seperti senter. Itu ikan pemancing. Pada banyak jenis, betinanya punya semacam joran di kepala dengan ujung yang bercahaya. Cahaya itu berasal dari bakteri yang hidup di dalamnya. Mangsa mendekat karena penasaran, lalu ditangkap. Kemampuan makhluk hidup menghasilkan cahaya disebut bioluminesensi. Di tempat gelap, cahaya bisa menjadi umpan, alat komunikasi, atau pertahanan.",
  },
  {
    id: "abyss", label: "Zona 4", depth: "4.000 – 6.000 m",
    title: "Zona Abisal", latin: "Abisopelagik",
    key: "Sangat dingin, tekanan sangat besar",
    organism: "Teripang laut dalam",
    notes: "Zona abisal, 4.000 sampai 6.000 meter. Airnya mendekati titik beku, hanya beberapa derajat Celsius. Sekarang perhatikan tekanannya. Setiap turun 10 meter, tekanan bertambah kira-kira satu atmosfer. Aku geser penunjuknya: di 5.000 meter, tekanannya sekitar 500 kali tekanan udara di permukaan. Lalu makhluk di sini makan apa? Salah satu sumbernya salju laut, yaitu serpihan sisa organisme yang jatuh dari atas. Teripang laut dalam memakan endapan itu di dasar laut.",
  },
  {
    id: "hadal", label: "Zona 5", depth: "6.000 – ±11.000 m",
    title: "Zona Hadal", latin: "Hadalpelagik",
    key: "Palung laut, titik terdalam Bumi",
    organism: "Ikan siput hadal (snailfish)",
    notes: "Perhentian terdalam, zona hadal, yang ada di palung-palung laut. Titik terdalam yang diketahui adalah Challenger Deep di Palung Mariana, hampir 11.000 meter. Bandingkan dengan Gunung Everest. Kalau Everest dimasukkan ke sana, puncaknya masih tertutup air sekitar dua kilometer. Apakah ada ikan sedalam ini? Ikan siput pernah terekam kamera di kedalaman sekitar 8.300 meter. Tubuhnya lunak, dan zat di dalam selnya membantu protein tetap bekerja di bawah tekanan tinggi.",
  },
  {
    id: "threat", label: "Ancaman & aksi", depth: "Kembali ke permukaan",
    title: "Laut Terancam, Kita Bisa Bertindak",
    items: [
      { threat: "Sampah plastik", action: "Kurangi plastik sekali pakai" },
      { threat: "Penangkapan ikan merusak", action: "Dukung tangkapan ramah lingkungan" },
      { threat: "Perubahan iklim", action: "Hemat energi" },
    ],
    notes: "Kita naik kembali ke permukaan. Dalam atau dangkal, laut menghadapi ancaman dari aktivitas manusia. Sampah plastik bisa termakan atau menjerat hewan. Penangkapan dengan bom atau racun merusak terumbu karang. Perubahan iklim membuat laut makin hangat dan makin asam. Sekarang, sebelum aku buka jawabannya, sebutkan satu tindakan yang bisa kalian lakukan minggu ini. Klik tiap kartu. Tindakan kecil memang tidak menyelesaikan semuanya, tetapi kebiasaan banyak orang membawa perubahan.",
  },
  {
    id: "quiz", label: "Evaluasi & penutup", depth: "Cek misi",
    title: "Cek Misimu",
    questions: [
      { q: "Urutan dari atas yang benar?", options: ["Senja → Cahaya → Abisal", "Cahaya → Senja → Tengah Malam", "Tengah Malam → Senja → Hadal"], answer: 1 },
      { q: "Semakin dalam, tekanan air…", options: ["Berkurang", "Tetap", "Bertambah"], answer: 2 },
      { q: "Mengapa anglerfish bercahaya?", options: ["Memancing mangsa", "Berfotosintesis", "Menghangatkan air"], answer: 0 },
    ],
    closing: "Kenali lautmu, jaga lautmu.",
    notes: "Saatnya mengecek misi. Ada tiga pertanyaan. Angkat tangan untuk memilih sebelum aku klik jawabannya. Pertanyaan pertama tentang urutan zona, kedua tentang tekanan, ketiga tentang adaptasi. Setelah tiap jawaban, minta satu teman menjelaskan alasannya. Sebagai penutup: semakin dalam kita turun, cahaya berkurang, suhu makin dingin, tekanan makin besar, dan makhluk hidup beradaptasi dengan caranya masing-masing. Kenali lautmu, jaga lautmu. Terima kasih.",
  },
];
