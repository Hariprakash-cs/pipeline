// Function to generate a random number and log it
function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    console.log('Generated Random Number:', randomNumber);
    return randomNumber;
}

// Call the function and use the result
const randomNumber = getRandomNumber();
console.log('Random Number:', randomNumber);
