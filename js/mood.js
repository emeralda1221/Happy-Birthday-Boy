        function selectMood(type) {
            const respBox = document.getElementById("moodResponse");
            const title = document.getElementById("moodTitle");
            const msg = document.getElementById("moodMessage");

            document.querySelectorAll(".mood-btn").forEach(btn => btn.classList.remove("selected"));

            title.innerText = moodData[type].title;
            msg.innerText = moodData[type].msg;
            respBox.style.display = "block";
            fireConfetti();
        }

