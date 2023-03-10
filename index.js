const ratingSection = document.querySelector(".rating-section");
const rateButtons = ratingSection.querySelector(".rate-buttons"); 
const selectedButton = rateButtons.querySelector(".selected"); 
const submitButton = document.querySelector("input.button");
const header = document.querySelector("h1"); 
const ratingSelected = document.querySelector("div.you-selected-text");
const ratingSelectedText = document.querySelector("p.you-selected-text");
const image = document.querySelector("img");
const imageCircle = document.querySelector("div.circle");
const gridContainer = document.querySelector(".grid-group");
const explanation = document.querySelector(".explanatory-text");
let rating;


rateButtons.addEventListener("click", (e) => {
    const button = e.target; 

   Array.from(button.parentNode.children).forEach(k => {
        k.classList.remove("selected");
    }); 

   if(e.target.matches("button")) {
        button.classList.add("selected"); 
        rating = e.target.value; 
   }
})


submitButton.addEventListener("click", () => {

    if (rating != undefined) {
        ratingSelectedText.textContent = "You selected " + rating + " out of 5";
        ratingSelected.classList.remove("hidden"); 
        ratingSelectedText.classList.remove("hidden");
        ratingSelected.classList.add("rating-selected");
        image.setAttribute("src", "images/illustration-thank-you.svg");
        image.classList.remove("star");
        imageCircle.classList.remove("circle");
        submitButton.classList.add("hidden");
        ratingSection.classList.add("hidden");
        header.textContent = "Thank you!";
        gridContainer.classList.add("center"); 
        explanation.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    }
    
})




