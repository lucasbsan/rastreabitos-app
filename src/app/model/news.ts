export class News {
  id!: string;
  title: string;
  message: string;
  date: Date;
  constructor(title: string, message: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.title = title;
    this.message = message;
    this.date = new Date();
  }
}
