/*
Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
*/

const arrEx6 = [3, 6, 12, 5, 100, 1];

function ordenamientoBurbuja(elementos) {
    const length = elementos.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if (elementos[j] > elementos[j + 1]) {
                var temporal = elementos[j];
                elementos[j] = elementos[j + 1];
                elementos[j + 1] = temporal;
            }
        }
    }
}

ordenamientoBurbuja(arrEx6);
console.log(arrEx6);