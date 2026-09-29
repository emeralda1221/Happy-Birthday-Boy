// ============================================
// DATA.JS - Semua data konten (playlist, kuis, dll)
// ============================================

// DAFTAR PLAYLIST
const playlist = [
            {
                title: "Ceritanya Jatuh Cinta",
                artist: "Aku Jeje",
                src: "lagu/Ceritanya Jatuh Cinta.mp3",
            },
            {
                title: "Drop Dead",
                artist: "Olivia Rodrigo",
                src: "lagu/Drop Dead.mp3",
            },
            {
                title: "Dandelions",
                artist: "Ruth B.",
                src: "lagu/Dandelions.mp3",
            },
            {
                title: "Love Story",
                artist: "Taylor Swift",
                src: "lagu/Love Story.mp3",
            },
            {
                title: "Tak Ada Ujungnya",
                artist: "Rony Parulian",
                src: "lagu/Tak ADa Ujungnya.mp3",
            },
            {
                title: "Jagat Rasa",
                artist: "Samuel Cipta",
                src: "lagu/Jagat Rasa.mp3",
            },
            {
                title: "Senja Sudut Kota",
                artist: "Samuel Cipta",
                src: "lagu/Senja Sudut Kota.mp3"
            },
            {
                title: "My Love",
                artist: "Westlife",
                src: "lagu/My Love.mp3",
            },
            {
                title: "You're Still The One",
                artist: "Shania Twain",
                src: "lagu/Youre Still The One.mp3",
            },
            {
                title: "1000x",
                artist: "Ghea Indrawari",
                src: "lagu/1000X.mp3",
            },
            {
                title: "Serta Mulia",
                artist: "Sal Priadi",
                src: "lagu/Serta Mulia.mp3",
            },
];

// DATA MOOD TRACKER
const moodData = {
            happy: { title: "😊 BISA BIKIN AKU SENYUM JUGA GAK?", msg: "Ikut seneng banget kalau hari ini kamu bahagia! Tetep simpen senyum gantengmu itu ya sayang! 🤍" },
            tired: { title: "🥱 ISTIRAHAT DULU YAA SAYANG...", msg: "Capek ya? Sini, senderan sebentar. Kamu udah berusaha sangat baik hari ini. Istirahat yang cukup ya ganteng! 🫂❤️" },
            miss: { title: "🥺 AKU JUGA KANGEN BANGET TAHU!", msg: "Uuuu kasihan pacarku lagi kangen! Samaan kok, aku juga kangen banget sama kamu. ✨" },
            stress: { title: "😤 TARIK NAPAS DALAM-DALAM...", msg: "Semua bakal baik-baik aja kok. Kalau mau cerita langsung WhatsApp aku aja ya! 💪💙" },
            excited: { title: "🥳 BIRTHDAY VIBE IS ON!", msg: "Wuhu! Hari ini hari spesialmu! Pokoknya hari ini kamu harus happy dan enjoy setiap detiknya! 🎉🎂" }
        };


