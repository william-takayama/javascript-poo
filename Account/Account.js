// Abstract class - can't be instantiated just inherit
export class Account {
  constructor(initialBalance, client, agency) {
    if (this.constructor == Account) {
      throw new Error(
        "You mustn't not instantiate this class, because this is an abstract class"
      );
    }
    // Private attribute differs from _balance - #balance doesn't appear even on console.log
    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
  }

  set client(newClient) {
    if (newClient instanceof Client) {
      this._client = newClient;
    }
  }

  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  // Abstract method
  withdrawal(value) {
    throw new Error(
      "The withdrawal method is abstract, then some class must have forgotten to overwrite it"
    );
  }

  _withdrawal(value, tax) {
    const withdrawalValue = tax * value;

    if (this._balance >= withdrawalValue) {
      this._balance -= withdrawalValue;
      return withdrawalValue;
    }

    return 0;
  }

  deposit(value) {
    // Early return technique
    // if (value <= 0) {
    //   return;
    // }
    this._balance += value;
  }

  transfer(value, account) {
    const withdrawalValue = this.withdrawal(value);
    account.deposit(withdrawalValue);
  }
}
