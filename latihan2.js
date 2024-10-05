class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    
    infokapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} 
        dengan kapasitas ${this.kapasitas} memiliki dimensi ${this.panjang} x ${this.lebar}.`;
    }
}

let kapalPenumpang = new Kapal("Budiono Siregar", "Ferry", 500, 200, 100);
console.log(kapalPenumpang.infokapal());
document.getElementById("objek").innerHTML = kapalPenumpang.infokapal();
