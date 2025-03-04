
        <script>
            window.onload = () => {
                const audio = document.getElementById("background-music");
                audio.muted = false; // Menghapus mute agar suara bisa keluar
                audio.play().catch(error => {
                    console.log("Autoplay dicegah oleh browser: ", error);
                });
            };
        </script>