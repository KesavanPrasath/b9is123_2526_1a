function processvalue(str) {
    if (!str.includes(':')) {
        return "corrupt : " + str;
    }
    
    let parts = str.split(':');
    let factors = parts[0].split(" ").map(Number);
    let multiples = parts[1].split(" ").map(Number);
    
    let sum = 0;
    for (let i = 0; i < multiples.length; i++) {
        for (let j = 0; j < factors.length; j++) {
            if (multiples[i] % factors[j] === 0) {
                sum += multiples[i];
                break;
            }
        }
    }
    
    return sum + " : " + str;
}

function checkCorrupt() {
    let input = document.getElementById('corruptInput').value;
    let result = processvalue(input);
    document.getElementById('corruptResult').textContent = result;
}
