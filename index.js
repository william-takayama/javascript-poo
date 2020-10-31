import { Account } from "./Account/Account.js";
import { Client } from "./Client.js";
import { CurrentAccount } from "./Account/CurrentAccount.js";
import { SalaryAccount } from "./Account/SalaryAccount.js";
import { SavingAccount } from "./Account/SavingAccount.js";
import { Director } from "./Employees/Director.js";
import { Manager } from "./Employees/Manager.js";
import { AuthSystem } from "./AuthSystem.js";

/** Client and Account
 const client1 = new Client("Will", 12345678954);
 
 const willAccount = new CurrentAccount(client1, 1001);
 willAccount.deposit(1000);
 willAccount.withdrawal(100);
 
 const savingAccount = new SavingAccount(50, client1, 1001);
 // Throw an error - abstract class
 // const a = new Account(50, client1, 1001);
 savingAccount.withdrawal(10);
 
 const salaryAccount = new SalaryAccount(client1);
 salaryAccount.deposit(100);
 salaryAccount.withdrawal(10);
 
 console.log(salaryAccount);
 console.log(willAccount);
 console.log(savingAccount);
 */

const director = new Director("Will", 10000, 12332112354);
director.registerPassword("12345678");
const manager = new Manager("Will", 10000, 12332112354);
manager.registerPassword("87654321");
const client = new Client("Raquel", 32112332144, "456");

const directorIsLogged = AuthSystem.login(director, "12345678");
const managerIsLogged = AuthSystem.login(manager, "87654321");
const clientIsLogged = AuthSystem.login(client, "456");

console.log(directorIsLogged, managerIsLogged, clientIsLogged);
