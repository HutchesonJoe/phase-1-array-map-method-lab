const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  return tutorials.map(function(title){
     const splitTitle = title.split(" ");
     for (let i=0; i < splitTitle.length; i++){
       splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle [i].substr(1);
     }
     const capitalizedTitle = splitTitle.join(" ");
     return capitalizedTitle
   
 
   
   //console.log(splitTitle)
 })
 }