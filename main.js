const quoteBox = document.getElementById("quote-box");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const category = document.querySelector("#category");
const newQuoteBtn = document.querySelector("#new-quote");

newQuoteBtn.addEventListener("click", generateQuote);

async function generateQuote() {
  try {
    newQuoteBtn.textContent = "Loading..."
    const URL = "https://api.api-ninjas.com/v1/quotes"
    const APIKey = "C4SfHNqISI77kLN9lVG85A==Yc55G6h5zkPRdXOb"
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "X-Api-Key": APIKey,
        // "Content-Type": "application/json",
      },
    });
    

    const data = await response.json();
    // The API returns an array of quotes
    if (data.length > 0) {
      quote.textContent = data[0].quote;
      category.textContent = data[0].category;
      author.textContent = data[0].author;
    } else {
      quote.textContent = "No quote found.";
      category.textContent = "";
      author.textContent = "";
    }
    newQuoteBtn.textContent = "New quote"    

    console.log(data);
  } catch (err) {
    newQuoteBtn.textContent = "New quote"
    quote.textContent = "Sorry, failed to fetch a quote.";
    author.textContent = "";
    console.error(err);
  }
}

// try {

// } catch (error) {
//     console.
// }

// const quoteBox = document.getElementById("quote-box")
// const quote = document.querySelector("#quote")
// const author = document.querySelector("#author")
// const newQuoteBtn = document.querySelector("#new-quote")

// newQuoteBtn.addEventListener("click", generateQuote)

// async function generateQuote () {
//     // GET /quotes/random
//     try {
//         // const response = await fetch("https://api.api-ninjas.com/v1/quotes");
//         const response =await fetch("https://api.api-ninjas.com/v1/quotes", headers={'X-Api-Key': 'C4SfHNqISI77kLN9lVG85A==Yc55G6h5zkPRdXOb'})
//         const data = await response.json()
//         quote.textContent = `${data.content}`
//         author.textContent = `${data.console}`

//         console.log(data)
//     } catch (err) {
//         quote.textContent = "Sorry, failed to fetch a quote"
//         author.textContent = ""
//         console.error(err)
//     }
// }

// // [
// // {"_id":"URebKOwzXSM-",
// // "content":"One needs something to believe in, something for which one can have whole-hearted enthusiasm.
// //  One needs to feel that one's life has meaning, that one is needed in this world.",
// // "author":"Hannah Szenes",
// // "tags":["Famous Quotes"],
// // "authorSlug":"hannah-szenes",
// // "length":174,
// // "dateAdded":"2020-04-15",
// // "dateModified":"2023-04-14"}
// // ]

// const data = [
//     {
//         _id:"URebKOwzXSM-",
//         content:"One needs something to believe in, something for which one can have whole-hearted enthusiasm. One needs to feel that one's life has meaning, that one is needed in this world.",
//         author:"Hannah Szenes",
//         tags:["Famous Quotes"],
//         authorSlug:"hannah-szenes",
//         length:174,
//         dateAdded:"2020-04-15",
//         dateModified:"2023-04-14"
//     }
// ]



// .env file
// .env file on github