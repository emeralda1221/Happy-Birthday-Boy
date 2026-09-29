        let isSpinning = false;
        let spinAngle = 0;

        function startSpinWheel() {
            document.getElementById("gameSelect").style.display = "none";
            document.getElementById("spinWheelBox").style.display = "block";
            drawSpinWheel(0);
        }

        function drawSpinWheel(angle) {
            const canvas = document.getElementById("spinCanvas");
            const ctx = canvas.getContext("2d");
            const center = canvas.width / 2;
            const radius = center - 5;
            const sliceAngle = (2 * Math.PI) / spinSlices.length;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.translate(center, center);
            ctx.rotate(angle);

            for (let i = 0; i < spinSlices.length; i++) {
                ctx.beginPath();
                ctx.fillStyle = spinColors[i];
                ctx.moveTo(0, 0);
                ctx.arc(0, 0, radius, i * sliceAngle, (i + 1) * sliceAngle);
                ctx.lineTo(0, 0);
                ctx.fill();
                ctx.stroke();

                ctx.save();
                ctx.rotate(i * sliceAngle + sliceAngle / 2);
                ctx.textAlign = "right";
                ctx.fillStyle = "#3A2E28";
                ctx.font = "bold 12px sans-serif";
                ctx.fillText(isSpinning ? "❓" : "?", radius - 15, 5);
                ctx.restore();
            }
            ctx.restore();

            ctx.beginPath();
            ctx.arc(center, center, 20, 0, 2 * Math.PI);
            ctx.fillStyle = "#FDFBF6";
            ctx.fill();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#3A2E28";
            ctx.stroke();

            ctx.fillStyle = "#ffffff";
            ctx.font = "14px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("💖", center, center);
        }

        function spinTheWheel() {
            if (isSpinning) return;
            isSpinning = true;
            document.getElementById("spinBtn").disabled = true;
            document.getElementById("spinResultCard").style.borderColor = "#6F8A5E";
            document.getElementById("spinResultText").innerHTML = "🌀 <i>Roda sedang berputar mencari isi hati...</i>";

            let currentAngle = spinAngle;
            let randomAdditionalSpins = Math.floor(Math.random() * 5) + 5;
            let winningIndex = Math.floor(Math.random() * spinSlices.length);
            const sliceAngle = (2 * Math.PI) / spinSlices.length;

            let targetAngle = (2 * Math.PI * randomAdditionalSpins) + (2 * Math.PI - (winningIndex * sliceAngle + sliceAngle / 2));

            let startTime = null;
            let duration = 3500;

            function animateSpin(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = timestamp - startTime;
                let easeOut = 1 - Math.pow(1 - Math.min(progress / duration, 1), 3);

                spinAngle = currentAngle + (targetAngle - currentAngle) * easeOut;
                drawSpinWheel(spinAngle);

                if (progress < duration) {
                    requestAnimationFrame(animateSpin);
                } else {
                    isSpinning = false;
                    document.getElementById("spinBtn").disabled = false;

                    const chosenText = spinSlices[winningIndex];
                    document.getElementById("spinResultCard").style.borderColor = "#A86B26";
                    document.getElementById("spinResultText").innerHTML = `✨ <b>Pesan Rahasia Terbuka:</b><br>"${chosenText}"`;
                    fireConfetti();
                }
            }
            requestAnimationFrame(animateSpin);
        }

