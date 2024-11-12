function escapePyramidHead(room) {
    const n = room.length;
    let startX, startY, targetX, targetY;
    
    // Encontrar las posiciones de Pyramid Head (▲) y la víctima (T)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (room[i][j] === '▲') {
                startX = i;
                startY = j;
            }
            if (room[i][j] === 'T') {
                targetX = i;
                targetY = j;
            }
        }
    }

    // Direcciones posibles (arriba, abajo, izquierda, derecha)
    const directions = [
        [-1, 0], // arriba
        [1, 0],  // abajo
        [0, -1], // izquierda
        [0, 1]   // derecha
    ];

    // BFS
    const queue = [[startX, startY, 0]]; // (fila, columna, pasos)
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    visited[startX][startY] = true;

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        // Si encontramos la víctima
        if (x === targetX && y === targetY) {
            return steps;
        }

        // Explorar las 4 direcciones posibles
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Verificar si la nueva posición está dentro de los límites y es válida
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny] && room[nx][ny] !== '#') {
                visited[nx][ny] = true;
                queue.push([nx, ny, steps + 1]);
            }
        }
    }

    // Si no se puede llegar a la víctima
    return -1;
}

function escapePyramidHead(room) {
    const n = room.length;
    let startX, startY, targetX, targetY;

    // Buscar las posiciones de Pyramid Head (▲) y la víctima (T) en un solo bucle
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (room[i][j] === '▲') {
                startX = i;
                startY = j;
            }
            if (room[i][j] === 'T') {
                targetX = i;
                targetY = j;
            }
        }
    }

    // Direcciones posibles (arriba, abajo, izquierda, derecha)
    const directions = [
        [-1, 0], // arriba
        [1, 0],  // abajo
        [0, -1], // izquierda
        [0, 1]   // derecha
    ];

    // BFS usando una cola
    const queue = [[startX, startY, 0]]; // (fila, columna, pasos)
    const visited = new Set();
    visited.add(`${startX},${startY}`); // Marca la posición de inicio como visitada

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        // Si encontramos la víctima
        if (x === targetX && y === targetY) {
            return steps;
        }

        // Explorar las 4 direcciones posibles
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Verificar si la nueva posición está dentro de los límites y no ha sido visitada
            if (nx >= 0 && ny >= 0 && nx < n && ny < n && room[nx][ny] !== '#' && !visited.has(`${nx},${ny}`)) {
                visited.add(`${nx},${ny}`); // Marca como visitada
                queue.push([nx, ny, steps + 1]);
            }
        }
    }

    // Si no se puede llegar a la víctima
    return -1;
}


// Ejemplo de uso
const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
];

console.log(escapePyramidHead(room)); // -> 8

const room2 = [
    ['T', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['▲', '.', '.', '#'],
    ['.', '#', '#', '#'],
];

console.log(escapePyramidHead(room2)); // -> 2

const room3 = [
    ['#', '#', '#'],
    ['▲', '.', '#'],
    ['.', '#', 'T'],
];

console.log(escapePyramidHead(room3)); // -> -1
