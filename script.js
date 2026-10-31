
// MENAMPILKAN FORM PEMBERI
function tampilPemberi() {
    document.getElementById("formPemberi").style.display = "block";
    document.getElementById("formPenerima").style.display = "none";
    document.getElementById("formPemberi").scrollIntoView({
        behavior: "smooth"
    });
}

// MENAMPILKAN FORM PENERIMA
function tampilPenerima() {
    document.getElementById("formPenerima").style.display = "block";
    document.getElementById("formPemberi").style.display = "none";
    document.getElementById("formPenerima").scrollIntoView({
        behavior: "smooth"
    });
}

// MENYIMPAN DATA PEMBERI KE DAFTAR MAKANAN
function kirimPemberi(event) {
    event.preventDefault();

    let nama = document.getElementById("namaPemberi").value;
    let makanan = document.getElementById("namaMakanan").value;
    let jumlah = document.getElementById("jumlahMakanan").value;
    let lokasi = document.getElementById("lokasiPemberi").value;

    let daftar = document.getElementById("daftarMakanan");

    let kartu = document.createElement("div");
    kartu.className = "kartu makanan-card";

    kartu.innerHTML = `
        <h3>${makanan}</h3>
        <p>Jumlah: ${jumlah}</p>
        <p>Lokasi: ${lokasi}</p>
        <p>Pemberi: ${nama}</p>
    `;

    daftar.appendChild(kartu);

    let pilihan = document.getElementById("pilihanMakanan");
    let opsi = document.createElement("option");
    opsi.value = makanan;
    opsi.textContent = makanan + " - " + jumlah;
    pilihan.appendChild(opsi);

    document.getElementById("pesanPemberi").textContent =
        "Terima kasih! Data makanan berhasil ditambahkan.";

    event.target.reset();
}

// MENGIRIM PERMINTAAN PENERIMA
function kirimPenerima(event) {
    event.preventDefault();

    let nama = document.getElementById("namaPenerima").value;
    let makanan = document.getElementById("pilihanMakanan").value;
    let jumlah = document.getElementById("jumlahPenerima").value;

    document.getElementById("pesanPenerima").textContent =
        "Terima kasih " + nama + "! Permintaan " + jumlah +
        " untuk " + makanan + " berhasil dicatat.";

    event.target.reset();
}
