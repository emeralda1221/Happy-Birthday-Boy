        document.addEventListener("DOMContentLoaded", () => {
            const birthdayModal = document.getElementById("birthdayMessageModal");
            const readBtn = document.getElementById("readBirthdayMessageBtn");
            const closeBtn = document.getElementById("closeBirthdayMessageBtn");
            if (readBtn && birthdayModal) readBtn.addEventListener("click", () => birthdayModal.classList.add("show"));
            if (closeBtn && birthdayModal) closeBtn.addEventListener("click", () => birthdayModal.classList.remove("show"));
            if (birthdayModal) birthdayModal.addEventListener("click", (e) => {
                if (e.target === birthdayModal) birthdayModal.classList.remove("show");
            });
        });

        document.addEventListener("DOMContentLoaded", () => {
            const recapVideo = document.getElementById("recapVideo");
            const videoErrorNote = document.getElementById("videoErrorNote");
            if (!recapVideo) return;

            recapVideo.addEventListener("error", () => {
                if (videoErrorNote) videoErrorNote.style.display = "block";
                console.error("Recap video gagal dimuat:", recapVideo.currentSrc || "vidio/recap.mp4");
            });

            recapVideo.addEventListener("loadeddata", () => {
                if (videoErrorNote) videoErrorNote.style.display = "none";
            });
        });
