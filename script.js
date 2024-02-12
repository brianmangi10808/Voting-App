//start
function votes(name){
   let display = document.createElement('li');
   display.textContent = name;
   let listVote = document.querySelector('.list-vote');
   listVote.append(display);
}