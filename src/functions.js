export function capitaliseString(string) {
    let capital = string.slice(0,1).toUpperCase();
    let rest = string.slice(1);
    let capitalised = capital + rest;
    return capitalised;
}

export function reverseString(string) {
    let reversed = string.split('').reverse().join('');
    return reversed;
}

export const calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
};

export function caesarCipher(string, shift) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetArray = alphabet.split("");
    let cipher = "";

    for (let i = 0; i < string.length; i++) {
        if (/[a-z]/.test(string[i]) || /[A-Z]/.test(string[i])) {
            let lowercase = string.toLowerCase();
            let index = alphabetArray.findIndex(letter => letter === lowercase[i]);
            let cipherIndex = (index + shift) % 26;
            if (string[i] === string[i].toUpperCase()) {
                let capitalised = alphabetArray[cipherIndex].toUpperCase();
                cipher += capitalised;
            } else {
                cipher += alphabetArray[cipherIndex];
            }
        } else {
            cipher += string[i];
        }
    }
    return cipher;
};

export function analyseArray(array) {
    let average = 0;
    let min = array[0];
    let max = array[0];
    let length = array.length;
    for (let i = 0; i < array.length; i++) {
        average += array[i];
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    average = average / array.length;    
    return { average, min, max, length };
}