        const wishModal = document.getElementById("wishModal");
        const wishModalTitle = document.getElementById("wishModalTitle");
        const wishModalText = document.getElementById("wishModalText");
        const closeWishModalBtn = document.getElementById("closeWishModalBtn");

        function openWishModal(title, text) {
            wishModalTitle.innerText = title;
            wishModalText.innerText = text;
            wishModal.classList.add("active");
            fireConfetti();
        }

        closeWishModalBtn.onclick = () => {
            wishModal.classList.remove("active");
        };

        wishModal.onclick = (e) => {
            if (e.target === wishModal) {
                wishModal.classList.remove("active");
            }
        };


// NOTIFIKASI HEADER (LIKE)
        const loveHeaderBtn = document.getElementById("loveHeaderBtn");
        const fakeNotif = document.getElementById("fakeNotif");

        if (loveHeaderBtn && fakeNotif) {
            loveHeaderBtn.onclick = () => {
                fireConfetti();
                fakeNotif.classList.add("show");
                setTimeout(() => fakeNotif.classList.remove("show"), 4000);
            };
        }


// TIUP LILIN
        const blowCandleBtn = document.getElementById("blowCandleBtn");
        const candleFlame = document.getElementById("candleFlame");
        const wishText = document.getElementById("wishText");

        if (blowCandleBtn && candleFlame) {
            blowCandleBtn.onclick = () => {
                candleFlame.classList.add("off");
                wishText.style.display = "block";
                blowCandleBtn.innerText = "💨 Lilin Sudah Ditiup!";
                blowCandleBtn.style.opacity = "0.6";
                blowCandleBtn.disabled = true;

                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
            };
        }


// SPLASH SCREEN
        // Splash menunggu satu ketukan: ketukan itu yang "mengizinkan" browser
        // memutar lagu, lalu splash ditutup.
        window.addEventListener("DOMContentLoaded", () => {
            const splash = document.getElementById("splash");
            const openBtn = document.getElementById("splashOpenBtn");
            const status = document.getElementById("splashStatus");
            if (!splash) return;

            setTimeout(() => {
                if (status) status.innerText = "ketuk untuk membuka";
                splash.classList.add("ready");
            }, 1200);

            const openSplash = () => {
                if (typeof startMusic === "function") startMusic();
                splash.classList.add("hide");
            };
            splash.addEventListener("click", openSplash, { once: true });
            if (openBtn) openBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                openSplash();
            }, { once: true });
        });


// KONFETI HELPER
        function fireConfetti() {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }


