document.addEventListener('DOMContentLoaded', (event) => {
   const plusButton = document.getElementById("plus");
   const minusButton = document.getElementById("minus");
   const heartButton = document.getElementById("heart");
   const pauseButton = document.getElementById("pause");
   const counterElement = document.getElementById("counter");
   const likesLists = document.getElementsByClassName("likes");
   const firstLikesList = likesLists[0];
   const commentsList = document.getElementById("list");
   const commentForm = document.getElementById("comment-form");
   const commentInput = document.getElementById("comment-input");
   
   plusButton.addEventListener("click", makeTimerIncrease);

   minusButton.addEventListener("click", makeTimerDecrease);

   heartButton.addEventListener("click",function() {
    const currentCounterELement = counterElement.innerText;
    let counterListItem = document.getElementById(currentCounterELement);
    let counterListItemClass = 1;
    let counterListItemText = `${currentCounterELement} has been liked `;
    if (counterListItem) {
      counterListItemClass = Number(counterListItem.className) + 1;
      counterListItemText += `${counterListItemClass} times`;
    } else {
      counterListItem = document.createElement("li");
      counterListItem.setAttribute("id",currentCounterELement);
      counterListItemText += "1 time";
    };
    counterListItem.setAttribute("class",counterListItemClass);
    counterListItem.innerText = counterListItemText;
    firstLikesList.appendChild(counterListItem);
   });
   
   pauseButton.addEventListener("click",function() {
    if (pauseButton.innerText == "pause") {
      clearInterval(timer);
      plusButton.disabled = true;
      minusButton.disabled = true;
      heartButton.disabled = true;
      pauseButton.innerText = "resume";
    } else {
      timer = setInterval(makeTimerIncrease, 1000);
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
      pauseButton.innerText = "pause";
    }
   });

   commentForm.addEventListener("submit",function(event){
    event.preventDefault();
    commentParagraph = document.createElement("p");
    commentParagraph.innerText = commentInput.text;
    commentsList.appendChild(commentParagraph);
   })

   function makeTimerIncrease() {
     counterElement.innerText++;
   }
   
   function makeTimerDecrease() {
    counterElement.innerText--;
  }

   let timer = setInterval(makeTimerIncrease, 1000);
});