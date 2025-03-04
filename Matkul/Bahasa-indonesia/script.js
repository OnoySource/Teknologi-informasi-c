document.addEventListener("DOMContentLoaded", function () {
    fetch("data_kelompok.json")
        .then(response => response.json()) // Parsing JSON langsung
        .then(dataKelompok => {
            const tableBody = document.getElementById("table-body");
            tableBody.innerHTML = ""; // Kosongkan tabel sebelum diisi data

            Object.keys(dataKelompok.kelompok).forEach(kelompok => {
                const judul = dataKelompok.kelompok[kelompok].judul;
                const anggota = dataKelompok.kelompok[kelompok].anggota.join(", "); // Gabungkan nama dengan koma
                
                const row = `<tr>
                    <td>${kelompok}</td>
                    <td>${judul}</td>
                    <td>${anggota}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error("Gagal memuat file:", error));
});