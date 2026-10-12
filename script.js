document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "IBC Tank / Kempu Lengkap 1000L",
            spec: "Kapasitas 1000L lengkap kempu, kerangka besi & valve kran.",
            file: "kempu lengkap 1000 lt.jpeg"
        },
        {
            name: "Kerangka Kempu Polosan 1000L",
            spec: "Rangka besi galvanis kokoh untuk kempu IBC tank.",
            file: "kerangka kempu polosan.jpeg"
        },
        {
            name: "Botol Kempu Bening Bekas Kimia",
            spec: "Tanki dalam IBC Tank bening mulus.",
            file: "botol kempu bening bekas kimia.jpeg"
        },
        {
            name: "Botol Kempu Hitam Bekas Vernis",
            spec: "Tanki dalam IBC Tank hitam tebal.",
            file: "botol kempu hitam bekas vernis.jpeg"
        },
        {
            name: "Drum Plastik 200L Tutup Lebar (TL)",
            spec: "Bahan HDPE tebal + ring klem pengunci rapat.",
            file: "drum plastik 200 lt tutup lebar.jpeg"
        },
        {
            name: "Drum Plastik 200L (TL)",
            spec: "Tutup lebar open top + ring klem.",
            file: "drum plastik 200 lt (tl).jpeg"
        },
        {
            name: "Drum Plastik 200L Bolong Atas",
            spec: "Model potongan / bak tampung 200 Liter.",
            file: "drum plastik 200 lt bolong atas.jpeg"
        },
        {
            name: "Drum Plastik 200L Ring 2",
            spec: "Bodi biru mulus tipe Ring 2.",
            file: "drum 200 lt ring 2.jpeg"
        },
        {
            name: "Drum Plastik 200L Ring 4",
            spec: "Tipe Ring 4 kapasitas 200 Liter.",
            file: "drum plastik 200 lt ring 4.jpeg"
        },
        {
            name: "Drum Plastik 200L Polos",
            spec: "Bodi biru mulus polos.",
            file: "drum plastik 200 lt polos.jpeg"
        },
        {
            name: "Drum Plastik 150L Tutup Lebar",
            spec: "Kapasitas 150 Liter model Tutup Lebar (TL).",
            file: "drum plastik 150 lt tutup lebar.jpeg"
        },
        {
            name: "Drum Plastik 120L Tutup Lebar",
            spec: "Kapasitas 120 Liter model Tutup Lebar (TL).",
            file: "drum plastik 120 lt tutup lebar.jpeg"
        },
        {
            name: "Drum Plastik 100L",
            spec: "Kapasitas 100 Liter bahan HDPE tebal.",
            file: "drum plastik 100 lt.jpeg"
        },
        {
            name: "Drum Plastik 100L Tutup Kecil",
            spec: "Dua tutup ulir kecil (TK) 100 Liter.",
            file: "drum plastik 100 lt tutup kecil.jpeg"
        },
        {
            name: "Drum Besi 200L Tutup Lebar (TL)",
            spec: "Plat besi tebal lengkap penutup & ring klem.",
            file: "drum besi 200 lt tutup lebar.jpeg"
        },
        {
            name: "Drum Besi 200L Tutup Kecil (TK)",
            spec: "Dua tutup ulir (closed head) 200 Liter.",
            file: "drum besi 200 lt tutup kecil.jpeg"
        },
        {
            name: "Drum Besi Anti Karat",
            spec: "Lapisan cat khusus tahan karat.",
            file: "drum besi anti karat.jpeg"
        },
        {
            name: "Drum Besi Pake Tutup",
            spec: "Drum besi lengkap penutup atas.",
            file: "drum besi pake tutup.jpeg"
        },
        {
            name: "Drum Besi 100L Tanpa Tutup",
            spec: "Drum besi potongan / bak tampung 100L.",
            file: "drum besi 100 lt tanpa tutup.jpeg"
        },
        {
            name: "Drum Galvanis 200L Tutup Kecil",
            spec: "Bahan galvanis tahan karat 200 Liter.",
            file: "drum galvanis 200 lt tutup kecil.jpeg"
        },
        {
            name: "Drum Galvanish 100L",
            spec: "Bahan galvanis tahan karat 100 Liter.",
            file: "drum galvanish 100 lt.jpeg"
        },
        {
            name: "Jerigen 35 Liter (Sintas)",
            spec: "Bahan HDPE tebal Sintas 35 Liter.",
            file: "jerigen 35 liter (sintas).jpeg"
        },
        {
            name: "Jerigen Kaleng Aluminium",
            spec: "Aluminium mulus bekas bibit parfum/essence.",
            file: "jerigen kaleng almunium.jpeg"
        },
        {
            name: "Kaleng 60 Liter Bekas Parfum",
            spec: "Wadah kaleng 60 Liter mulus.",
            file: "kaleng 60 liter bekas parfum.jpeg"
        },
        {
            name: "Kaleng 40 Liter",
            spec: "Wadah kaleng serbaguna 40 Liter.",
            file: "kaleng 40 liter.jpeg"
        },
        {
            name: "Kaleng 30 Liter Bekas Parfum",
            spec: "Wadah kaleng 30 Liter mulus bekas parfum.",
            file: "kaleng 30 lt bekas parfum.jpeg"
        },
        {
            name: "Kaleng 20 Liter",
            spec: "Wadah kaleng/jerigen 20 Liter.",
            file: "kaleng 20 lt.jpeg"
        }
    ];

    const grid = document.getElementById("product-grid");
    if (grid) {
        grid.innerHTML = products.map(p => `
            <div class="card">
                <img src="assets/images/${p.file}" 
                     alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.spec}</p>
                <a href="https://wa.me/6281334838972?text=Halo%20CV%20Mahameru%20Drum,%20saya%20mau%20tanya%20stok%20${encodeURIComponent(p.name)}" 
                   target="_blank" 
                   class="btn-card-wa">Tanya via WA</a>
            </div>
        `).join("");
    }
});