function getProduct(){
  value1 = parseInt(document.getElementById("txtValue1").value);
  value2 = parseInt(document.getElementById("txtValue2").value);
<<<<<<< HEAD
  document.getElementById("lblResult").innerHTML = value1 * value2;
  document.getElementById("divTitle").innerHTML = "<h3>Titulo cambiado</h3>";
  document.getElementById("btnMultiply").className = "btn btn-danger mt-4";
=======
  document.getElementById("lblResult").innerHTML = value1 + value2;
  document.getElementById("divTitle").innerHTML = "<h3>Titulo Cambiado</h3>";
  document.getElementById("btnMultiply")
>>>>>>> 8920c3265ed5f5ad891a5fc9d0d9e250269bf10b
}