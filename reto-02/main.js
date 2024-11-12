function battleHorde(zombies, humans) {
    let zombiePower = zombies.split('').map(Number);
    let humanPower = humans.split('').map(Number);

    for (let i = 0; i < zombiePower.length; i++) {
        if (zombiePower[i] > humanPower[i]) {
            // Zombie gana, solo transfiere la diferencia al siguiente zombie
            const difference = zombiePower[i] - humanPower[i];
            if (i + 1 < zombiePower.length) {
                zombiePower[i + 1] += difference;
            }
        } else if (zombiePower[i] < humanPower[i]) {
            // Humano gana, solo transfiere la diferencia al siguiente humano
            const difference = humanPower[i] - zombiePower[i];
            if (i + 1 < humanPower.length) {
                humanPower[i + 1] += difference;
            }
        } else {
            // Empate, ambos combatientes caen
            zombiePower[i] = 0;
            humanPower[i] = 0;
        }
    }

    // Determinar el resultado final
    const finalZombiePower = zombiePower[zombiePower.length - 1];
    const finalHumanPower = humanPower[humanPower.length - 1];

    if (finalZombiePower > finalHumanPower) {
        return `${finalZombiePower-finalHumanPower}z`;
    } else if (finalHumanPower > finalZombiePower) {
        return `${finalHumanPower-finalZombiePower}h`;
    } else {
        return "x";
    }
}

// Pruebas
console.log(battleHorde('242', '334')); // -> "2h"
console.log(battleHorde('444', '282')); // -> "x"
console.log(battleHorde('555', '666')); // -> "3h"
console.log(battleHorde('8989898999', '7779998811')); // -> "20z"
