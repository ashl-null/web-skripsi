function hitung() {
    let harga = parseInt(document.getElementById("harga").value);
    let ram = parseInt(document.getElementById("ram").value);
    let baterai = parseInt(document.getElementById("baterai").value);
    let hasil = document.getElementById("hasil");

    // Data alternatif HP
    let hp = [
        {nama: "Xiaomi", harga: 2000000, ram: 4, baterai: 5000},
        {nama: "Realme", harga: 2500000, ram: 6, baterai: 5000},
        {nama: "Samsung", harga: 3000000, ram: 8, baterai: 6000}
    ];

    let terbaik = "";
    let skorTerbaik = 0;

    hp.forEach(item => {
        // Normalisasi sederhana
        let skor =
            (ram / item.ram) * 0.4 +
            (baterai / item.baterai) * 0.3 +
            (item.harga <= harga ? 1 : 0) * 0.3;

        if (skor > skorTerbaik) {
            skorTerbaik = skor;
            terbaik = item.nama;
        }
    });

    hasil.innerHTML = "Rekomendasi terbaik: " + terbaik;
}