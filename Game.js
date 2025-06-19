let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
score = scoreStr ? JSON.parse(scoreStr) : {          // aane js ni video ma 8.01 kalake joyavvu baki ny samjay
  win : 0,
  lost : 0,
  tie : 0,
};

score.displayScore = function(){
    return `Win: ${score.win}, Lost : ${score.lost}, Tie : ${score.tie}`;   // aa dhyan rakhvu same vastu same ma aave aetle rakhyu che
  };
  showAlert();
}
function genrateComputerChoise(){
   // aama return aetle krsu kem ke globle varable no use na karay function ni umder jem aapde computerchoice no krta hta aene kadhva mate aapde direct return kri didhu
    let randomNumber=Math.random()*3; 
    
    if(randomNumber<=1){
      return 'Stone';         // AANO MEANS AA KOI PN AK CHOOSE KRINE RETURN KARAVI DESE KEM KE BADHU AAPDE NTHI JOTU
    }
    else if(randomNumber<=2){
      return 'Paper';             
    }
    else{
      return 'Scissor';
     }
}

function showAlert(userMove,computerMove,result){
  localStorage.setItem('score',JSON.stringify(score));
 
  document.querySelector('#user-move').innerText = 
   userMove !== undefined ? `you have chosen ${userMove}` : '';
 
  document.querySelector('#computer-move').innerText = 
   computerMove !== undefined ? `computer choise is ${computerMove}` : '';
 
  document.querySelector('#result').innerText = 
   result !== undefined ? `${result}` : '';
 
  document.querySelector('#score').innerText = `${score.displayScore()}`;   
    // aana use thi aapde OBJECT ne pn alert ma show kravi sakye
} 
