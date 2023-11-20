var inp = document.querySelector("#decimal");

function converter(num) {
  var dec = parseInt(num);

  var bin = dec.toString(2);

  document.querySelector("#binario").innerHTML = bin;
}
