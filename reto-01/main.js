function createMagicPotion(potions, target) {
    const seen = {}; // Objeto para almacenar el poder de pociones y sus índices

    for (let i = 0; i < potions.length; i++) {
        const power = potions[i];
        const complement = target - power;

        // Si el complemento ya existe en el objeto, hemos encontrado la solución
        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }

        // Almacena el poder actual y su índice
        seen[power] = i;
    }

    // Si no se encuentra ninguna combinación, devolvemos undefined
    return undefined;
}

function createMagicPotion1(potions, target) {
    const seen = new Map(); // Usamos Map para almacenar el poder de pociones y sus índices

    for (let i = 0; i < potions.length; i++) {
        const power = potions[i];
        const complement = target - power;

        // Si el complemento ya existe en el Map, hemos encontrado la solución
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }

        // Almacena el poder actual y su índice en el Map
        seen.set(power, i);
    }

    // Si no se encuentra ninguna combinación, devolvemos undefined
    return undefined;
}

// Ejemplos
console.log(createMagicPotion([4, 5, 6, 2], 8)); // [2, 3]
console.log(createMagicPotion([1, 2, 3, 4], 9)); // undefined
console.log(createMagicPotion([1, 2, 3, 4], 5)); // [1, 2]

