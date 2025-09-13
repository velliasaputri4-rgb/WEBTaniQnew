// Data masa panen (dalam hari) + tahapan pertumbuhan
const tanamanData = {
  "jagung": {
    hari: 105,
    tahap: [
      "0 - 35 hari: Pertumbuhan vegetatif, batang dan daun bertambah.",
      "36 - 70 hari: Fase generatif, muncul bunga dan tongkol.",
      "71 - 105 hari: Pengisian biji, jagung menua hingga siap panen."
    ]
  },
  "kedelai": {
    hari: 90,
    tahap: [
      "0 - 30 hari: Pertumbuhan batang dan daun cepat.",
      "31 - 60 hari: Pembungaan dan pembentukan polong.",
      "61 - 90 hari: Pengisian biji hingga panen."
    ]
  },
  "kacang tanah": {
    hari: 100,
    tahap: [
      "0 - 33 hari: Pertumbuhan daun dan batang.",
      "34 - 66 hari: Pembungaan dan polong mulai terbentuk.",
      "67 - 100 hari: Polong terisi penuh, siap panen."
    ]
  },
  "kacang hijau": {
    hari: 65,
    tahap: [
      "0 - 20 hari: Pertumbuhan vegetatif.",
      "21 - 45 hari: Berbunga dan polong muda muncul.",
      "46 - 65 hari: Polong matang, siap dipanen."
    ]
  },
  "kacang panjang": {
    hari: 60,
    tahap: [
      "0 - 20 hari: Pertumbuhan batang merambat.",
      "21 - 40 hari: Berbunga dan polong muda muncul.",
      "41 - 60 hari: Polong tumbuh panjang, siap panen."
    ]
  },
  "ubi jalar": {
    hari: 120,
    tahap: [
      "0 - 40 hari: Pertumbuhan batang merambat.",
      "41 - 80 hari: Pembentukan umbi mulai terlihat.",
      "81 - 120 hari: Umbi membesar dan matang."
    ]
  },
  "singkong": {
    hari: 240,
    tahap: [
      "0 - 80 hari: Pertumbuhan batang dan daun.",
      "81 - 160 hari: Umbi mulai terbentuk.",
      "161 - 240 hari: Umbi membesar dan siap dipanen."
    ]
  },
  "talas": {
    hari: 210,
    tahap: [
      "0 - 70 hari: Daun besar mulai tumbuh.",
      "71 - 140 hari: Pembentukan umbi.",
      "141 - 210 hari: Umbi membesar hingga matang."
    ]
  },
  "kentang": {
    hari: 110,
    tahap: [
      "0 - 40 hari: Pertumbuhan batang dan daun.",
      "41 - 80 hari: Pembentukan umbi.",
      "81 - 110 hari: Umbi membesar hingga siap panen."
    ]
  },
  "cabai merah": {
    hari: 90,
    tahap: [
      "0 - 30 hari: Pertumbuhan batang dan daun.",
      "31 - 60 hari: Berbunga dan buah muda muncul.",
      "61 - 90 hari: Buah matang, siap dipanen."
    ]
  },
  "cabai rawit": {
    hari: 100,
    tahap: [
      "0 - 35 hari: Pertumbuhan vegetatif.",
      "36 - 70 hari: Berbunga dan buah muda muncul.",
      "71 - 100 hari: Buah matang, siap dipanen."
    ]
  },
  "tomat": {
    hari: 85,
    tahap: [
      "0 - 30 hari: Pertumbuhan batang dan daun.",
      "31 - 60 hari: Berbunga dan buah muda muncul.",
      "61 - 85 hari: Buah matang, siap panen."
    ]
  },
  "bawang merah": {
    hari: 70,
    tahap: [
      "0 - 25 hari: Daun tumbuh cepat.",
      "26 - 50 hari: Umbi mulai terbentuk.",
      "51 - 70 hari: Umbi membesar hingga siap panen."
    ]
  },
  "bawang putih": {
    hari: 120,
    tahap: [
      "0 - 40 hari: Pertumbuhan vegetatif.",
      "41 - 80 hari: Umbi mulai terbentuk.",
      "81 - 120 hari: Umbi matang, siap dipanen."
    ]
  },
  "wortel": {
    hari: 100,
    tahap: [
      "0 - 33 hari: Pertumbuhan daun dan akar muda.",
      "34 - 66 hari: Akar membesar membentuk umbi.",
      "67 - 100 hari: Umbi matang, siap dipanen."
    ]
  },
  "sawi": {
    hari: 40,
    tahap: [
      "0 - 15 hari: Pertumbuhan daun cepat.",
      "16 - 30 hari: Daun besar mulai terbentuk.",
      "31 - 40 hari: Siap dipanen."
    ]
  },
  "bayam": {
    hari: 30,
    tahap: [
      "0 - 10 hari: Tunas muncul.",
      "11 - 20 hari: Pertumbuhan daun cepat.",
      "21 - 30 hari: Bayam siap dipanen."
    ]
  },
  "kangkung": {
    hari: 30,
    tahap: [
      "0 - 10 hari: Pertumbuhan tunas.",
      "11 - 20 hari: Daun tumbuh cepat.",
      "21 - 30 hari: Kangkung siap dipanen."
    ]
  },
  "jahe": {
    hari: 240,
    tahap: [
      "0 - 80 hari: Pertumbuhan daun dan batang.",
      "81 - 160 hari: Rimpang mulai terbentuk.",
      "161 - 240 hari: Rimpang membesar, siap panen."
    ]
  },
  "kunyit": {
    hari: 240,
    tahap: [
      "0 - 80 hari: Pertumbuhan vegetatif.",
      "81 - 160 hari: Rimpang terbentuk.",
      "161 - 240 hari: Rimpang membesar hingga panen."
    ]
  },
  "lengkuas": {
    hari: 270,
    tahap: [
      "0 - 90 hari: Pertumbuhan daun dan batang.",
      "91 - 180 hari: Rimpang terbentuk.",
      "181 - 270 hari: Rimpang membesar dan matang."
    ]
  },
  "mentimun": {
    hari: 55,
    tahap: [
      "0 - 20 hari: Batang merambat, daun bertambah.",
      "21 - 40 hari: Berbunga dan buah muda muncul.",
      "41 - 55 hari: Buah membesar hingga matang."
    ]
  },
  "labu": {
    hari: 100,
    tahap: [
      "0 - 33 hari: Pertumbuhan batang merambat.",
      "34 - 66 hari: Berbunga dan buah muda muncul.",
      "67 - 100 hari: Buah membesar hingga matang."
    ]
  },
  "oyong": {
    hari: 70,
    tahap: [
      "0 - 25 hari: Pertumbuhan batang merambat.",
      "26 - 50 hari: Berbunga dan buah muda muncul.",
      "51 - 70 hari: Buah matang, siap dipanen."
    ]
  },
  "pare": {
    hari: 70,
    tahap: [
      "0 - 25 hari: Pertumbuhan batang dan daun.",
      "26 - 50 hari: Berbunga dan buah muda muncul.",
      "51 - 70 hari: Buah matang, siap dipanen."
    ]
  },
  "gembili": {
    hari: 240,
    tahap: [
      "0 - 80 hari: Pertumbuhan batang merambat.",
      "81 - 160 hari: Umbi terbentuk.",
      "161 - 240 hari: Umbi membesar hingga siap panen."
    ]
  },
  "sorgum": {
    hari: 120,
    tahap: [
      "0 - 40 hari: Pertumbuhan vegetatif.",
      "41 - 80 hari: Berbunga dan biji mulai terbentuk.",
      "81 - 120 hari: Biji matang, siap dipanen."
    ]
  }
};

