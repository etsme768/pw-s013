function square(n){
  return n*n;
}

//Arrow Notation
const cube = x =>{
  console.log("en función de cube...");
  return x*x*x;
}

function greet(){
  return "Hola Mundo";
}

function showResult(result){
  //Obtenemos una referencia al elemento HTML con ese ID
  //Podemos modificar sus atributos 
  document.getElementById("txtResult").value = result;
}

const sum = (a,b) => a + b;

// Indica el tipo de triangulo que es
const getTrianguleType  = (a,b,c) =>{
  if(a == b && a == c){
    return "Equilatero";
  }else if(a == b || a == c || b == c){
    return "Isosceles";
  }else{
    return "Escaleno";
  }
}

const student = {firstName: "Alvaro", lastName: "Ramos", age: 15};

const legalAge = student => student.age >= 18 ? "Mayor de edad" : "Menor de edad";