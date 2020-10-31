import { Account } from "./Account.js";

export class CurrentAccount extends Account {
  static accountCounter = 0;

  constructor(client, agency) {
    // call the constructor
    super(0, client, agency);
    // Each instance of this class will add 1
    CurrentAccount.accountCounter += 1;
  }

  // overwrite method of parent class
  withdrawal(value) {
    let tax = 1.1;

    return this._withdrawal(value, tax);
  }
}
