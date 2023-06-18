import { Habit } from './../model/habit';
import { Constants } from "./constants";

export class Shared {
  constructor() {}

  /**
   * Cadastra um hábito default para criar a estrutura do array
   * dentro do WebStorage
   */
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.HABITS_KEY)) {
      return
    }

    let habit = new Habit("Comer fruta", "Diário", "Alimentação", false);

    localStorage.setItem(Constants.HABITS_KEY, JSON.stringify([habit]));
  }
}
