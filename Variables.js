const accountId = 123456789;
console.log(accountId);
/* const cannot be changed once it is assigned */
// accountId = 987654321; 
// console.log(accountId);

/* let is limited to block scope */
{
    let accountEmail = "test@gmail.com";
    console.log(accountEmail);
}
console.log(accountEmail);

/* var has a global scope */
{
    var accountPassword = 123456789;
    console.log(accountPassword);
}
console.log(accountPassword);
