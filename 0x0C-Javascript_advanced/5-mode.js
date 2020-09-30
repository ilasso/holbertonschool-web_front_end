/**
 *changeMode - Funtion that  change styles
 *@size: fontSize
 *@weight: fontWeight
 *@transform: textTransform
 *@background: backgroundColor
 *@color: stylecolor
 *Return: none, only change style
 *On Error: no control error
*/

function changeMode(size, weight, transform, background, color) {
  return function () {
     document.documentElement.style.fontSize = size;
     document.documentElement.style.fontWeight = weight;
     document.documentElement.style.textTransform = transform;
     document.documentElement.style.backgroundColor = background;
     document.documentElement.style.color = color;
  }
}
/**
 *main - Main Funtion change dom to add buttuns to change styles
  *Return: none, only change style
 *On Error: no control error
*/
function main() {
  // clousures
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // create paragraph element
  let bodypar = document.createElement('p');

  // create buttons element
  let bodybutspooky  = document.createElement('button');
  let bodybutdark  = document.createElement('button');
  let bodybutscream  = document.createElement('button');

  // values attributes
  bodypar.textContent = "Welcome Holberton!";
  bodybutspooky.textContent = "Spooky";
  bodybutspooky.setAttribute("id","spooky");
  bodybutdark.textContent = "Dark mode";
  bodybutdark.setAttribute("id","Dark");
  bodybutscream.textContent = "Scream mode";
  bodybutscream.setAttribute("id","Scream");

  // create nodes
  document.body.appendChild(bodypar);
  document.body.appendChild(bodybutspooky);
  document.body.appendChild(bodybutdark);
  document.body.appendChild(bodybutscream);

  document.getElementById('spooky').onclick = spooky;
  document.getElementById('Dark').onclick = darkMode;
  document.getElementById('Scream').onclick = screamMode;
}
main()
