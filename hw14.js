`use strict`;

//task 1

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//task 2

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

//task 3

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) continue;
        console.log(i);
}

//task 4

const arr = [1, 2, 3, 4, 5];
let result = 0;
let sum;
let i = 0;
for (; i < arr.length; i++) {
    sum = (result += arr[i]);
}
console.log(sum);

//task 5

result = 0;
i = 0;
sum = 0;

for (; i < arr.length; i++) {
    sum = (result += arr[i] ** 2);
}
console.log(sum);