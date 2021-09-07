//Objects

var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('Hi what is your name ? ');
console.log('Hi ' + userName + ' lets have a football quiz !');

function play(question,answer){
  var userAns = readlineSync.question(question);
  if(userAns===answer){
    console.log('You are correct');
    score++;
    console.log('Your Score is '+ score);
    console.log('----------------------------')
  }
  else{
    console.log('No you are wrong');
    score--;
    console.log('Your score is '+score);
    console.log('----------------------------')
  }
}


question1={
  question:'Most Ucl trophies won by club ? ',
  answer:'Real Madrid'
}

question2={
  question:'Most Ucl trophies won by a English club ? ',
  answer:'Liverpool'
}
question3={
  question:'Who is the Goat ? ',
  answer:'Messi'
}

var highScore = [
  {
    name:'Vivek',
    score:3
  },
  {
    name:'Aadi',
    score:2

  }
]

var questionArr = [question1,question2,question3];

for(var i=0;i<questionArr.length;i++){
  play(questionArr[i].question,questionArr[i].answer)
}

console.log('You win your overall Score is ' + score);


console.log('High Scores are : ');
for(var i=0;i<highScore.length;i++){
  console.log(highScore[i].name,highScore[i].score);
}

if(score>=highScore[0].score){
  console.log('Congrats' + userName + ' You have made the highScore contact me so that i can add You to the list 💥');
}