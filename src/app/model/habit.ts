export class Habit {
  id!: number;
  description: string;
  period: string;
  category: string;
  isNotificationsEnabled: boolean;
  constructor(id: number, description: string, period: string, category: string, isNotificationsEnabled: boolean) {
    this.id = id;
    this.description = description;
    this.period = period;
    this.category = category;
    this.isNotificationsEnabled = isNotificationsEnabled;
  }
}
