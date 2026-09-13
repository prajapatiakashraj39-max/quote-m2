const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("quoteBtn");

const API_URL = "https://dummyjson.com/quotes/random";

function getQuote() {

    quote.textContent = "Loading...";
    author.textContent = "";

    fetch(API_URL)

        // Convert response to JSON
        .then(function(response) {

            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }

            return response.json();
        })

        // Get the actual quote data
        .then(function(data) {

            // DOM manipulation
            quote.textContent = `"${data.quote}"`;
            author.textContent = `— ${data.author}`;
        })

        // Handle errors
        .catch(function(error) {

            quote.textContent = "Something went wrong!";
            author.textContent = "";

            console.error(error);
        });
}

quoteBtn.addEventListener("click", getQuote);
