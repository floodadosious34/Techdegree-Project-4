/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Life is what happens when you’re busy making other plans.',
    source: 'John Lennon',
    citation: 'Double Fantasy',
    year: '1980'
  },
  {
    quote: 'Works of art make rules; rules do not make works of art.',
    source: 'Claude Debussy',
    citation: 'Companion to Contemporary Musical Thought',
    year: '1992'
  },
  {
    quote: 'One should either be a work of art, or wear a work of art.',
    source: 'Oscar Wilde',
    citation: 'The Soul of Man under Socialism',
    year: '1891'

  },
  {
    quote: 'Melody is the essence of music.',
    source: 'Wolfgang Amadeus Mozart',
    citation: 'Reminiscences of Michael Kelly',
    year: '1826'
  },
  {
    quote: 'For me, music and life are al about style.',
    source: 'Miles Davis',
    citation: 'Miles, the Autobiography',
    year: '1989'
  },
  {
    quote: 'My music is best understood by children and animals',
    source: 'Igor Stravinsky',
    citation: 'The Observer',
    year: '1961'
  },
  {
    quote: 'The song is the center; the song is the key.',
    source: 'Carole King',
    citation: 'The Birmingham Post',
    year: '2001'
  }
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote () {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  console.log(randomNumber);
  let result = quotes[randomNumber];
  console.log(result);
  return result;
}

getRandomQuote();


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);