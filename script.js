function cekNilai() {
    let nilai = parseInt(document.getElementById("nilaiInput").value);
    let predikat = "";

    if (nilai >= 90 && nilai <= 100) {
        predikat = "A (Sangat Baik)";
    } else if (nilai >= 80) {
        predikat = "B (Baik)";
    } else if (nilai >= 70) {
        predikat = "C (Cukup)";
    } else if (nilai >= 60) {
        predikat = "D (Kurang)";
    } else if (nilai >= 0) {
        predikat = "E (Sangat Kurang)";
    } else {
        predikat = "Nilai tidak valid";
    }

    document.getElementById("hasilPredikat").textContent = "Predikat: " + predikat;
}

// Tambahan: Perulangan angka 1–5 di konsol
for (let i = 1; i <= 5; i++) {
    console.log("Angka ke-" + i);
}
