function showResult() {
  let sum = 0;

  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  alert("Sum is: " + sum);
}

function sumMultiples() {
    const a = parseInt(document.getElementById('aInput').value);
    const b = parseInt(document.getElementById('bInput').value);
    const n = parseInt(document.getElementById('nInput').value);
    
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    
    alert("Sum of multiples of " + a + " or " + b + " below " + n + " is: " + sum);
}
