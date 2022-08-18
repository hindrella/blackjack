let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let card=[]
let sum=0
let blackjack=false
let isAlive= false
let message=""
let player={
Name : "hind",
Chips : 745}
playerEl.textContent = player.Name + ": $" + player.Chips
function startGame(){
isAlive= true
let firstCard=getRandomCard()
let secondCard=getRandomCard()
cards=[firstCard,secondCard]
sum=firstCard+secondCard 
renderGame()}
function renderGame(){
    sumEl.textContent="sum: "+sum
    cardsEl.textContent="cards: "
    for(let i=0; i< cards.length;i++){cardsEl.textContent +=cards[i]+" "}
if (sum<=20){ message="do you wanna draw a card? 🃏🤏" ; isAlive=true}
else if (sum===21){message="woohoo! you've got blackjack 🤑" ;  blackjack=true}
else {message="you lost bitch 💩💩💩"  ; isAlive=false  }
messageEl.textContent=message}

function getRandomCard(){
    let random =Math.floor(Math.random()*12)+1
    if (random===1){return 11} else if ((random===11)||(random===12)||(random===13)){return 10} else {return random}
}

function newCard(){
    if((blackjack===false)&&(isAlive===true)){
    console.log("Drawing a new card from the deck!")
    let card=getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()}
}