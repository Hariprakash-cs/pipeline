function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1
    return randomNumber;
}

const randomNumber = getRandomNumber();
console.log('Random Numberss:', randomNumber);
