        let currentSongIndex = 0;
        const bgMusic = document.getElementById("bgMusic");
        const songTitle = document.getElementById("songTitle");
        const songArtist = document.getElementById("songArtist");
        const playBtn = document.getElementById("playBtn");
        const lyricText = document.getElementById("lyricText");

        const playerCard = document.getElementById("musicPlayerCard");
        const togglePlayerBtn = document.getElementById("togglePlayerBtn");

        togglePlayerBtn.onclick = (e) => {
            e.stopPropagation();
            playerCard.classList.add("minimized");
        };

        playerCard.onclick = () => {
            if (playerCard.classList.contains("minimized")) {
                playerCard.classList.remove("minimized");
            }
        };

        const playlistModal = document.getElementById("playlistModal");
        const openPlaylistBtn = document.getElementById("openPlaylistBtn");
        const closePlaylistBtn = document.getElementById("closePlaylistBtn");
        const playlistItemsContainer = document.getElementById("playlistItems");

        openPlaylistBtn.onclick = (e) => {
            e.stopPropagation();
            renderPlaylistModal();
            playlistModal.classList.add("active");
        };

        closePlaylistBtn.onclick = () => {
            playlistModal.classList.remove("active");
        };

        function renderPlaylistModal() {
            playlistItemsContainer.innerHTML = "";
            playlist.forEach((song, idx) => {
                const item = document.createElement("div");
                const isPlaying = idx === currentSongIndex;
                item.className = `playlist-item ${isPlaying ? 'playing' : ''}`;

                item.innerHTML = `
                    <div class="playlist-item-info">
                        <span class="playlist-item-title">${song.title}</span>
                        <span class="playlist-item-artist">${song.artist}</span>
                    </div>
                    <span class="playlist-item-icon">${isPlaying ? '🔊' : '▶️'}</span>
                `;

                item.onclick = () => {
                    currentSongIndex = idx;
                    loadSong(currentSongIndex);
                    playSong();
                    renderPlaylistModal();
                    playlistModal.classList.remove("active");
                };

                playlistItemsContainer.appendChild(item);
            });
        }

        function loadSong(index) {
            const song = playlist[index];
            songTitle.innerText = song.title;
            songArtist.innerText = song.artist;
            bgMusic.src = song.src;
            lyricText.innerText = `🎵 ${song.title} - ${song.artist}`;
        }

        function playSong() {
            bgMusic.play().then(() => {
                playBtn.innerText = "⏸";
            }).catch(() => {});
        }

        function pauseSong() {
            bgMusic.pause();
            playBtn.innerText = "▶";
        }

        playBtn.onclick = (e) => {
            e.stopPropagation();
            if (bgMusic.paused) {
                playSong();
            } else {
                pauseSong();
            }
        };

        document.getElementById("nextBtn").onclick = (e) => {
            e.stopPropagation();
            currentSongIndex = (currentSongIndex + 1) % playlist.length;
            loadSong(currentSongIndex);
            playSong();
        };

        document.getElementById("prevBtn").onclick = (e) => {
            e.stopPropagation();
            currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
            loadSong(currentSongIndex);
            playSong();
        };

        bgMusic.ontimeupdate = () => {
            const currentTime = bgMusic.currentTime;
            const currentLyrics = playlist[currentSongIndex].lyrics;
            if (!currentLyrics || !currentLyrics.length) return;

            for (let i = currentLyrics.length - 1; i>= 0; i--) {
                if (currentTime>= currentLyrics[i].time) {
                    lyricText.innerText = currentLyrics[i].text;
                    break;
                }
            }
        };

        // Lagu habis -> lanjut ke lagu berikutnya
        bgMusic.onended = () => {
            currentSongIndex = (currentSongIndex + 1) % playlist.length;
            loadSong(currentSongIndex);
            playSong();
        };

        // Dipanggil saat splash diketuk. Kalau lagu sudah jalan, tidak diulang.
        function startMusic() {
            if (!bgMusic.paused) return;
            playSong();
        }

        loadSong(0);

        // Coba putar langsung saat web dibuka (berhasil di browser yang mengizinkan autoplay).
        playSong();

        // Cadangan: kalau autoplay diblokir dan splash terlewat, sentuhan pertama di mana saja memutar lagu.
        const unlockOnFirstTouch = () => {
            if (bgMusic.paused && bgMusic.currentTime === 0) playSong();
        };
        document.addEventListener("pointerdown", unlockOnFirstTouch, { once: true });

