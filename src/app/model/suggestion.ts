export class Suggestion {
  id!: string;
  name: string;
  message: string;
  constructor(name: string, message: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.name = name;
    this.message = message;
  }
}
