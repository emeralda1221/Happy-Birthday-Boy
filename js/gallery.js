function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    grid.innerHTML = "";

    galleryData.forEach((item, idx) => {
        const fileBadge = item.title; // caption tulisan tangan di bawah polaroid
        const div = document.createElement("div");
        div.className = "gallery-item";
        div.innerHTML = `
            <img src="${item.file}" data-title="${item.title}" data-date="${item.date}" data-caption="${item.caption}" alt="${item.title.replace(/[^\p{L}\p{N} .]/gu, "").trim()}">
            <span class="gallery-badge">${fileBadge}</span>
        `;
        grid.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", renderGallery);

// Script ini dimuat di akhir <body> (setelah semua HTML ter-parse), jadi
// DOM sudah siap sekarang juga. Kita panggil langsung (bukan cuma nunggu
// DOMContentLoaded) supaya .gallery-item sudah ADA sebelum js/ui-core.js
// jalan memasang event klik untuk fullscreen viewer.
renderGallery();
