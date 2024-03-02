const axios = require('axios');

const categories = {
    age: 'age',
    alone: 'alone',
    amazing: 'amazing',
    anger: 'anger',
    art: 'art',
    attitude: 'attitude',
};

function getRandomCategory() {
    const categoryKeys = Object.keys(categories);
    const randomIndex = Math.floor(Math.random() * categoryKeys.length);
    return categories[categoryKeys[randomIndex]];
}

async function fetchRandomQuote() {
    const category = getRandomCategory();

    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
            params: {
                category: category,
            },
            headers: { 'X-Api-Key': 'qvu1Wcf1tPpCu4YJjGpcSw==S0sNBj6j5JtMvLX4' }, // Replace with your actual API key
        });

        const result = response.data;

        // Assuming the API response has a structure like { quote: "...", author: "..." }
        const quote = result[0].quote;
        const author = result[0].author;

        // Display the quote and author in the terminal
        console.log('Quote:', quote);
        console.log('Author:', author);
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

// Call the function to fetch and display a random quote
fetchRandomQuote();
