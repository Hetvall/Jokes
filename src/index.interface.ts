export interface Jokes {
  error: boolean;
  category: string;
  type: "single" | "twopart";
  flags: Flags;
  safe: boolean;
  id: number;
  lang: string;
}

export interface SingleJoke extends Jokes {
  type: "single";
  joke: string;
}

export interface TwoPartJoke extends Jokes {
  type: "twopart";
  setup: string;
  delivery: string;
}

interface Flags {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}
