        let currentSlideDuyung = 1;
        const totalSlidesDuyung = 6;

        function showPinDuyung() {
            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("pinBox").style.display = "none";
            document.getElementById("quizBox").style.display = "none";
            document.getElementById("quizResult").style.display = "none";
            document.getElementById("reasonsBox").style.display = "none";
            document.getElementById("certificateBox").style.display = "none";
            document.getElementById("arcadeGameBox").style.display = "none";
            document.getElementById("shooterGameBox").style.display = "none";
            document.getElementById("spinWheelBox").style.display = "none";
            document.getElementById("memoryGameBox").style.display = "none";
            document.getElementById("letterGenBox").style.display = "none";
            document.getElementById("pinBoxDuyung").style.display = "block";
            document.getElementById("duyungSlider").style.display = "none";
        }

        function verifyPinDuyung() {
            const val = document.getElementById("pinInputDuyung").value.trim().toLowerCase();
            if (val === "mermaid") {
                openDuyungSlides();
            } else {
                alert("Salah wkwkwk! Clue password-nya: gaboleh kena air");
                document.getElementById("pinInputDuyung").value = "";
            }
        }

        function openDuyungSlides() {
            document.getElementById("pinBoxDuyung").style.display = "none";
            document.getElementById("duyungSlider").style.display = "block";
            currentSlideDuyung = 1;
            showSlideDuyung(currentSlideDuyung);
            fireConfetti();
        }

        function showSlideDuyung(n) {
            for (let i=1; i<=totalSlidesDuyung; i++) {
                document.getElementById("slide"+i).style.display = "none";
            }
            document.getElementById("slide"+n).style.display = "flex";
        }

        function nextSlide() {
            if (currentSlideDuyung < totalSlidesDuyung) {
                currentSlideDuyung++;
                showSlideDuyung(currentSlideDuyung);
            }
        }

        function prevSlide() {
            if (currentSlideDuyung> 1) {
                currentSlideDuyung--;
                showSlideDuyung(currentSlideDuyung);
            }
        }
