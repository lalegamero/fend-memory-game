/*
* Global variables
*/
/* Create a list that holds all of your cards */
const listOfCards = document.getElementsByClassName('card');
/* Create an array to store all cards symobls */
const iconsArray = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle",
              "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

/* Get the cards deck - Create a reference to the deck element */
const deck = document.getElementById("card-deck");

/* Create an empty array to store every opened card when click */
let openedCards = [];

/* Call the function resetDeck() to reset the deck when the document is loaded */
document.onload = resetDeck();

/*
* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page
*/

 const shuffledArray = shuffle(iconsArray);

 for (let i = 0; i < iconsArray.length; i++) {
    const newCard = document.createElement('li');
    newCard.setAttribute('class', 'card');
    newCard.innerHTML = "<i class=\"" + iconsArray[i] + "\"></i>";
    deck.appendChild(newCard);

    /* Add an event listener when the user clicks a card */
    newCard.addEventListener('click', function(){
      /* Compare if cards clicked matched or not */
      /* first check if the temp array contains another card */
      if (openedCards.length === 1) {
        /* Add "open" & "show" classes to the card clicked */
        newCard.classList.add('open', 'show');
        /* Add "this" card (the one clicked) to a temporary array */
        openedCards.push(this);
          /* compare cards stored in the temp array */
          if (this.innerHTML === openedCards[0].innerHTML) {
            /* if true --> add the class "match" to both elements (cards) */
            this.classList.add('match');
            openedCards[0].classList.add('match');
            openedCards.length = 0;
          } else {
            /* if they do not match, just turn the cards again */
            this.classList.remove('open', 'show');
            openedCards[0].classList.remove('open', 'show');
          }
        openedCards.length = 0;
      } else {
        /* Add "open" & "show" classes to the card clicked */
        newCard.classList.add('open', 'show');
        /* Add "this" card (the one clicked) to a temporary array */
        openedCards.push(this);
      }
    });
 }

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/* Function to remove all content in the "deck" element */
function resetDeck() {
  deck.innerHTML = '';
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
