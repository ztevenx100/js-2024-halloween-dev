function findSafestPath(dream) {
    const n = dream.length;
    const m = dream[0].length;
    
    // Creamos una matriz auxiliar para almacenar el peligro acumulado
    const danger = Array.from({ length: n }, () => Array(m).fill(Infinity));
    
    // Inicializamos el punto de partida
    danger[0][0] = dream[0][0];

    // Llenamos la primera fila y la primera columna
    for (let i = 1; i < n; i++) {
        danger[i][0] = danger[i - 1][0] + dream[i][0];
    }
    for (let j = 1; j < m; j++) {
        danger[0][j] = danger[0][j - 1] + dream[0][j];
    }

    // Llenamos el resto de la matriz de peligro acumulado
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            danger[i][j] = Math.min(danger[i - 1][j], danger[i][j - 1]) + dream[i][j];
        }
    }

    // El nivel de peligro del camino más seguro está en la esquina inferior derecha
    return danger[n - 1][m - 1];
}

function findSafestPath(dream) {
    const n = dream.length;
    const m = dream[0].length;
    
    // Creamos dos arreglos para almacenar la fila actual y la anterior
    let previousRow = Array(m).fill(Infinity);
    let currentRow = Array(m).fill(Infinity);
    
    // Inicializamos el punto de partida
    previousRow[0] = dream[0][0];

    // Llenamos la primera fila
    for (let j = 1; j < m; j++) {
        previousRow[j] = previousRow[j - 1] + dream[0][j];
    }

    // Llenamos el resto de la matriz usando solo dos filas
    for (let i = 1; i < n; i++) {
        currentRow[0] = previousRow[0] + dream[i][0];  // Inicializamos el primer elemento de la fila actual

        for (let j = 1; j < m; j++) {
            currentRow[j] = Math.min(previousRow[j], currentRow[j - 1]) + dream[i][j];
        }

        // Actualizamos `previousRow` para que sea la fila actual
        [previousRow, currentRow] = [currentRow, previousRow];
    }

    // El nivel de peligro del camino más seguro está en el último valor de `previousRow`
    return previousRow[m - 1];
}



// Ejemplo de uso
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

const bestPath = findSafestPath(dream);
console.log(bestPath); // Devuelve 7