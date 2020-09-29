/**
 *welcome - Funtion that alerts 2 strings and "!"
 *firstName: firts string
 *lastName: last string
 *Return: none, only alerts
 *On Error: no error controls
 */

function welcome (firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  function displayFullName () {
    alert('Welcome ' + fullName + '!');
  }
  displayFullName();
}
