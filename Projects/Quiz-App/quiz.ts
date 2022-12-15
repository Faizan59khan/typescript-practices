//Quiz App
interface Quiz {
  question: string;
  options: {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  },
  correctOption: string
}

const quiz : Quiz[] = [
  {
    question: "What is the capital of France?",
    options: {
      option1: "Paris",
      option2: "London",
      option3: "Rome",
      option4: "Madrid"
    },
    correctOption: 'Paris',
  },
  {
    question: "What is the largest planet in our solar system?",
    options: {
      option1: "Earth",
      option2: "Jupiter",
      option3: "Saturn",
      option4: "Neptune"
    },
    correctOption: 'Jupiter',
  },
  {
    question: "What is the symbol for hydrogen in the periodic table?",
    options: {
      option1: "H",
      option2: "He",
      option3: "Li",
      option4: "C"
    },
    correctOption: 'H',
  }
] 





function quizProgram(quiz: Quiz[]){
  const div=document.querySelector('#quetions');
  let j=0;
  quiz.forEach((ques)=> {
    let h3=document.createElement('h3');
    let select=document.createElement('select');
    select.setAttribute('id',`select${j}`)
    for(let i=0;i<quiz.length;i++){
      let options=document.createElement('option');
      options.innerHTML=quiz[j]?.options?.[`option${i+1}`];
      options.setAttribute('value',quiz[j]?.options?.[`option${i+1}`])
      select.appendChild(options);
    }
    h3.innerHTML=ques.question;
    div?.appendChild(h3);
    div?.appendChild(select);
    j++;
  })
}

quizProgram(quiz)
function checkAnswers(){
  const div=document.querySelector('#quetions') as HTMLSelectElement;
  let j=div.childNodes.length/2; 
  for(let k=0;k<j;k++){
    let h4=document.createElement('h4');
  let select=document.querySelector(`#select${k}`) as HTMLSelectElement;
   if(select.value === quiz[k].correctOption){
    h4.innerHTML=`${k+1} - Correct`
   }
   else{
    h4.innerHTML=`${k+1} - Wrong`;
   }
   div.appendChild(h4); 
} 
}

