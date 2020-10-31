import { Account } from "./Account.js";

export class SavingAccount extends Account {
  constructor(initialBalance, client, agency) {
    super(initialBalance, client, agency);
  }

  withdrawal(value) {
    const tax = 1.02;

    return this._withdrawal(value, tax);
  }
}
