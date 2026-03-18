function cekJawaban() {

    let benar = 0;

    // Jawaban benar
    if (document.getElementById("q1").value == "4") benar++;
    if (document.getElementById("q2").value.toLowerCase() == "biru") benar++;
    if (document.getElementById("q3").value.toLowerCase() == "kucing") benar++;
    if (document.getElementById("q4").value.toLowerCase() == "jakarta") benar++;
    if (document.getElementById("q5").value == "10") benar++;
    if (document.getElementById("q6").value.toLowerCase() == "timur") benar++;
    if (document.getElementById("q7").value == "9") benar++;
    if (document.getElementById("q8").value.toLowerCase() == "hijau") benar++;
    if (document.getElementById("q9").value.toLowerCase() == "tawar") benar++;
    if (document.getElementById("q10").value.toLowerCase() == "a") benar++;

    let hasil = document.getElementById("hasil");

    if (benar == 10) {
        hasil.innerHTML = "🎉 Hebat! Semua benar! <br><a href='https://google.com'>Klik hadiah</a>";
    } else {
        hasil.innerHTML = "Kamu benar " + benar + " dari 10 soal. Coba lagi ya 😊";
    }
}