// DATA KUIS & REASONS
        const quizDataMoments = [
            { q: "1. Tanggal berapa kita awal kita DM-an?   ", options: ["9 April", "10 April", "30 September", "1 Januari"], correct: 0 },
            { q: "2. Momen apa yang bikin kita pertama kali Ketemu?", options: ["Pas Tahun Baru", "Pas Lebaran", "Pas Ulang Tahun", "Pas Random Aja"], correct: 1 },
            { q: "3. Siapa orang paling ganteng yang lagi ulang tahun hari ini?", options: ["Favorite Person", "Orang Ganteng", "Pacar Aku", "Semua Benar! ❤️"], correct: 3 },
            { q: "4. Siapa yang paling sering bilang 'kangen' duluan kalau lagi jauh?", options: ["Sandy", "Emeralda", "Dua-duanya sama-sama bucin", "Sinyal GPS yang kangen"], correct: 2 },
            { q: "5. Dari angka 1 - 100, seberapa cocok koordinat kita berdua?", options: ["50", "80", "99.9", "1000% Match Perfect! 🧩"], correct: 3 },
            { q: "6. Kalau cinta kita dijadikan rumus Algoritma, berapa Loop (perulangan)-nya?", options: ["While (true) { CintaTerus(); } (Looping Tanpa Batas) ♾️", "For i = 1 to 10", "Do While (Capek)", "If (Ngantuk) Break"], correct: 0 },
            { q: "7. Pas pertama kali kita chat-an panjang, protokol jaringan apa yang terhubung di antara kita?", options: ["HTTP", "FTP", "Heart-to-Heart Protocol", "SSH"], correct: 2 },
            { q: "8. Kalau hubungan kita diibaratkan kode program, jenis 'error' apa yang nggak bakal pernah ada?", options: ["404 Not Found (Soalnya kamu selalu ada)", "Syntax Error", "Null Pointer Exception", "Bug Cinta"], correct: 0 },
            { q: "9. Kalau ada fitur 'Git Commit' buat hubungan kita, pesan commit apa yang paling pas?", options: ["git commit -m 'Initial Commit'", "git commit -m 'Fixed Bug'", "git commit -m 'our hearts together forever' 🔒❤️", "git push --force"], correct: 2 },
            { q: "10. Dalam istilah UI/UX Design, Kamu itu tipe 'User Interface' yang kayak gimana?", options: ["Rumit & Banyak Pop-up", "Minimalis tapi Bikin Bingung", "Sempurna, Estetik, & Auto Bikin Nyaman 10/10 ✨", "Dark Mode Only"], correct: 2 }
            ];

        const quizDataAboutMe = [
            { q: "1. Siapa nama wanita cantik pacarmu ini? 😜", options: ["Mermaid", "Emeralda", "Batu", "Esmeralda"], correct: 1 },
            { q: "2. Makanan apa yg aku paling suka?", options: ["Ular", "Bebek", "Komodo", "Semua benar"], correct: 1 },
            { q: "3. Kalimat apa yang sering keluar saat aku salting?", options: ["alah alah alah", "prett", "ohiya?", "makasih"], correct: 0 },
            { q: "4. Kalau aku tiba-tiba mendadak diem atau bales chat singkat, artinya...",options: ["Ngambek berat!", "Lapar / Mengantuk 😴", "Capek / Overthinking 🧠", "Antara lapar atau kangen kamu 😜"],correct: 3 },
            { q: "5. Hal paling efektif yang bisa bikin mood aku auto-bagus seharian itu apa?",  options: ["Dikasih kabar tanpa diminta 📲", "Dipuji & disayang-sayang 💖", "Diajak jajan makanan enak 🍦", "Semua jawaban benar (Pokoknya dari kamu!)"],correct: 3},
            { q: "6. Kalau aku tiba-tiba bilang 'gapapa kok', kamu harus...", options: ["Percaya aja", "Ikutan bilang gapapa", "Tetap nanya sampai aku cerita", "Menghilang 😭"], correct: 2 },
            { q: "7. Menurut kamu, aku lebih gampang salting kalau kamu...", options: ["Ngeledekin aku", "Muji aku tiba-tiba", "Ngelihatin aku lama-lama", "Semua jawaban benar 😭"], correct: 3 },
            { q: "8. Apa yang paling mungkin aku lakukan kalau lagi kangen tapi gengsi bilang duluan?",  options: ["Chat random", "Cari alasan buat ngobrol", "Ngirim sesuatu yang nggak penting", "Semua jawaban benar 😭"],  correct: 3 },
            { q: "9. Siapa yang paling beruntung punya aku? 😜❤️",  options: ["Aku sendiri", "Kamu dong!", "Kita berdua", "Jelas kamu, jangan banyak mikir 😌"],  correct: 2 },
            { q: "10. Kalau aku bilang 'aku nggak mau apa-apa kok', kamu percaya?",  options: ["Iya dong", "Enggak😭", "Tergantung situasi, harus dipastikan beberapa kali", "Aku langsung tidur"],  correct: 2 }
        ];

        const reasonsData = [
            "Kamu selalu punya cara buat bikin aku tersenyum, even on my most exhausting days.",
            "Thank you for your endless patience buat ngeladenin tingkah aku yang kadang random banget.",
            "Your smile and your laugh will forever be my absolute favorite things.",
            "Perhatian-perhatian kecilmu yang konsisten selalu bikin aku merasa so loved and appreciated.",
            "You are my ultimate safe space. Di saat dunia lagi berisik, berada di dekatmu selalu bikin tenang.",
            "We can literally talk about anything dari obrolan deep soal masa depan sampai hal-hal random yang nonsense, dan semuanya selalu seru.",
            "You always believe in me, bahkan di saat aku sendiri lagi doubt sama diri sendiri. Thank you for being my biggest cheerleader.",
            "Your pure heart.Cara kamu memperlakukan orang lain dengan hangat bikin aku makin falling in love setiap harinya.",
            "With you, I can be completely myself. Nggak perlu pakai topeng atau jaim, karena *you accept all my flaws.",
            "At the end of the day, you are my home.No matter what happens, as long as I have you, everything feels just right."
        ];

