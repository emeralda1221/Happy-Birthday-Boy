let memoryCards = [];
let memoryFlipped = [];
let memoryMatchedCount = 0;
let memoryMoves = 0;
let memoryTimerInterval = null;
let memorySeconds = 0;
let memoryLocked = false;

function startMemoryGame() {
    document.getElementById("gameSelect").style.display = "none";
    document.getElementById("memoryGameBox").style.display = "block";
    buildMemoryBoard(false);
}

function stopMemoryGame() {
    clearInterval(memoryTimerInterval);
    memoryTimerInterval = null;
}

function buildMemoryBoard(autoStart) {
    stopMemoryGame();
    memoryFlipped = [];
    memoryMatchedCount = 0;
    memoryMoves = 0;
    memorySeconds = 0;
    memoryLocked = false;

    document.getElementById("memoryMoves").innerText = "Langkah: 0";
    document.getElementById("memoryTimer").innerText = "Waktu: 0s";
    document.getElementById("memoryMatched").innerText = `Cocok: 0/${memoryGameImages.length}`;

    // Buat pasangan kartu (setiap foto muncul 2x), lalu acak urutannya
    const pairSource = memoryGameImages.flatMap((src, idx) => ([
        { id: idx, src },
        { id: idx, src }
    ]));
    for (let i = pairSource.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairSource[i], pairSource[j]] = [pairSource[j], pairSource[i]];
    }
    memoryCards = pairSource;

    const grid = document.getElementById("memoryGrid");
    grid.innerHTML = "";
    memoryCards.forEach((card, idx) => {
        const cardEl = document.createElement("div");
        cardEl.className = "memory-card";
        cardEl.dataset.index = idx;
        cardEl.innerHTML = `
            <div class="memory-card-inner">
                <div class="memory-card-front">🧩</div>
                <div class="memory-card-back"><img src="${card.src}" alt="Memory"></div>
            </div>
        `;
        cardEl.onclick = () => flipMemoryCard(idx, cardEl);
        grid.appendChild(cardEl);
    });

    if (autoStart) startMemoryTimer();
}

function initMemoryGame() {
    buildMemoryBoard(true);
}

function startMemoryTimer() {
    memoryTimerInterval = setInterval(() => {
        memorySeconds++;
        document.getElementById("memoryTimer").innerText = "Waktu: " + memorySeconds + "s";
    }, 1000);
}

function flipMemoryCard(idx, cardEl) {
    if (!memoryTimerInterval && memorySeconds === 0) startMemoryTimer();
    if (memoryLocked) return;
    if (cardEl.classList.contains("flipped") || cardEl.classList.contains("matched")) return;
    if (memoryFlipped.length >= 2) return;

    cardEl.classList.add("flipped");
    memoryFlipped.push({ idx, cardEl });

    if (memoryFlipped.length === 2) {
        memoryMoves++;
        document.getElementById("memoryMoves").innerText = "Langkah: " + memoryMoves;

        const [first, second] = memoryFlipped;
        const isMatch = memoryCards[first.idx].id === memoryCards[second.idx].id;

        if (isMatch) {
            first.cardEl.classList.add("matched");
            second.cardEl.classList.add("matched");
            memoryFlipped = [];
            memoryMatchedCount++;
            document.getElementById("memoryMatched").innerText = `Cocok: ${memoryMatchedCount}/${memoryGameImages.length}`;
            fireConfetti();

            if (memoryMatchedCount === memoryGameImages.length) {
                stopMemoryGame();
                setTimeout(() => {
                    alert(`🎉 Selesai! Kamu berhasil dalam ${memoryMoves} langkah dan ${memorySeconds} detik!`);
                    fireConfetti();
                }, 300);
            }
        } else {
            memoryLocked = true;
            setTimeout(() => {
                first.cardEl.classList.remove("flipped");
                second.cardEl.classList.remove("flipped");
                memoryFlipped = [];
                memoryLocked = false;
            }, 800);
        }
    }
}
