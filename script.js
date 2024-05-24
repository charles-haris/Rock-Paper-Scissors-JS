const computerChoice = Math.random();
let computerSelection = '';
let buttonRock = document.getElementById('rock');  
let buttonPaper = document.getElementById('paper');  
let buttonScissor = document.getElementById('Scissor');  
let buttonReset = document.getElementById('reset');  
let computerVsUser = document.querySelector(".computer-vs-user");
let computerScore = document.querySelector(".computer-score");
let userScore = document.querySelector(".user-score");
let matchNull = document.querySelector(".match-null");


let party = {
  tie: 0,
  won: 0,
  lose: 0,
};


console.log(localStorage.getItem('party'));
console.log(localStorage.getItem('computerVsUser'));
computerVsUser.innerHTML = localStorage.getItem('computerVsUser');
computerScore.innerText = "Score of the computer : "+JSON.parse(localStorage.getItem('party')).lose;
userScore.innerText = "Your score : " + JSON.parse(localStorage.getItem('party')).won;
matchNull.innerText = "Tie : " + JSON.parse(localStorage.getItem('party')).tie;

if(JSON.parse(localStorage.getItem('party')).tie===0 && JSON.parse(localStorage.getItem('party')).won===0 && JSON.parse(localStorage.getItem('party')).lose===0){

}else{
  if(localStorage.getItem('resetColor')==="red"){
    computerScore.classList.add('is-green');
    userScore.classList.add('is-red');

  }else if(localStorage.getItem('resetColor')==="green"){
    computerScore.classList.add('is-red');
    userScore.classList.add('is-green');
  }else{
    computerScore.classList.remove('is-red');
    userScore.classList.remove('is-green');
    computerScore.classList.remove('is-green');
    userScore.classList.remove('is-red');
  }
}



 party = {
  tie: JSON.parse(localStorage.getItem('party')).tie,
  won: JSON.parse(localStorage.getItem('party')).won,
  lose: JSON.parse(localStorage.getItem('party')).lose,
};
if(computerChoice<=1/3){
  computerSelection='Scissor';
}else if(computerChoice>1/3 && computerChoice<=2/3){
  computerSelection='Rock';
}else if(computerChoice>2/3 && computerChoice<1){
  computerSelection='Paper';
}

buttonRock.addEventListener('click',()=>{
  let button = 'Rock';
  run(button,computerSelection,'Paper');

});

buttonPaper.addEventListener('click',()=>{
  let button = 'Paper';
  run(button,computerSelection,'Scissor');
});

buttonScissor.addEventListener('click',()=>{
  let button = 'Scissor';
  run(button,computerSelection,'Rock');
});

buttonReset.addEventListener("click",()=>{
  localStorage.removeItem('party');
  party = {
  tie: 0,
  won: 0,
  lose: 0,
};
  localStorage.setItem('party',JSON.stringify(party));
  console.log(localStorage.getItem('party'));

  localStorage.setItem('computerVsUser',"Nobody has played yet!");
  window.location.reload();


});

function run(button,computerSelection,computerSelectionOther){
let cptuser ="";
let resetColor = "";

  if(button===computerSelection){
      party.tie++;
      cptuser = `you picked <b> ${button} </b>, the computer picked <b>${computerSelection} </b> Result: <b>Tie! </b>`;
      resetColor = "";

  }else if(computerSelection===computerSelectionOther){

      party.lose++;
      cptuser = `you picked <b> ${button} </b>, the computer picked <b>${computerSelection} </b> Result: <b>you have lost! </b>`;
      resetColor = "red";

  }else{

      party.won++;
      cptuser = `you picked <b> ${button} </b>, the computer picked <b>${computerSelection} </b> Result: <b>you have won! </b>`;
      resetColor = "green";

  } 

  localStorage.setItem('party',JSON.stringify(party));
  localStorage.setItem('computerVsUser',cptuser);
  localStorage.setItem('resetColor',resetColor);
  window.location.reload();

 

}