// DATA SPIN WHEEL
        const spinSlices = [
            "Kamu alasan aku senyum hari ini! 🤍",
            "Pawang hatiku yang paling ganteng ✨",
            "Kangen kamu 24/7 tanpa libur! 🥺",
            "Sumpah, kamu kesayangan aku banget! 💘",
            "The best boyfriend in the universe! 🌍",
            "Tempat pulang paling nyaman cuma kamu 🏡"
        ];
        const spinColors = ["#E3B5AE", "#EBD29A", "#BFCDB0", "#B9C9DA", "#E3B5AE", "#EBD29A"];


// DATA SHOOTER GAME
const shooterTexts = [
            "Sayang Kamu! 💖", "Pawang Hatiku ✨", "Ganteng Banget! 🥰",
            "My Favorite 🤍", "Kangen Kamu! 🥺", "You're Mine! 💘"
        ];



// KONFIGURASI TANGGAL PENTING
// ⚠️ GANTI tanggal di bawah ini sesuai tanggal asli ya, Ara!
// Format: "Month Day, Year HH:MM:SS"

const importantDates = {
    // Tanggal ulang tahun Sandy (dipakai countdown utama di Home)
    birthday: new Date("September 30, 2026 00:00:00").getTime()
};

// DATA MEMORY MATCH GAME 
const memoryGameImages = [
    "foto/Pindah ke WA juga kan.jpeg",
    "foto/tiket nonton.jpeg",
    "foto/main di bdg.jpeg",
    "foto/di mescusuar.jpeg",
    "foto/Photobox.jpeg",
    "foto/foto koran.jpeg"
];

