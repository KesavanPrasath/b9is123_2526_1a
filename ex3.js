// 1. Sum of multiples of a OR b in list l
let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let x of l) {
        if (x % a === 0 || x % b === 0) {
            sum += x;
        }
    }
    return sum;
};

// 2. Sum of multiples of ANY number in list a found in list l
let listEuler2 = (a, l) => {
    let sum = 0;
    for (let x of l) {
        for (let n of a) {
            if (x % n === 0) {
                sum += x;
                break;
            }
        }
    }
    return sum;
};

// 3. Same logic as #2 but for a bigger list
let listEuler3 = (a, l) => {
    let sum = 0;
    for (let x of l) {
        for (let n of a) {
            if (x % n === 0) {
                sum += x;
                break;
            }
        }
    }
    return sum;
};

// Button functions
let eulerlist = () => {
    let a = parseInt(document.getElementById('a1').value);
    let b = parseInt(document.getElementById('b1').value);
    let l = document.getElementById('l1').value.split(',').map(Number);

    alert("Sum = " + listEuler1(a, b, l));
};

let euler2Lists = () => {
    let a = document.getElementById('a2').value.split(',').map(Number);
    let l = document.getElementById('l2').value.split(',').map(Number);

    if (a.length !== 2) {
        alert('Please enter exactly 2 values for list a.');
        return;
    }

    alert("Sum = " + listEuler2(a, l));
};

let euler2Lists1 = () => {
    let a = document.getElementById('a3').value.split(',').map(Number);
    let l = document.getElementById('l3').value.split(',').map(Number);

    alert("Sum = " + listEuler3(a, l));
};
