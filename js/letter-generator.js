let lastLetterMood = null;

function startLetterGenerator() {
    document.getElementById("gameSelect").style.display = "none";
    document.getElementById("letterGenBox").style.display = "block";
    document.getElementById("letterMoodSelect").style.display = "flex";
    document.getElementById("generatedLetterCard").style.display = "none";
}

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickRandomN(arr, n) {
    const copy = [...arr];
    const result = [];
    for (let i = 0; i < n && copy.length > 0; i++) {
        const idx = Math.floor(Math.random() * copy.length);
        result.push(copy[idx]);
        copy.splice(idx, 1);
    }
    return result;
}

function generateLetter(mood) {
    lastLetterMood = mood;
    const pool = letterPools[mood];
    if (!pool) return;

    const opener = pickRandom(pool.opener);
    const bodyLines = pickRandomN(pool.body, Math.min(4, pool.body.length));
    const closer = pickRandom(pool.closer);

    const fullText = `${opener}\n\n${bodyLines.join(" ")}\n\n${closer}`;

    document.getElementById("letterMoodSelect").style.display = "none";
    const card = document.getElementById("generatedLetterCard");
    card.style.display = "block";
    document.getElementById("generatedLetterText").innerText = fullText;

    fireConfetti();
}

function regenerateLetter() {
    if (lastLetterMood) {
        generateLetter(lastLetterMood);
    }
}

function downloadLetterCard() {
    const cardElement = document.getElementById("downloadableLetterCard");
    html2canvas(cardElement, {
        backgroundColor: "#F7F1E3",
        scale: 2
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "Surat-Cinta-Untuk-Sandy.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        fireConfetti();
    });
}
