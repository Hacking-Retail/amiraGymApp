var quotes = ['All progress takes place outside your comfort zone',
  'The clock is ticking. Are you becoming the person you want to be? ',
  'Action is the foundational key to all success ',
  ]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML =`" ${quotes[randomNumber]} "` ;
}

