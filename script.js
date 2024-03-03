'use strict';
// let randomNum=
const check=document.querySelector('.check')
const guessNo= document.querySelector('.guess')
const resultMsg= document.querySelector('.message')
const displayScore=document.querySelector('.score')
const displayHighScore=document.querySelector('.highscore')
const topMsg=document.querySelector('.topMsg')
const resetBtn= document.querySelector('.again')

let score=20
let highScore=0;
let randomNum = Math.trunc(Math.random()*20)+1
console.log(randomNum);

const updateUI=function(){
  score--;
    displayScore.textContent=score;
    if( score<1){
      document.querySelector('body').style.backgroundColor='rgba(227, 32, 57, 0.8)';
      document.querySelector('main').style.opacity=0;
      // resultMsg.style.opacity=1;
      document.querySelector('.number').classList.add('hidden')
      topMsg.textContent='Lost! 🥲'
      
    }
}


check.addEventListener('click',(e)=>{
  e.preventDefault()
  console.log('I m clicked');
  console.log(randomNum);
  
  console.log(Number(guessNo.value));
if(Number(guessNo.value)>0 && Number(guessNo.value)<21 ){
  if (Number(guessNo.value)===randomNum){ 
    document.querySelector('.number').textContent=randomNum;
    document.querySelector('body').style.backgroundColor='rgba(55, 203, 63, 0.8)'
    resultMsg.textContent='Victorty! 🎉'
    if(score>highScore){highScore=score;
      displayHighScore.textContent=highScore}
  }
else if(Number(guessNo.value)>randomNum){
  resultMsg.textContent='Too High! 📈'
updateUI()
    
}
else if(Number(guessNo.value)<randomNum){
  resultMsg.textContent='Too Low! 📉 '
  updateUI()
  
}

}
else{
  resultMsg.textContent='Enter a correct value!'
}


})
resetBtn.addEventListener('click',()=>{

  document.querySelector('body').style.backgroundColor='black'
score=20;
displayScore.textContent=score;
resultMsg.textContent='Star guessing...'
guessNo.value=null
document.querySelector('.number').textContent='?'

//========
// document.querySelector('header').style.backgroundColor='black';
document.querySelector('main').style.opacity=1;
// resultMsg.style.opacity=1;
document.querySelector('.number').classList.remove('hidden')
topMsg.textContent='Guess My Number!'

})