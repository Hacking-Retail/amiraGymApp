var quotes = ['All progress takes place outside the comfort zone- Michael John Bobak',
  'The clock is ticking. Are you becoming the person you want to be? -  Greg Plitt',
  'Action is the foundational key to all success - Pablo Picasso',
  ]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML =`" ${quotes[randomNumber]} "` ;
}

