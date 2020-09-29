let globalVariable = "Welcome";
function outer() {
  let course = "Holberton";
  function inner() {
    let exclamation = "!";
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
