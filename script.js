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

function fetchRandomQuote() {
    const category = getRandomCategory();

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'qvu1Wcf1tPpCu4YJjGpcSw==S0sNBj6j5JtMvLX4' }, // Replace with your actual API key
        contentType: 'application/json',
        success: function (result) {
            console.log(result);

            const quote = result.quote;
            const author = result.author;

            document.getElementById("quote").textContent = quote;
            document.getElementById("author").textContent = author;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

fetchRandomQuote();
