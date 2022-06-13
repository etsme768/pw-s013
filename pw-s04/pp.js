window.onload = _ =>{

  document.getElementById("btnSuma").onclick = _ =>{
    mostrarResultado(sumar());
  }

  document.getElementById("btnResta").onclick = _ =>{
    mostrarResultado(restar());
  }

  document.getElementById("btnProducto").onclick = _ =>{
    mostrarResultado(multiplicar());
  }

  document.getElementById("btnDiv").onclick = _ =>{
    mostrarResultado(dividir());
  }
}

const mostrarResultado = resultado =>{
  document.getElementById("lblResult").innerHTML = resultado;
}

const sumar = _ =>{
  a = parseInt(document.getElementById("value1").value);
  b = parseInt(document.getElementById("value2").value);
  return a+b;
}

const restar = _ =>{
  a = document.getElementById("value1").value;
  b = document.getElementById("value2").value;
  return a-b;
}

const multiplicar = _ =>{
  a = document.getElementById("value1").value;
  b = document.getElementById("value2").value;
  return a*b;
}

const dividir = _ =>{
  a = document.getElementById("value1").value;
  b = document.getElementById("value2").value;
  return a/b;
}