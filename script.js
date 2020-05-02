var body = document.getElementById("body");
var text = document.querySelector('p');
const btn = document.createElement('BUTTON');

//array of strings to be displayed
var arr = ['read a book', 
'go for a quick walk' , 
'call a friend', 
'meditate for 5 minutes', 
'drink a glass of water', 
'stare out your window', 
'stretch', 
'find a recipie to make for dinner']
    

// function to shuffle array, from stackoverflow
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };
  

  function createButton() {

   btn.innerHTML= "What Should I do Right Now?";
   document.body.appendChild(btn);
   repeatButton: true;
};

createButton();

// Used like so
shuffle(arr);
console.log(arr);

function showIndex(arr) {
    return arr[0]};

function displayIndex() {
text.textContent = showIndex(arr);
};

btn.addEventListener("click", displayIndex);