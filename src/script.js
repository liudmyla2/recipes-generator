function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}


function generateRecipe(event) {
    event.preventDefault();
    
    let instructionsInput = document.querySelector("#ingredients");
  
    let apiKey = "tfb8e2a7d0b2e327445f129854d65o00";
    let context =
      "You are a professional cook and culinary expert. Use HTML tags to format the recipe output. Generate only HTML markup for recipes — no style tags, inline styles, or CSS — just clean semantic HTML with emojis pnly before the major sections of the recipe. Generate realistic, tasty recipes based on the given ingredients. Combine them logically as a chef would — if ingredients do not fit together, suggest a reasonable alternative or a simple dish that uses most of them.";
    let prompt = `Write a recipe based on the ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}
`;
    axios.get(apiUrl).then(displayRecipe);
    

}

let recipeFormElement = document.querySelector("#generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

function displayRecipe(response) {
  let recipeElement = document.querySelector("#recipe");

 
  let cleanHTML = response.data.answer
    .replace(/```html/gi, "")
    .replace(/```/g, "")
    .trim();
  
  cleanHTML = cleanHTML.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  recipeElement.innerHTML = cleanHTML;
}