// Element references (sesuai HTML kamu)
const form = document.getElementById("panenForm");
const hasilDiv = document.getElementById("hasilPanen");
const analisisDiv = document.getElementById("deteksiMasalah");
const hapusBtn = document.getElementById("hapusHistory");

// util
function formatDate(d) {
  return new Date(d).toLocaleDateString("id-ID");
}
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Menentukan penyesuaian hari berdasarkan kondisi cuaca.
// Angka ini bisa kamu sesuaikan (saat ini: kering +10, hujan +5, cerah -5, berawan 0)
function computeWeatherAdjustment(cuaca) {
  switch (cuaca) {
    case "kering":
      return 10;
    case "hujan":
      return 5;
    case "cerah":
      return -5;
    case "berawan":
    default:
      return 0;
  }
}

function generateAnalysis(cuaca) {
  if (cuaca === "hujan") {
    return "⚠️ Tanah terlalu basah → akar bisa kekurangan oksigen → pertumbuhan melambat, waspadai penyakit akar.";
  } else if (cuaca === "kering") {
    return "⚠️ Kekurangan air → fotosintesis menurun → pertumbuhan melambat dan hasil bisa berkurang.";
  } else if (cuaca === "cerah") {
    return "✅ Cuaca cerah umumnya baik untuk pertumbuhan; panen mungkin sedikit lebih cepat dari prediksi standar.";
  } else if (cuaca === "berawan") {
    return "⚠️ Cahaya matahari lebih sedikit → fotosintesis menurun; pertumbuhan mungkin sedikit melambat.";
  } else {
    return "Info cuaca tidak tersedia.";
  }
}

