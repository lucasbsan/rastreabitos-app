export class Suggestion {
  id!: string;
  name: string;
  message: string;
  date: Date;
  constructor(name: string, message: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.name = name;
    this.message = message;
    this.date = new Date();
  }
}
