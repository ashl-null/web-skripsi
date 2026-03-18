let index = 0;
let skor = 0;
let hasilDetail = [];

let soal = [
    {
        tanya: "Soal 1: Siapa nama panjang gwe",
        type: "text",
        jawab: ["muhammad annash ash shidiq"]
    },
    {
        tanya: "Soal 2: Merek hp gwej",
        type: "text",
        jawab: ["poco f5"]
    },
    {
        tanya: "Soal 3: Bapak jamal punya 5 anak, siapa terakhir?",
        type: "text",
        jawab: ["jamal"]
    },
    {
        tanya: "Soal 4: Ponakan gwe ke 6",
        type: "text",
        jawab: ["shanum", "sanum"]
    },
    {
        tanya: "Soal 5: Sepatu gwe",
        type: "select",
        pilihan: ["Nb 530","Nb 2002","Adidas adizero","Adidas evos sl"],
        jawab: ["nb 2002"]
    },
    {
        tanya: "Soal 6: Mbah sum dari mana",
        type: "select",
        pilihan: ["Sidoarjo","Pati Semarang","Salatiga","Keraton jogya","Klaten","Magelang"],
        jawab: ["salatiga"]
    },
    {
        tanya: "Soal 7: Merk motor gwe",
        type: "text",
        jawab: ["supra gtr","honda supra gtr","honda gtr"]
    },
    {
        tanya: "Soal 8: Baju kemarin warna apa",
        type: "text",
        jawab: ["putih"]
    },
    {
        tanya: "Soal 9: Angka favorit gwe",
        type: "text",
        jawab: ["21"]
    }
];

function tampilSoal() {
    let s = soal[index];
    document.getElementById("soal").innerHTML = s.tanya;

    if (s.type == "text") {
        document.getElementById("jawaban").innerHTML =
            `<input type="text" id="input">`;
    } else {
        let opsi = s.pilihan.map(p =>
            `<option value="${p.toLowerCase()}">${p}</option>`
        ).join("");

        document.getElementById("jawaban").innerHTML =
            `<select id="input">${opsi}</select>`;
    }
}

function nextSoal() {
    let input = document.getElementById("input").value.toLowerCase();

    if (input == "") {
        alert("Isi dulu!");
        return;
    }

    let benar = soal[index].jawab.includes(input);

    if (benar) {
        skor++;
        hasilDetail.push(`Soal ${index+1}: BENAR`);
    } else {
        hasilDetail.push(`Soal ${index+1}: SALAH`);
    }

    index++;

    if (index < soal.length) {
        tampilSoal();
    } else {
        tampilHasil();
    }
}

function tampilHasil() {
    document.getElementById("soal").innerHTML = "🎉 Selesai!";
    document.getElementById("jawaban").innerHTML = "";

    document.getElementById("hasil").innerHTML =
        `Skor kamu: ${skor} / ${soal.length} <br><br>` +
        hasilDetail.join("<br>");
}

tampilSoal();