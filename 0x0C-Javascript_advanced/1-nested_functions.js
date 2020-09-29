/**
 *outer - Funtion that invoke a inner function and alert globalVariable
 *Return: none, only alert and call inner function
 *On Error: no error controls
 */

let globalVariable = "Welcome";
function outer() {
  let course = "Holberton";
  /**
   *inner - Funtion that invoke a inception function and alert globalVariable
            concatenates with course var
   *Return: none, only alert and call inception function
   *On Error: no error controls
   */
  function inner() {
    let exclamation = "!";
    /**
     *inception - Funtion that alert globalVariable
              concatenates with course var and exclamation var
     *Return: none, only alert
     *On Error: no error controls
     */
    function inception() {
      alert(globalVariable + " " + course + " " + exclamation);
    }
    alert(globalVariable + " " + course);
    inception();
  }
  alert(globalVariable);
  inner();
}
outer();
