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
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
            headers: { 'X-Api-Key': 'qvu1Wcf1tPpCu4YJjGpcSw==S0sNBj6j5JtMvLX4' }, // Replace with your actual API key
        });

        const result = await response.json();

        // Assuming the API response has a structure like { quote: "...", author: "..." }
        const quote = result[0].quote;
        const author = result[0].author;

        // Display the quote and author in the terminal
        document.getElementById("quote").textContent = quote;
        document.getElementById("author").textContent = author;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

// Call the function to fetch and display a random quote
fetchRandomQuote();
  
function applyTheme(theme) {
    const body = document.querySelector('body');
    const dropdownHeader = document.querySelector('.dropdown-header');
    const dropdownThemes = document.querySelector('.dropdown-themes');
    const dropdownItems = document.querySelector('.bona-dropdown');

    
    body.classList.add(theme);
    dropdownHeader.classList.add(theme);
    dropdownThemes.classList.add(theme);
    dropdownItems.classList.add(theme);
}
