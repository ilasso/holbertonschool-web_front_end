/**
 *welcomeMessage - Funtion that alerts "Welcome" + string argument
 *fullName: string to alert
 *Return: none, only alerts
 *On Error: no error controls
*/
function welcomeMessage(fullName) {
  alert("Welcome" + " " + fullName);
}
//define callbacks
let guillaume = function() {welcomeMessage("Guillaume")};
let alex = function() {welcomeMessage("Alex")};
let fred = function() {welcomeMessage("Fred")};
