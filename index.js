// <div class="joke" id="joke">Awesonme Joke is Loading...</div>
//        <button id="Jokebtn" class="btn">Get Joke</button>
// PROMISES
// GET https://icanhazdadjoke.com/
const joke = document.querySelector("#joke");
const jokebtn = document.querySelector("#Jokebtn");

// const generateJoke = () => {  
    
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
    
//  fetch("https://icanhazdadjoke.com/",setHeader).then((res) => res.json()).then((data) => {joke.innerHTML = data.joke;}).catch((error) => console.log(error));
// }

const generateJoke = async () => {  
   try { 
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    const res = await fetch("https://icanhazdadjoke.com/",setHeader);
    const data = await res.json();
    joke.innnerHTML = data.joke;
   } catch (error) {
    console.log(error);
}
    
} 

jokebtn.addEventListener("click", generateJoke);
generateJoke();