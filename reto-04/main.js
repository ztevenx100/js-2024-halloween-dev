function findTheKiller(whisper, suspects) {
    const patternLength = whisper.endsWith('$') ? whisper.length - 1 : whisper.length;
    const isExactMatch = whisper.endsWith('$');
    whisper = whisper.toLowerCase();

    // Filtrar los sospechosos que cumplen con el patrón
    const matches = suspects.filter(name => {
        name = name.toLowerCase();
        
        // Verificar si el nombre tiene la longitud adecuada si el whisper termina en '$'
        if (isExactMatch && name.length !== patternLength) return false;

        // Verificar si cada letra del whisper coincide con el nombre
        for (let i = 0; i < patternLength; i++) {
            if (whisper[i] !== '~' && whisper[i] !== name[i]) {
                return false;
            }
        }

        return true;
    });

    // Retornar los resultados en el formato adecuado
    return matches.length === 1 ? matches[0] : matches.length > 1 ? matches.join(',') : "";
}

function findTheKiller(whisper, suspects) {
    // Convertimos `whisper` y `suspects` a minúsculas de una vez
    whisper = whisper.toLowerCase();
    suspects = suspects.map(name => name.toLowerCase());

    const patternLength = whisper.endsWith('$') ? whisper.length - 1 : whisper.length;
    const isExactMatch = whisper.endsWith('$');

    // Filtrar los sospechosos que cumplen con el patrón
    const matches = suspects.filter(name => {
        // Verificar longitud si el `whisper` termina en '$'
        if (isExactMatch && name.length !== patternLength) return false;

        // Verificar cada carácter del `whisper` contra el nombre
        for (let i = 0; i < patternLength; i++) {
            if (whisper[i] !== '~' && whisper[i] !== name[i]) {
                return false;
            }
        }
        return true;
    });

    // Usamos un solo retorno con el resultado adecuado
    return formattedMatches.length === 0 ? "" : formattedMatches.length === 1 ? formattedMatches[0] : formattedMatches.join(',');
}


// Ejemplos de uso
console.log(findTheKiller('d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'])); // -> 'Dracula'
console.log(findTheKiller('~r~dd~', ['Freddy', 'Freddier', 'Fredderic'])); // -> 'Freddy,Freddier,Fredderic'
console.log(findTheKiller('~r~dd$', ['Freddy', 'Freddier', 'Fredderic'])); // -> ''
console.log(findTheKiller('mi~~def', ['Midudev', 'Midu', 'Madeval'])); // -> ''
