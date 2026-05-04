let listEuler1 = (a, b, l) => {
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    if (l[i] % a === 0 || l[i] % b === 0) {
      sum += l[i];
    }
  }
  return sum;
}

let listEuler2 = (a, l) => {
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    if (l[i] % a[0] === 0 || l[i] % a[1] === 0) {
      sum += l[i];
    }
  }
  return sum;
}

let listEuler3 = (a, l) => {
  let sum = 0;
  for (let i = 0; i < l.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (l[i] % a[j] === 0) {
        sum += l[i];
        break;
      }
    }
  }
  return sum;
}

let eulerlist = () => {
  a = 2;
  b = 3;
  l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
  alert('Sum of multiples of ' + a + ' or ' + b + ' in list: ' + listEuler1(a, b, l));
}

let euler2Lists = () => {
  a = [2, 3];
  l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
  alert('Sum of multiples of list a in list l: ' + listEuler2(a, l));
}

let euler2Lists1 = () => {
  a = [2, 3, 5];
  l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
  alert('Sum of multiples of list a in list l: ' + listEuler3(a, l));
}
