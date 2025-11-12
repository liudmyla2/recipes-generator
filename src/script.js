function generateRecipe(event) {
  event.preventDefault();
  
    let recipeElement = document.querySelector("#recipe");
    recipeElement.innerHTML = "Generating recipe...";

new Typewriter("#poem", {
    strings: "Generating recipe...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
