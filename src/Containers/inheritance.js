function BankAccount(type,customerId,accountNo){
    this.type = type;
    this.customerId = customerId;
    this.accountNo = accountNo;
}

BankAccount.prototype.showDetails = function(){
    console.log(`Type:${this.type},CustomerId:${this.customerId},AccountNo:${this.accountNo}`);}

function SavingAccount(type,customerId,accountNo,details){
    BankAccount.call(this,type,customerId,accountNo);
    this.details = details;

}
SavingAccount.prototype = object.create(BankAccount.prototype); //shallow Copy
SavingAccount.prototype.Datails = function(){
    console.log(`Type:${this.type},Details:${this.details}`);

}
const account = new SavingAccount('Saving','cb101',101,'Mohan')
account.Details();
account.showDetails();