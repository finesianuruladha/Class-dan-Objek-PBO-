class SensorPasut {
    #status; 

    constructor(nama, lokasi) {
        this.nama = nama; 
        this.lokasi = lokasi; 
        this.#status = "Mati"; 
    }

    aktifkan() {
        this.#status = "Hidup";
        return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan.`;
    }
    
    nonaktifkan() {
        this.#status = "Mati";
        return `Sensor ${this.nama} di ${this.lokasi} telah dinonaktifkan.`;
    }

    getStatus() {
        return `Status sensor ${this.nama} adalah ${this.#status}.`;
    }
}

// Contoh penggunaan
let SensorPasutMerak = new SensorPasut("Selat Sunda", "Merak");
console.log(SensorPasutMerak.aktifkan());
console.log(SensorPasutMerak.nonaktifkan());
console.log(SensorPasutMerak.getStatus());
