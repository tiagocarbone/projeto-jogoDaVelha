let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll(".buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
 


// counter of player
let player1 = 0;
let player2 = 0;
 


for (let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click',function(){
        let el = checkEl(player1, player2)

        if (this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl)

            if(player1 == player2){
                player1++

                if (secondPlayer == 'ai-player'){

                    computerPlay()
                    player2++
                }
            } else {
                player2++
            }
            checkWinCondition()
        }
    })
}




// two player or vs ia


for (let i = 0; i < buttons.length; i++){  
    buttons[i].addEventListener('click', function(){
        secondPlayer = this.getAttribute('id')
        console.log(secondPlayer)
        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
        }

        setTimeout(function(){
            let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 100)

    })

}
 
// Check who will play
function checkEl(player1, player2){
  if(player1 == player2){
    el = x;
  }else{
    el = o;
  }
  return el;
}
 
//who win
function checkWinCondition(){
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");
 
  // Horizontal check
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;
 
    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
      //x
      console.log('x win')
      declareWinner('x');
    }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
      //o
      console.log('0 win')
      declareWinner('o');
    }
  }
 
  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
 
    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
      //x
      declareWinner('x');
    }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
      //o
      declareWinner('o')
    }
  }
 
  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
 
    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
      //x
      declareWinner('x')
    }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
      //o
      declareWinner('o')
    }
  }
 
  // vertical check
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
 
    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
      //x
      declareWinner('x')
    }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
      //o
      declareWinner('o')
    }
  }
 
  if(b5.childNodes.length > 0 && b2.childNodes.length > 0 && b8.childNodes.length > 0){
    let b5Child = b5.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
 
    if(b5Child == 'x' && b2Child == 'x' && b8Child == 'x'){
      //x
      declareWinner('x')
    }else if(b5Child == 'o' && b2Child == 'o' && b8Child == 'o'){
      //o
      declareWinner('o')
    }
  }
 
  if(b6.childNodes.length > 0 && b9.childNodes.length > 0 && b3.childNodes.length > 0){
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;
 
    if(b6Child == 'x' && b9Child == 'x' && b3Child == 'x'){
      //x
      declareWinner('x')
    }else if(b6Child == 'o' && b9Child == 'o' && b3Child == 'o'){
      //o
      declareWinner('o')
    }
  }
 
  //diagonal check
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
 
    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
      //x
      declareWinner('x')
    }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
      //o
      declareWinner('o')
    }
  }
 
  if(b5.childNodes.length > 0 && b7.childNodes.length > 0 && b3.childNodes.length > 0){
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;
 
    if(b5Child == 'x' && b7Child == 'x' && b3Child == 'x'){
      //x
      declareWinner('x')
    }else if(b5Child == 'o' && b7Child == 'o' && b3Child == 'o'){
      //o
      declareWinner('o')
    }
  }
 
  // There was no winner
  let counter = 0;
 
  for(let i = 0; i < boxes.length; i++){
    if(boxes[i].childNodes[0] != undefined){
      counter++
    }
  }
 
  if(counter == 9){
    declareWinner('There was no winner');
  }  
}
 
// Clear the game, declare the winner, and update the score.
function declareWinner(winner){
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardY = document.querySelector("#scoreboard-2");
  if(winner == 'x'){
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "Player 1 win";
  }else if(winner == 'o'){    
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = "Player 2 win";
  }else{
    msg = "There was no winner";
  }
 
  // show message
  messageText.innerHTML = msg;
  messageContainer.classList.remove('hide')
 
  // hide message

  setTimeout(function(){
    messageContainer.classList.add('hide')
    
  }, 2000)

  // new game

  player1 = 0
  player2 = 0

  // remove x and o

  let boxesToRemove = document.querySelectorAll('.box div')
    
  for(let i = 0; i < boxesToRemove.length; i++){
   boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
   
  }
}

// cpu game
function computerPlay(){
    
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0
    // so preenche se tiver vazio o filho
    for (let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random()  * 5) 

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO)
                counter++
                break
            }
            // checa quantas estão preenchicas
        } else {
            filled++
        }
    }

    if (counter == 0 && filled < 9 ){
        computerPlay()
    }
}