// Fungsi utama: melakukan prediksi, menampilkan hasil, menyimpan ke localStorage
function prediksiPanen(tanaman, tanggalTanamStr, cuaca) {
  const data = tanamanData[tanaman];
  if (!data) {
    hasilDiv.innerHTML = `<p>Data masa panen untuk <b>${tanaman}</b> belum tersedia.</p>`;
    return;
  }

  const tanamDate = new Date(tanggalTanamStr);
  if (isNaN(tanamDate)) {
    alert("Tanggal tanam tidak valid.");
    return;
  }

  const baseHari = data.hari;
  const adjust = computeWeatherAdjustment(cuaca);
  const adjustedHari = baseHari + adjust;

  const panenDate = new Date(tanamDate);
  panenDate.setDate(panenDate.getDate() + adjustedHari);

  const tahapHTML = data.tahap.map(t => `<li>${t}</li>`).join("");

  const hasilHTML = `
    <div class="prediksi-item">
      <h2>Prediksi Panen ${capitalize(tanaman)}</h2>
      <p><strong>Tanggal Tanam:</strong> ${formatDate(tanamDate)}</p>
      <p><strong>Masa Panen (standar):</strong> ${baseHari} hari</p>
      <p><strong>Penyesuaian karena cuaca:</strong> ${adjust >= 0 ? "+" + adjust : adjust} hari</p>
      <p><strong>Estimasi Panen (disesuaikan):</strong> ${formatDate(panenDate)} (${adjustedHari} hari sejak tanam)</p>
      <h3>Tahapan Pertumbuhan:</h3>
      <ul>${tahapHTML}</ul>
    </div>
  `;

  const analisisHTML = `
    <div class="analisis-item">
      <h3>Analisis Cuaca:</h3>
      <p>${generateAnalysis(cuaca)}</p>
    </div>
  `;

  // tampilkan (juga akan dimunculkan di bagian "Data Prediksi Tersimpan" setelah save)
  hasilDiv.innerHTML = hasilHTML;
  analisisDiv.innerHTML = analisisHTML;

  // simpan ke localStorage dengan key unik (tanaman + timestamp)
  const key = `prediksi_${tanaman}_${Date.now()}`;
  const toStore = {
    tanaman,
    tanggalTanam: tanamDate.toISOString(),
    cuaca,
    baseHari,
    adjustedHari,
    panenDate: panenDate.toISOString(),
    hasil: hasilHTML,
    analisis: analisisHTML
  };
  localStorage.setItem(key, JSON.stringify(toStore));

  // refresh daftar saved
  loadSaved();
}

// Memuat semua prediksi tersimpan dan menampilkannya
function loadSaved() {
  const savedKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("prediksi_")) savedKeys.push(k);
  }

  // Urutkan berdasarkan timestamp (paling baru dulu)
  savedKeys.sort((a, b) => {
    const ta = parseInt(a.split("_").pop(), 10);
    const tb = parseInt(b.split("_").pop(), 10);
    return tb - ta;
  });

  let savedHTML = "<h3>Data Prediksi Tersimpan:</h3>";
  let savedAnalisisHTML = "<h3>Analisis Kondisi Cuaca:</h3>";

  if (savedKeys.length === 0) {
    savedHTML += "<p>(Kosong)</p>";
    savedAnalisisHTML += "<p>(Kosong)</p>";
  } else {
    for (const k of savedKeys) {
      try {
        const obj = JSON.parse(localStorage.getItem(k));
        if (obj && obj.hasil) {
          savedHTML += obj.hasil;
          savedAnalisisHTML += obj.analisis + "<hr>";
        }
      } catch (err) {
        console.warn("Gagal baca data tersimpan:", k, err);
      }
    }
  }

  hasilDiv.innerHTML = savedHTML;
  analisisDiv.innerHTML = savedAnalisisHTML;
}

// Event listeners
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const tanaman = document.getElementById("tanaman").value;
    const tanggalTanam = document.getElementById("tanggalTanam").value;
    const cuaca = document.getElementById("kondisiCuaca").value;

    if (!tanaman || !tanggalTanam || !cuaca) {
      alert("Mohon lengkapi semua data!");
      return;
    }
    prediksiPanen(tanaman, tanggalTanam, cuaca);
  });
} else {
  console.error("Form panen tidak ditemukan (cek id 'panenForm').");
}

if (hapusBtn) {
  hapusBtn.addEventListener("click", function () {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("prediksi_")) keysToRemove.push(k);
    }
    for (const k of keysToRemove) localStorage.removeItem(k);
    loadSaved();
    alert("History prediksi berhasil dihapus!");
  });
}

// Muat saved saat halaman dibuka
window.addEventListener("load", loadSaved);
