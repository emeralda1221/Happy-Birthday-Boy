        function startQuiz(type) {
            activeQuizType = type;
            currentQuizIndex = 0;
            activeQuiz = (type === 'moment') ? quizDataMoments : quizDataAboutMe;

            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("pinBox").style.display = "none";
            document.getElementById("quizBox").style.display = "block";
            document.getElementById("quizResult").style.display = "none";
            document.getElementById("reasonsBox").style.display = "none";
            document.getElementById("certificateBox").style.display = "none";
            document.getElementById("arcadeGameBox").style.display = "none";
            document.getElementById("shooterGameBox").style.display = "none";
            document.getElementById("spinWheelBox").style.display = "none";
            document.getElementById("memoryGameBox").style.display = "none";
            document.getElementById("letterGenBox").style.display = "none";
            loadQuiz();
        }

        function showPinPrompt() {
            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("pinBox").style.display = "block";
            document.getElementById("quizBox").style.display = "none";
            document.getElementById("quizResult").style.display = "none";
            document.getElementById("reasonsBox").style.display = "none";
            document.getElementById("certificateBox").style.display = "none";
            document.getElementById("arcadeGameBox").style.display = "none";
            document.getElementById("shooterGameBox").style.display = "none";
            document.getElementById("spinWheelBox").style.display = "none";
            document.getElementById("memoryGameBox").style.display = "none";
            document.getElementById("letterGenBox").style.display = "none";
        }

        function verifyPin() {
            const inputVal = document.getElementById("pinInput").value.trim();
            if (inputVal === "bebek") {
                openReasons();
            } else {
                alert("Tetot! PIN Salah! 😜");
            }
        }

        function openReasons() {
            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("pinBox").style.display = "none";
            document.getElementById("quizBox").style.display = "none";
            document.getElementById("quizResult").style.display = "none";
            document.getElementById("certificateBox").style.display = "none";
            document.getElementById("arcadeGameBox").style.display = "none";
            document.getElementById("shooterGameBox").style.display = "none";
            document.getElementById("spinWheelBox").style.display = "none";
            document.getElementById("memoryGameBox").style.display = "none";
            document.getElementById("letterGenBox").style.display = "none";

            const reasonsBox = document.getElementById("reasonsBox");
            const reasonsList = document.getElementById("reasonsList");
            reasonsList.innerHTML = "";

            reasonsData.forEach((reason, idx) => {
                const card = document.createElement("div");
                card.className = "reason-card";
                card.innerHTML = `<div class="reason-num">${idx + 1}</div><div class="reason-text">${reason}</div>`;
                reasonsList.appendChild(card);
            });

            reasonsBox.style.display = "flex";
            fireConfetti();
        }

        function downloadReasonsCard() {
            const cardElement = document.getElementById("downloadableReasonsCard");
            html2canvas(cardElement, {
                backgroundColor: "#F7F1E3",
                scale: 2
            }).then(canvas => {
                const link = document.createElement("a");
                link.download = "10-Reasons-Why-I-Love-You-Sandy.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
                fireConfetti();
            });
        }

        function openCertificateCard() {
            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("pinBox").style.display = "none";
            document.getElementById("quizBox").style.display = "none";
            document.getElementById("quizResult").style.display = "none";
            document.getElementById("reasonsBox").style.display = "none";
            document.getElementById("pinBoxDuyung").style.display = "none";
            document.getElementById("duyungSlider").style.display = "none";
            document.getElementById("arcadeGameBox").style.display = "none";
            document.getElementById("shooterGameBox").style.display = "none";
            document.getElementById("spinWheelBox").style.display = "none";
            document.getElementById("memoryGameBox").style.display = "none";
            document.getElementById("letterGenBox").style.display = "none";

            document.getElementById("certificateBox").style.display = "block";
            fireConfetti();
        }

        function downloadCertificate() {
            const certElement = document.getElementById("downloadableCertificate");
            html2canvas(certElement, {
                backgroundColor: "#F7F1E3",
                scale: 2
            }).then(canvas => {
                const link = document.createElement("a");
                link.download = "Sertifikat-Pacar-Terhebat-Sandy.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
                fireConfetti();
            });
        }

        function loadQuiz() {
            const currentQuiz = activeQuiz[currentQuizIndex];
            document.getElementById("quizQuestion").innerText = currentQuiz.q;
            const optionsBox = document.getElementById("quizOptions");
            optionsBox.innerHTML = "";

            currentQuiz.options.forEach((opt, idx) => {
                const btn = document.createElement("button");
                btn.className = "quiz-btn";
                btn.innerText = opt;
                btn.onclick = () => checkAnswer(idx);
                optionsBox.appendChild(btn);
            });
        }

        function checkAnswer(selectedIdx) {
            if (selectedIdx === activeQuiz[currentQuizIndex].correct) {
                fireConfetti();
                currentQuizIndex++;
                if (currentQuizIndex < activeQuiz.length) {
                    loadQuiz();
                } else {
                    document.getElementById("quizBox").style.display = "none";
                    const resultBox = document.getElementById("quizResult");
                    const resultTitle = document.getElementById("resultTitle");
                    const resultMsg = document.getElementById("quizResultMessage");

                    resultTitle.innerText = "🎉 SELAMAT!";
                    resultMsg.innerText = "Kamu berhasil menyelesaikan kuis ini dengan baik! 🤍";
                    resultBox.style.display = "block";
                    fireConfetti();
                }
            } else {
                alert("Tetot! Coba lagi ya sayang! 😜");
            }
        }
