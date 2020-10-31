import { Account } from "./Account.js";

export class SalaryAccount extends Account {
  constructor(client) {
    super(0, client, 100);
  }

  withdrawal(value) {
    const tax = 1.01;
    return this._withdrawal(value, tax);
  }
}
