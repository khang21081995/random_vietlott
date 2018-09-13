
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))+1;
}

function getVlott(maxRange) {
    let a = [];
    let length = 6
    maxRange = maxRange || 55;
    while (a.length !== length) {
        let randNum = getRandomInt(maxRange);
        if (!a.includes(randNum)) {
            a.push(randNum)
        }
    }
    a.sort(function (a1, b) {
        return a1 > b;
    });
    return {mega: '6/' + maxRange, number: a};
}

console.log(getVlott(45))
console.log(getVlott(55))
