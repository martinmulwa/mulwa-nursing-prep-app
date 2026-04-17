export type Question = {
  num: number;
  topic: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  wrongReasons: { [key: number]: string };
  memory: string;
};
