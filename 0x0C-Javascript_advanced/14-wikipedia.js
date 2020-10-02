/* Simple callback */

function createElement(data) {
  let bodypar = document.createElement('p');

  bodypar.textContent = data;
  document.body.appendChild(bodypar);

}

function queryWikipedia(callback) {
  let req = new XMLHttpRequest();
  req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', false);
  req.send(null);
  if (req.status == 200){
    callback(JSON.parse(req.responseText).query.pages[21721040].extract);
    console.log(req.responseText);
  }
}
queryWikipedia(createElement);
