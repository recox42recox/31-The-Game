

let inputEl = document.getElementById("input-el")



let cardsBtn = document.getElementById("card-btn");

let playerEl = document.getElementById("player-el")

let sumEl = document.getElementById("sum-el");

let cardsEl= document.getElementById("cards-el");   

let newGame = document.getElementById("new-btn")

let cards = [];

let addage = 0;

let gameStart = true;

let hasWon = false;

let hasLost = false;

let titleEl = document.getElementById("title")

let player = {


    name:"",
    money: 0 


}



cardsBtn.addEventListener("click", function(){

    if(inputEl.value != ""){
        player.name = inputEl.value



  
if (hasLost == false){


    if (gameStart){

        cardsEl.textContent = "Cards you have drawn:"

    }







sumEl.textContent = "Sum of your cards:";



let randomCard = Math.floor(Math.random() * 13) + 1;


if(randomCard==11||randomCard==12 || randomCard==13 ){

randomCard = 10

}






cards.push(randomCard);

        for( let i = 0; i < cards.length ; i++){
        addage += Number(cards[i])
        sumEl.textContent = "Sum of your cards: " + addage
        }



cardsEl.textContent += " " + randomCard;



if (addage < 21){

titleEl.textContent = "You have not even reached 21 yet, go draw a card!"

} else if(addage==21){
titleEl.textContent = "You have reached 21, do you take the risk?"
player.money += 15


} else if (addage < 31){

    titleEl.textContent = "Well, you chose the risky path..."
    player.money += 3
} else if(addage == 31){

        titleEl.textContent = "GG YOU HIT THE JACKPOT!!!"
            hasLost= true
          player.money += 31

}else{

        titleEl.textContent = "You lost poorly, never gamble again kid..."
        hasLost = true
        player.money -= 20
}










playerEl.innerHTML = `<h3> ${player.name}  ---  ${player.money}$ </h3>`


addage = 0

gameStart = false



}  }else{

    alert("Please enter your name!")
}

});

newGame.addEventListener("click", function(){





 cards = [];
 addage = 0;
 gameStart = true;
 hasWon = false;
hasLost = false;

sumEl.textContent = ""
cardsEl.textContent = ""

titleEl.textContent =" Draw a card to start the 31 game!"







    
})




