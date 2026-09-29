const GUESTBOOK_KEY = "sandy_birthday_harapan";

function loadGuestbookEntries() {
    try {
        const raw = localStorage.getItem(GUESTBOOK_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error("Gagal membaca harapan tersimpan:", e);
        return [];
    }
}

function saveGuestbookEntries(entries) {
    try {
        localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(entries));
    } catch (e) {
        console.error("Gagal menyimpan harapan:", e);
    }
}

function renderGuestbook() {
    const list = document.getElementById("guestbookList");
    if (!list) return;
    const entries = loadGuestbookEntries();

    if (entries.length === 0) {
        list.innerHTML = `<p class="guestbook-empty">Belum ada harapan yang ditulis di sini. 🌱</p>`;
        return;
    }

    list.innerHTML = "";
    entries.slice().reverse().forEach((entry) => {
        const card = document.createElement("div");
        card.className = "guestbook-card";
        card.innerHTML = `
            <div class="guestbook-card-header">
                <span class="guestbook-card-name">Harapanmu</span>
                <span class="guestbook-card-date">${entry.date}</span>
            </div>
            <p class="guestbook-card-message">${entry.message}</p>
        `;
        list.appendChild(card);
    });
}

// Kirim salinan jawaban ke email Ara lewat Formspree (kalau sudah dikonfigurasi)
async function sendToFormspree(message) {
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes("GANTI_DENGAN_ID_FORM_KAMU")) {
        return { ok: false, reason: "not_configured" };
    }
    try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                subject: "Harapan baru dari Sandy 🌟",
                message: message,
                dikirim_pada: new Date().toLocaleString("id-ID")
            })
        });
        return { ok: res.ok, reason: res.ok ? "sent" : "server_error" };
    } catch (e) {
        console.error("Gagal mengirim ke Formspree:", e);
        return { ok: false, reason: "network_error" };
    }
}

function setGuestbookStatus(text, isError) {
    const statusEl = document.getElementById("guestbookStatus");
    if (!statusEl) return;
    statusEl.innerText = text;
    statusEl.style.color = isError ? "#A8423F" : "#6F8A5E";
}

async function submitGuestbookEntry() {
    const messageInput = document.getElementById("guestbookMessage");
    const message = messageInput.value.trim();

    if (!message) {
        alert("Tulis dulu harapanmu ya, Sayang! 🤍");
        return;
    }

    const submitBtn = document.getElementById("guestbookSubmitBtn");
    submitBtn.disabled = true;
    setGuestbookStatus("Mengirim...", false);

    // 1) Selalu simpan ke localStorage dulu, apa pun hasil pengiriman ke Formspree
    const entries = loadGuestbookEntries();
    entries.push({
        message,
        date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
    });
    saveGuestbookEntries(entries);

    // 2) Coba kirim ke email Ara via Formspree
    const result = await sendToFormspree(message);

    if (result.ok) {
        setGuestbookStatus("Terkirim ke Emeralda! ✅", false);
    } else if (result.reason === "not_configured") {
        setGuestbookStatus("Tersimpan di browser ini (pengiriman email belum di-setup Ara). ✅", true);
    } else {
        setGuestbookStatus("Tersimpan di browser ini, tapi gagal terkirim lewat email. Coba lagi nanti ya.", true);
    }

    messageInput.value = "";
    renderGuestbook();
    fireConfetti();
    submitBtn.disabled = false;
}

document.addEventListener("DOMContentLoaded", () => {
    renderGuestbook();

    const submitBtn = document.getElementById("guestbookSubmitBtn");
    if (submitBtn) submitBtn.onclick = submitGuestbookEntry;

    const openBtn = document.getElementById("openGuestbookBtn");
    if (openBtn) {
        openBtn.onclick = () => {
            switchTab("guestbook");
            renderGuestbook();
        };
    }
});
