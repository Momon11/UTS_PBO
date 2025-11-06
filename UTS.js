const readline = require("readline");

class Karyawan {
  constructor(nama) {
    this.nama = nama;
    this.cuti = {
      tahunan: 12,
      sakit: 2,
      melahirkan: 90
    };
  }

  ajukanCuti(jenis, hari) {
    if (!(jenis in this.cuti)) {
      console.log(" Jenis cuti tidak valid!");
      return;
    }

    if (hari <= this.cuti[jenis]) {
      console.log(` Cuti ${jenis} untuk ${this.nama} disetujui (${hari} hari).`);
    } else {
      console.log(` Cuti ${jenis} untuk ${this.nama} ditolak karena melebihi kuota.`);
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama karyawan: ", (nama) => {
  const karyawan = new Karyawan(nama);

  rl.question("Masukkan jenis cuti (tahunan/sakit/melahirkan): ", (jenis) => {
    rl.question("Berapa hari cuti yang diajukan? ", (hari) => {
      const jumlahHari = parseInt(hari);
      karyawan.ajukanCuti(jenis.toLowerCase(), jumlahHari);
      rl.close();
    });
  });
});
