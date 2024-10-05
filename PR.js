// Finesia Nurul Adha (2305877)
class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, namaNahkoda, hariBerlayar, jamBerlayar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
        this.namaNahkoda = namaNahkoda;
        this.hariBerlayar = hariBerlayar;
        this.jamBerlayar = jamBerlayar;
    }
    
    infokapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} 
        dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar}.
        Nahkoda kapal: ${this.namaNahkoda}. Kapal berlayar pada hari ${this.hariBerlayar} pukul ${this.jamBerlayar}.`;
    }

    hitungLuas() {
        return this.panjang * this.lebar;
    }

    jenisKapal() {
        return `Kapal ini berjenis ${this.jenis}.`;
    }

    kapasitasMaksimum() {
        return `Kapasitas maksimum kapal ini adalah ${this.kapasitas}.`;
    }

    hitungKecepatan(jarak, waktu) {
        return (jarak / waktu).toFixed(2);
    }

    hitungBahanBakar(jarak) {
        const konsumsiPerKm = 0.5;
        return (jarak * konsumsiPerKm).toFixed(2);
    }
}

class InfoTiket extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahTiket, namaNahkoda, hariBerlayar, jamBerlayar) {
        super(nama, jenis, kapasitas, panjang, lebar, namaNahkoda, hariBerlayar, jamBerlayar);
        this.jumlahTiket = jumlahTiket;
    }

    tiketTersedia(tiketYangDiminta) {
        return this.jumlahTiket >= tiketYangDiminta;
    }

    jualTiket(tiketYangDijual) {
        if (this.tiketTersedia(tiketYangDijual)) {
            this.jumlahTiket -= tiketYangDijual;
            return `Tiket terjual: ${tiketYangDijual}. Tiket tersisa: ${this.formatJumlahTiket(this.jumlahTiket)}.`;
        } else {
            return `Tiket tidak cukup tersedia! Tersisa: ${this.formatJumlahTiket(this.jumlahTiket)}.`;
        }
    }

    infoTiket() {
        return `${this.infokapal()} Jumlah Tiket Tersedia: ${this.formatJumlahTiket(this.jumlahTiket)}.`;
    }

    tambahTiket(jumlah) {
        this.jumlahTiket += jumlah;
        return `Jumlah tiket berhasil ditambah. Tiket sekarang: ${this.formatJumlahTiket(this.jumlahTiket)}.`;
    }

    formatJumlahTiket(jumlah) {
        return jumlah.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

let kapalPenumpang = new InfoTiket(
    "Budiono Siregar", 
    "Ferry", 
    500, 
    200, 
    100, 
    300, 
    "Budi Santoso", 
    "Sabtu", 
    "14:00"
);

console.log(kapalPenumpang.infoTiket());
document.getElementById("objek").innerHTML = kapalPenumpang.infoTiket();

console.log(`Kecepatan kapal: ${kapalPenumpang.hitungKecepatan(100, 2)} km/jam`);
console.log(`Kebutuhan bahan bakar untuk 100 km: ${kapalPenumpang.hitungBahanBakar(100)} liter`);

console.log(kapalPenumpang.jualTiket(50));
console.log(kapalPenumpang.infoTiket());
console.log(kapalPenumpang.jualTiket(300));

console.log(kapalPenumpang.tambahTiket(100));
console.log(kapalPenumpang.infoTiket());



