import { Jokes, SingleJoke, TwoPartJoke } from "./index.interface";

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

// Fetch jokes from API
async function fetchJokes(): Promise<Jokes> {
  const response = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=es`);
  const data = await response.json();
  return data;
}

// Show jokes
const showJokes = async (): Promise<void> => {
  const joke = await fetchJokes();

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
