const Tiger = require('./Tiger'); // TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.

const Wolf = require('./Wolf'); // TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.
 
const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }

    if (wolf.strength > tiger.strength) {
        wolf.howl();
        return;
    }

    console.log('Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);