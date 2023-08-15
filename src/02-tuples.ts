const prices: (number | string)[] = [1,2,3,4,5,6, 'hi'];
prices.push(7);
prices.push('hello');

let user: [string, number, boolean];
user = ['nicobytes', 73, true];

const [username, age] = user;      //desestructuración de una tuple (ignora el valor booleano)
console.log(username);
console.log(age);