// NAVIGASI ANTAR HALAMAN (BOTTOM NAV)
        const pages = document.querySelectorAll(".page");
        const nav = document.querySelectorAll("nav button");

        function switchTab(pageId) {
            pages.forEach(p => p.classList.remove("active"));
            nav.forEach(n => n.classList.remove("active"));

            const targetBtn = document.querySelector(`nav button[data-page="${pageId}"]`);
            const targetPage = document.getElementById(pageId);

            // Halaman seperti "guestbook" sengaja tidak ada tombolnya di bottom nav
            // (diakses lewat tombol khusus di halaman Wish), jadi targetBtn boleh null.
            // Yang wajib ada cuma targetPage-nya.
            if (targetPage) {
                targetPage.classList.add("active");
                if (targetBtn) targetBtn.classList.add("active");
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        nav.forEach(btn => {
            btn.onclick = () => switchTab(btn.dataset.page);
        });


// BUKA SURAT + EFEK KETIK
        const openBtn = document.getElementById("openLetterBtn");
        if (openBtn) {
            openBtn.onclick = () => {
                switchTab("letter");
                fireConfetti();
            };
        }

        const letterText = `Hai Sayang...

Selamat ulang tahun yaa 🤍

Waktu mikirin mau kasih kado apa, jujur aku bingung banget. Aku tahu kamu bisa beli apa saja yang kamu mau. Makanya ketimbang barang, aku pengin kasih sesuatu yang ada effort dan cerita di dalamnya.

Akhirnya jadilah web sederhana ini. Anggap saja ini kado kecil dari aku, sambil aku belajar ngoding dikit-dikit, hehe. Walaupun simpel, tapi setiap tulisan di sini beneran aku buat khusus untuk kamu.

Being with you feels like home. Thank you for being my safe place, my favorite notification, and my biggest smile. Terima kasih sudah hadir dan menjadi bagian dari cerita yang nggak pernah aku sangka sebelumnya.

Semoga di usiamu yang baru ini, semua doa baikmu satu per satu dikabulkan Allah. Semoga kamu selalu sehat, bahagia, sukses, dan selalu dikelilingi oleh orang-orang baik. I’m so proud of everything you are and everything you’re becoming.

Happy Birthday, my favorite person! 🤍`;

        let isTyped = false;
        function typeWriter() {
            if (isTyped) return;
            isTyped = true;
            let i = 0;
            const elem = document.getElementById("typedText");
            elem.innerHTML = "";

            function type() {
                if (i < letterText.length) {
                    elem.innerHTML += letterText.charAt(i) === '\n' ? '<br>' : letterText.charAt(i);
                    i++;
                    setTimeout(type, 40);
                }
            }
            type();
        }

        const cover = document.querySelector(".cover");
        const paper = document.querySelector(".paper");
        if (cover && paper) {
            cover.onclick = () => {
                paper.style.display = "block";
                cover.style.transform = "rotateX(180deg)";
                cover.style.opacity = "0.3";
                fireConfetti();
                typeWriter();
            };
        }


// FULLSCREEN GALLERY VIEWER
        const viewer = document.getElementById("viewer");
        const viewerImg = document.getElementById("viewerImg");
        const viewerTitle = document.getElementById("viewerTitle");
        const viewerDate = document.getElementById("viewerDate");
        const viewerCaption = document.getElementById("viewerCaption");
        const closeViewer = document.getElementById("closeViewer");
        const galleryGrid = document.getElementById("galleryGrid");

        // Pakai event delegation 
        if (galleryGrid && viewer && viewerImg) {
            galleryGrid.addEventListener("click", (e) => {
                const item = e.target.closest(".gallery-item");
                if (!item || !galleryGrid.contains(item)) return;

                const img = item.querySelector("img");
                if (!img) return;

                viewerImg.src = img.src;
                viewerTitle.innerText = img.dataset.title || "Memory Moment";
                viewerDate.innerText = img.dataset.date ? "📅 " + img.dataset.date : "";
                viewerCaption.innerText = img.dataset.caption || "";

                viewer.classList.add("show");
            });
        }

        if (closeViewer && viewer) {
            closeViewer.onclick = () => viewer.classList.remove("show");
        }


// MENU MODAL GAME & KUIS (BUKA/TUTUP)
        const openMenuBtn = document.getElementById("openMenuBtn");
        const menuModal = document.getElementById("menuModal");
        const closeMenuBtn = document.getElementById("closeMenuBtn");

        if (openMenuBtn && menuModal) {
            openMenuBtn.onclick = () => {
                menuModal.classList.add("active");
                backToGameSelect();
            };
        }

        if (closeMenuBtn) {
            closeMenuBtn.onclick = () => menuModal.classList.remove("active");
        }


// KEMBALI KE PILIHAN GAME (reset semua kotak game)
        function backToGameSelect() {
            document.getElementById("gameSelect").style.display = "flex";
            document.getElementById("pinBox").style.display = "none";
            document.getElementById("quizBox").style.display = "none";
            document.getElementById("quizResult").style.display = "none";
            document.getElementById("reasonsBox").style.display = "none";
            document.getElementById("pinBoxDuyung").style.display = "none";
            document.getElementById("duyungSlider").style.display = "none";
            document.getElementById("certificateBox").style.display = "none";
            document.getElementById("arcadeGameBox").style.display = "none";
            document.getElementById("shooterGameBox").style.display = "none";
            document.getElementById("spinWheelBox").style.display = "none";
            document.getElementById("memoryGameBox").style.display = "none";
            document.getElementById("letterGenBox").style.display = "none";
            stopArcadeGame();
            stopShooterGame();
            stopMemoryGame();
        }