// DATA GENERATOR SURAT CINTA
// Setiap mood punya kumpulan kalimat pembuka, isi, dan penutup.
// generateLetter() akan mengacak beberapa kalimat isi tiap kali diklik.
const letterPools = {
    romantic: {
        opener: [
            "Haiiii, sayangku...",
            "Untuk Kamu, satu-satunya yang aku pilih berkali-kali..."
        ],
        body: [
            "Nggak ada hari yang terasa biasa aja kalau ada kamu di dalamnya.",
            "Aku selalu suka cara kamu bikin hal sederhana terasa istimewa.",
            "Setiap kali kangen, aku cuma perlu ingat kamu bakal pulang ke aku lagi.",
            "Kamu itu alasan kenapa aku percaya lagi sama cinta yang tenang dan aman.",
            "Rasanya nggak pernah cukup bilang makasih sudah memilih aku setiap hari.",
            "Kalau boleh jujur, kamu adalah bagian favorit dari hari-hariku.",
            "Aku ingin terus jadi tempat pulang yang paling nyaman buat kamu."
        ],
        closer: [
            "Selalu sayang kamu, hari ini dan seterusnya. 🤍",
            "Peluk jauh dari aku, Sayang. ❤️"
        ]
    },
    funny: {
        opener: [
            "Woy sayang, ini surat resmi dari pacarmu yang paling receh sedunia.",
            "Halo Sayang, laporan cinta hari ini akan segera dimulai."
        ],
        body: [
            "Aku udah cek statistik, kamu tetap juara satu paling ganteng versi aku.",
            "Kalau ada lomba paling bucin, aku yakin menang telak gara-gara kamu.",
            "Jujur, mikirin kamu itu udah jadi kegiatan harian wajib, kayak gosok gigi.",
            "Kadang aku ketawa sendiri inget kelakuan kamu yang random banget.",
            "Level gemesku ke kamu udah overload, tolong disikapi dengan bijak.",
            "PIN rahasia hatiku cuma satu: nama kamu, disimpen permanen."
        ],
        closer: [
            "Sekian laporan cinta hari ini, semoga lulus sensor gemas. 😜",
            "Dari pacarmu yang bucin akut. 🤍"
        ]
    },
    grateful: {
        opener: [
            "Sayang, aku cuma mau bilang terima kasih hari ini.",
            "Untuk Kamu, dengan penuh rasa syukur..."
        ],
        body: [
            "Terima kasih sudah sabar menghadapi semua drama kecilku.",
            "Terima kasih sudah selalu ada, bahkan di hari-hari yang nggak mudah.",
            "Aku bersyukur banget bisa kenal dan dekat sama kamu sejauh ini.",
            "Setiap perhatian kecil yang kamu kasih selalu berarti besar buatku.",
            "Terima kasih sudah percaya dan terus mendukung apa pun yang aku kerjakan.",
            "Aku belajar banyak hal baik tentang cinta gara-gara caramu memperlakukan aku."
        ],
        closer: [
            "Makasih sudah jadi orang yang aku kenal sekarang. 🤍",
            "Bersyukur banget ada kamu. ❤️"
        ]
    },
    future: {
        opener: [
            "Sayang, coba bayangin masa depan kita sebentar ya...",
            "Untuk Kamu, tentang apa yang aku harap ke depannya..."
        ],
        body: [
            "Aku ingin kita masih saling cerita hal-hal kecil bertahun-tahun dari sekarang.",
            "Semoga masih banyak tempat baru yang bisa kita datangi berdua.",
            "Aku ingin terus ada buat lihat kamu tumbuh jadi versi terbaik dirimu.",
            "Semoga jalan kita selalu ketemu lagi, sejauh apa pun kita melangkah sendiri-sendiri.",
            "Aku berharap suatu hari nanti kita bisa lihat balik semua ini dan tersenyum.",
            "Semoga kita masih saling memilih, bahkan di hari-hari yang berat sekalipun."
        ],
        closer: [
            "Sampai ketemu di banyak babak berikutnya, Sayang. 🤍",
            "I hope I get to see you again and again. ❤️"
        ]
    }
};


// KONFIGURASI PENGIRIMAN "HARAPAN" KE EMAIL ARA (via Formspree)
// Setiap Sandy submit, Ara otomatis dapat email berisi jawabannya.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/maeybdgw";


// DATA GALLERY (Halaman Gallery)
const galleryData = [
    {
        file: "foto/Pindah ke WA juga kan.jpeg",
        title: "💬 Chat Awal Kenalan",
        date: "11 April",
        caption: "Moment kamu minta WA aku, HAHAHA 😋"
    },
    {
        file: "foto/tiket nonton.jpeg",
        title: "🎬 Nonton Pertama Kali",
        date: "5 Agustus",
        caption: "Nonton Spiderman di Ciwalk"
    },
    {
        file: "foto/main di bdg.jpeg",
        title: "🖼️ Main di Museum NuArt",
        date: "5 Agustus",
        caption: "Jujur gak nyangka karena beneran disamperin ke Bandung"
    },
    {
        file: "foto/di mescusuar.jpeg",
        title: "📸 Foto Favorit Aku",
        date: "Momen Berkesan",
        caption: "Foto ini tempat bersejarah eak wkwk 🤍"
    },
    {
        file: "foto/Photobox.jpeg",
        title: "🤪 Photobox Bareng",
        date: "Momen Berkesan",
        caption: "Ini moment braga date dan photobox, hahaha"
    },
    {
        file: "foto/foto koran.jpeg",
        title: "🤍 Foto Koran Pertama",
        date: "Momen Berkesan",
        caption: "Next foto ulang soalnya baru paham sistemnya, tp gapapa tetap memorable"
    }
];
