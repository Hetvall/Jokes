var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
let showSetUpJokeElement = document.querySelector(".show__setUp__joke");
let showDeliveryJokeElement = document.querySelector(".show__delivery__joke");
let showSingleJokeElement = document.querySelector(".show__single__joke");
let showJokesButton = document.getElementById("btnJoke");
let showDetailJokeButton = document.getElementById(" btnDetail");
// Fetch jokes from API
function fetchJokes() {
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch(`https://v2.jokeapi.dev/joke/Any?lang=es`);
    const data = yield response.json();
    return data;
  });
}
// Show jokes
const showJokes = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const joke = yield fetchJokes();
    const singleJoke = joke;
    const twoPartJoke = joke;
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
