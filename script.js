
/**Scoreboard object*/
  let scoreBoard = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};

  /*Reset score function*/
  function reset () {
    scoreBoard.Wins = 0;
    scoreBoard.Losses = 0;
    scoreBoard.Ties = 0;

    localStorage.setItem('score', JSON.stringify(scoreBoard));
  }

  /*Game play function*/
  
  function playGame(playerMove){ 

    const computerMove = randomMovegenerator();

    /*rock branch*/
    if (playerMove === 'rock') {
    if (computerMove === 'rock') {
    result = '(Its a Tie)... "Caught you, try again"';
  }
  else if (computerMove === 'paper'){
    result = '(you LOSE)... "YOU ARE AWARE YOU CANT BEST ME, RIGHT? RIGHT!"'; 
  }

  else if (computerMove === 'skero') {
    result = '(you win)... "BEGINNERS LUCK"';
  }
  } /*paper branch*/

    else if (playerMove === 'paper'){
       if (computerMove === 'rock') {
    result = '(you win)... "BEGINNERS LUCK"';
    }

  else if (computerMove === 'paper'){
    result = '(Its a Tie)... "Caught you, try again"';
  }

  else if (computerMove === 'skero') {
    result = '(you LOSE)... "YOU ARE AWARE YOU CANT BEST ME, RIGHT? RIGHT!"';
  }
 } /*Skero branch*/

    else if (playerMove === 'skero') {

  if (computerMove === 'rock') {
    result = '(you LOSE)... "YOU ARE AWARE YOU CANT BEST ME, RIGHT? RIGHT!"';
    
    }

  else if (computerMove === 'paper'){
    result = '(you win)... "BEGINNERS LUCK"';
  }

  else if (computerMove === 'skero') {
    result = '(Its a Tie)... "Caught you, try again"';
    
  }
   
  }

  /*score update branch*/
  
   if (result === '(you win)... "BEGINNERS LUCK"') {
    scoreBoard.Wins += 1;
  }
  else if (result === '(Its a Tie)... "Caught you, try again"')   {
    scoreBoard.Ties += 1;
  }
  else if (result === '(you LOSE)... "YOU ARE AWARE YOU CANT BEST ME, RIGHT? RIGHT!"') {
    scoreBoard.Losses += 1;
  }

  localStorage.setItem('score', JSON.stringify(scoreBoard));

   /*results desplay*/
  alert(`Computer picked ${computerMove}. ${result}.


   Wins:${scoreBoard.Wins}  Losses:${scoreBoard.Losses}  Ties:${scoreBoard.Ties}`);
  }

  /*Random move function*/
  function randomMovegenerator() {
    const randomNumber = Math.random()
    let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3 ){
      computerMove = 'rock';
  }

  else if ( randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
  }

  else if (randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'skero';
  }
  return computerMove;
  }
