const categories = {
    age: 'age', 
    alone: 'alone',
    amazing: 'amazing',
    anger: 'anger',
    art: 'art',
    attitude: 'attitude'  
    // cba doing the rest there's quite a few on the website  
};

// for asif 
// write a function that selects a random category and returns its string
// store it in a variable called category, it'll go in the API call underneath

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


// document.getElementById("quote").textContent = 
// document.getElementById("author").textContent = 

// hoping we can somehow figure out how to separate the result into
// two separate variables; author and quote 