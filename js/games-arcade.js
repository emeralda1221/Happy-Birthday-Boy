        let arcadeInterval = null;
        let spawnTimer = null;
        let gameLoopAnim = null;
        let basket = { x: 120, y: 350, w: 90, h: 22, speed: 6 };
        let items = [];
        let score = 0;
        let timeLeft = 25;
        let gameActive = false;
        const targetScore = 15;
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        function startArcadeGame() {
            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("arcadeGameBox").style.display = "block";
            resetArcadeStats();
        }

        function resetArcadeStats() {
            score = 0;
            timeLeft = 25;
            items = [];
            basket.x = 115;
            gameActive = false;
            document.getElementById("arcadeScore").innerText = "Skor: " + score;
            document.getElementById("arcadeTimer").innerText = "Waktu: " + timeLeft + "s";
            document.getElementById("arcadeStartBtn").style.display = "block";
            drawGameInitial();
        }

        function drawGameInitial() {
             ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Gambar Emoji Keranjang TANPA background kotak
            ctx.font = "32px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("🧺", basket.x + basket.w / 2, basket.y + basket.h / 2);

            // Teks Petunjuk Awal
            ctx.fillStyle = "#ffffff";
            ctx.font = "14px sans-serif";
            ctx.fillText("Tekan Mulai untuk Menangkap Cinta!", canvas.width / 2, canvas.height / 2);
        }

        function initArcadeGame() {
            resetArcadeStats();
            gameActive = true;
            document.getElementById("arcadeStartBtn").style.display = "none";

            arcadeInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("arcadeTimer").innerText = "Waktu: " + timeLeft + "s";
                if (timeLeft <= 0) {
                    endArcadeGame();
                }
            }, 1000);

            spawnTimer = setInterval(() => {
                if (!gameActive) return;
                const types = ["❤️", "🍫", "🎁"];
                const t = types[Math.floor(Math.random() * types.length)];
                items.push({
                    x: Math.random() * (canvas.width - 30),
                    y: -20,
                    size: 26,
                    speed: 1.5 + Math.random() * 1.8,
                    type: t
                });
            }, 950);

            runGameLoop();
        }

        function runGameLoop() {
            if (!gameActive) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = items.length - 1; i>= 0; i--) {
                let itm = items[i];
                itm.y += itm.speed;

                ctx.font = itm.size + "px sans-serif";
                ctx.fillText(itm.type, itm.x, itm.y);

                if (
                    itm.y + itm.size>= basket.y &&
                    itm.y <= basket.y + basket.h &&
                    itm.x + itm.size>= basket.x &&
                    itm.x <= basket.x + basket.w
                ) {
                    score += 1;
                    document.getElementById("arcadeScore").innerText = "Skor: " + score;
                    items.splice(i, 1);
                } else if (itm.y> canvas.height) {
                    items.splice(i, 1);
                }
            }

            ctx.font = "24px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("🧺", basket.x + basket.w / 2, basket.y + basket.h / 2);
            gameLoopAnim = requestAnimationFrame(runGameLoop);
        }

        canvas.addEventListener("mousemove", (e) => {
            if (!gameActive) return;
            const rect = canvas.getBoundingClientRect();
            let rootX = e.clientX - rect.left;
            basket.x = rootX - basket.w / 2;
            if (basket.x < 0) basket.x = 0;
            if (basket.x> canvas.width - basket.w) basket.x = canvas.width - basket.w;
        });

        canvas.addEventListener("touchmove", (e) => {
            if (!gameActive) return;
            const rect = canvas.getBoundingClientRect();
            let rootX = e.touches[0].clientX - rect.left;
            basket.x = rootX - basket.w / 2;
            if (basket.x < 0) basket.x = 0;
            if (basket.x> canvas.width - basket.w) basket.x = canvas.width - basket.w;
            e.preventDefault();
        }, { passive: false });

        function endArcadeGame() {
            gameActive = false;
            clearInterval(arcadeInterval);
            clearInterval(spawnTimer);
            cancelAnimationFrame(gameLoopAnim);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#fbbf24";
            ctx.font = "16px bold sans-serif";
            ctx.textAlign = "center";

            if (score>= targetScore) {
                ctx.fillText("🎉 KEREN! TARGET MINIMAL TEMBUS!", canvas.width / 2, canvas.height / 2 - 20);
                ctx.fillStyle = "#ffffff";
                ctx.font = "13px sans-serif";
                ctx.fillText(`Skor kamu: ${score}. Terbukti sayang banget! 🤍`, canvas.width / 2, canvas.height / 2 + 10);
                fireConfetti();
            } else if (score> 0 && score < targetScore) {
                ctx.fillText("✨ YAH, BELUM CAPAI TARGET", canvas.width / 2, canvas.height / 2 - 20);
                ctx.fillStyle = "#ffffff";
                ctx.font = "13px sans-serif";
                ctx.fillText(`Skor kamu: ${score}. coba lagi ya sayang 😉`, canvas.width / 2, canvas.height / 2 + 10);
            } else {
                ctx.fillStyle = "#ff6b6b";
                ctx.fillText("⚠️ SKOR MASIH 0, BELUM TERBUKTI!", canvas.width / 2, canvas.height / 2 - 20);
                ctx.fillStyle = "#ffffff";
                ctx.font = "12px sans-serif";
                ctx.fillText("Wah, tangkap minimal 15 kado cintanya biar terbukti sayang ya! 😜", canvas.width / 2, canvas.height / 2 + 10);
            }
            document.getElementById("arcadeStartBtn").innerText = "Main Lagi 🔄";
            document.getElementById("arcadeStartBtn").style.display = "block";
        }

        function stopArcadeGame() {
            gameActive = false;
            clearInterval(arcadeInterval);
            clearInterval(spawnTimer);
            cancelAnimationFrame(gameLoopAnim);
        }

