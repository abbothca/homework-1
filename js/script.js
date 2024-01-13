"use strict";

/* Оголошуємо змінні одним з способів 
 (з одним чи двома службовими словами let, 
 відразу задаємо значення або лишаємо зі значенням undefined): */

// let value = 3;
// let count = 5;

// ----------- або ------------------

// let value, count;
// value = 3;
// count = 5;

// ----------- або ------------------

let value = 3, 
    count = 5;

// Виводимо в консоль змінні:
console.log("Обранно змінні з іменами value і count");
console.log("value = ", value);
console.log("count = ", count);

// Оголошуємо змінні, які запишуть результат виконання оперецій, лишаємо з значенням undfined:
let sum, difference, product, ratio, power;

// Обчислюємо значення математичних виразів:
sum = value + count;
difference = value - count;
product = value * count;
ratio = value / count;
power = value ** 5;

// Виводимо в консоль результати обчислень двома способами:
// 1) як шаблонний рядок
console.log("Результат виконання математичних операцій \n виводжу як шаблонний рядок, \n колір змінних однаковий в консолі - чорний, \n як у рядкового типу даних):");
console.log(`1) ${value} + ${count} = ${sum} - додавання`);
console.log(`2) ${value} - ${count} = ${difference} - віднімання`);
console.log(`3) ${value} * ${count} = ${product} - множення`,);
console.log(`4) ${value} / ${count} = ${ratio} - ділення`,);
console.log(`5) ${value} ** ${5} = ${power} - піднесення до степеня 5 змінної value = ${value}`,);
// 2) як послідовність динних типів String, Number
console.log("Результат виконання математичних операцій \n (виводжу як типу даних Number - колір змінних в консолі синій):");
console.log(`1) ${value} + ${count} = `, sum, " - додавання");
console.log(`2) ${value} - ${count} = `, difference, " - віднімання");
console.log(`3) ${value} * ${count} = `, product, " - множення",);
console.log(`4) ${value} / ${count} = `, ratio," - ділення");
console.log(`5) ${value} ** ${5} = `, power, " - піднесення до степеня 5 змінної value = ", value);