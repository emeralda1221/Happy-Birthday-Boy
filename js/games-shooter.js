        // Deklarasi state game (sebelumnya belum dideklarasikan sehingga memicu ReferenceError)
        let shooterScore = 0, shooterTime = 20, shooterActive = false;
        let shooterInterval = null, shooterSpawnTimer = null;

        function startShooterGame() {
            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("shooterGameBox").style.display = "block";
            resetShooterStats();
        }

        function resetShooterStats() {
            shooterScore = 0;
            shooterTime = 20;
            shooterActive = false;
            document.getElementById("shooterScore").innerText = "Skor: " + shooterScore;
            document.getElementById("shooterTimer").innerText = "Waktu: " + shooterTime + "s";
            document.getElementById("shooterStartBtn").style.display = "block";
            document.getElementById("shooterPlayArea").innerHTML = "<div style='color:#4F6D8C; text-align:center; padding-top:110px; font-size:13px;'>Tekan Mulai untuk menangkap gombalan!</div>";
        }

        function initShooterGame() {
            resetShooterStats();
            shooterActive = true;
            document.getElementById("shooterStartBtn").style.display = "none";
            const playArea = document.getElementById("shooterPlayArea");
            playArea.innerHTML = "";

            shooterInterval = setInterval(() => {
                shooterTime--;
                document.getElementById("shooterTimer").innerText = "Waktu: " + shooterTime + "s";
                if (shooterTime <= 0) {
                    endShooterGame();
                }
            }, 1000);

            shooterSpawnTimer = setInterval(() => {
                if (!shooterActive) return;
                spawnBubble(playArea);
            }, 900);
        }

        function spawnBubble(area) {
            const bubble = document.createElement("div");
            bubble.className = "bubble-target";
            const randomText = shooterTexts[Math.floor(Math.random() * shooterTexts.length)];
            bubble.innerText = randomText;

            const maxX = area.clientWidth - 85;
            const maxY = area.clientHeight - 85;
            const randomX = Math.max(5, Math.floor(Math.random() * maxX));
            const randomY = Math.max(5, Math.floor(Math.random() * maxY));

            bubble.style.left = randomX + "px";
            bubble.style.top = randomY + "px";

            bubble.onclick = () => {
                if (!shooterActive) return;
                shooterScore += 1;
                document.getElementById("shooterScore").innerText = "Skor: " + shooterScore;
                bubble.remove();
            };

            area.appendChild(bubble);

            setTimeout(() => {
                if (bubble.parentElement) {
                    bubble.remove();
                }
            }, 1200);
        }

        function endShooterGame() {
            shooterActive = false;
            clearInterval(shooterInterval);
            clearInterval(shooterSpawnTimer);

            const playArea = document.getElementById("shooterPlayArea");

            let messageStatus = "";
            if (shooterScore>= 5) {
                messageStatus = "Wah, terbukti kamu sayang banget sama aku! 🤍";
            } else if (shooterScore> 0) {
                messageStatus = "Cukup bagus, tapi tingkatkan lagi ya sayangnya! 😉";
            } else {
                messageStatus = "Skor 0? Wah, belum terbukti nih sayangnya, coba lagi ya! 😜";
            }

            playArea.innerHTML = `
                <div style="text-align:center; padding-top:80px; color:#A86B26; font-size:16px; font-weight:bold;">
                    ✨ WAKTU HABIS! ✨<br>
                    <span style="font-size:14px; color:#3A2E28; font-weight:normal; display:block; margin-top:8px;">Total Skor Gombalanmu: ${shooterScore}</span>
                    <span style="font-size:12px; color:#4F6D8C; display:block; margin-top:5px;">${messageStatus}</span>
                </div>
            `;
            document.getElementById("shooterStartBtn").innerText = "Main Lagi 🔄";
            document.getElementById("shooterStartBtn").style.display = "block";
            if (shooterScore>= 5) fireConfetti();
        }

        function stopShooterGame() {
            shooterActive = false;
            clearInterval(shooterInterval);
            clearInterval(shooterSpawnTimer);
        }
