/*function getProduct(){
  value1 = parseInt(document.getElementById("txtValue1").value);
  value2 = parseInt(document.getElementById("txtValue2").value);
  document.getElementById("lblResult").innerHTML = value1 * value2;
  document.getElementById("divTitle").innerHTML = "<h3>Titulo cambiado</h3>";
  document.getElementById("btnMultiply").className = "btn btn-danger mt-4";
}*/

window.onload = _ =>{
  document.getElementById("btnTest").onclick = _ =>{
    showResult(getDataPage());
  }
}

const getDataPage = _ =>{
  let data = "";
  data = "Titulo: " + document.title + "\n";
  data += "URL: " + document.URL + "\n";
  data += "Referrer: " + document.referrer;
  return data;
}