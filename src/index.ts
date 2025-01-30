import { SingleJoke, TwoPartJoke } from "./index.interface.js";
import { JokeService } from "./joke.service.js";

// Getting html elements from DOM
let showSetUpJokeElement =
  document.querySelector<HTMLElement>(".show__setUp__joke")!;

let showDeliveryJokeElement = document.querySelector<HTMLElement>(
  ".show__delivery__joke"
)!;

let showSingleJokeElement = document.querySelector<HTMLElement>(
  ".show__single__joke"
)!;

let showJokesButton = document.getElementById("btnJoke")!;

let showDetailJokeButton = document.getElementById(" btnDetail")!;

// Calling the service by creating an instance of the class
const jokeService = new JokeService();

// Show jokes
const showJokes = async (): Promise<void> => {
  try {
    const joke = await jokeService.fetchJokes("es");

    const singleJoke = joke as SingleJoke;
    const twoPartJoke = joke as TwoPartJoke;

    if (joke.type === "single") {
      showSingleJokeElement.innerHTML = `${singleJoke.joke}`;
    } else if (joke.type === "twopart") {
      showSetUpJokeElement.innerHTML = `${twoPartJoke.setup}`;

      showDetailButton();

      showDetailJokeButton.addEventListener("click", () => {
        showDeliveryJokeElement.innerHTML = `${twoPartJoke.delivery}`;
      });
    } else {
      throw new Error("No jokes found");
    }
  } catch (error) {
    console.error("Error displaying the jokes", error);
  }
};

// Show jokes when button is clicked
let jokeDisplayed: boolean = false;

showJokesButton.addEventListener("click", () => {
  if (!jokeDisplayed) {
    showJokes();
    jokeDisplayed = true;
  }
});

// Show detail button
function showDetailButton(): void {
  showDetailJokeButton.style.display = "block";
}
