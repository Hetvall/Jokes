var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JokeService } from "./joke.service.js";
// Getting html elements from DOM
let showSetUpJokeElement = document.querySelector(".show__setUp__joke");
let showDeliveryJokeElement = document.querySelector(".show__delivery__joke");
let showSingleJokeElement = document.querySelector(".show__single__joke");
let showJokesButton = document.getElementById("btnJoke");
let showDetailJokeButton = document.getElementById(" btnDetail");
// Calling the service by creating an instance of the class
const jokeService = new JokeService();
// Show jokes
const showJokes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const joke = yield jokeService.fetchJokes("es");
        const singleJoke = joke;
        const twoPartJoke = joke;
        if (joke.type === "single") {
            showSingleJokeElement.innerHTML = `${singleJoke.joke}`;
        }
        else if (joke.type === "twopart") {
            showSetUpJokeElement.innerHTML = `${twoPartJoke.setup}`;
            showDetailButton();
            showDetailJokeButton.addEventListener("click", () => {
                showDeliveryJokeElement.innerHTML = `${twoPartJoke.delivery}`;
            });
        }
        else {
            throw new Error("No jokes found");
        }
    }
    catch (error) {
        console.error("Error displaying the jokes", error);
    }
});
// Show jokes when button is clicked
let jokeDisplayed = false;
showJokesButton.addEventListener("click", () => {
    if (!jokeDisplayed) {
        showJokes();
        jokeDisplayed = true;
    }
});
// Show detail button
function showDetailButton() {
    showDetailJokeButton.style.display = "block";
}
