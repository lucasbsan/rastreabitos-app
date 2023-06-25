export class Habit {
  id!: string;
  description: string;
  period: string;
  category: string;
  isNotificationsEnabled: boolean;
  constructor(description: string, period: string, category: string, isNotificationsEnabled: boolean) {
    this.id = String(Math.round(Math.random() * 1000));
    this.description = description;
    this.period = period;
    this.category = category;
    this.isNotificationsEnabled = isNotificationsEnabled;
  }

  public static clone(habit: Habit) {
    let h: Habit = new Habit(habit.description, habit.period, habit.category, habit.isNotificationsEnabled);
    h.description = habit.description;
    h.period = habit.period;
    h.category = habit.category;
    h.isNotificationsEnabled = habit.isNotificationsEnabled;
    return h;
  }
}
