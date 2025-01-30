import { Jokes } from "./index.interface";

export class JokeService {
  baseUrl = "https://v2.jokeapi.dev/joke/Any";

  async fetchJokes(lang: string): Promise<Jokes> {
    const url = `${this.baseUrl}?lang=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
