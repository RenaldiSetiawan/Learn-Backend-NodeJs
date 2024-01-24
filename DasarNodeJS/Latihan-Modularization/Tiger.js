class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        console.log('grrrrr!')
    }
}

module.exports = Tiger;

// TODO 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain.
