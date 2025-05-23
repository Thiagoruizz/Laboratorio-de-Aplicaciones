let nombre = prompt("Cual es tu nombre")

console.log("El nombre es:", nombre)

let edad = prompt("Cuantos años tenés compañero")

console.log("Tu edad es", edad)



let Departamento = prompt("¿De que departamento sos?")

console.log("El Departamento es:", Departamento)


document.getElementById("alfajor").innerHTML = nombre;
document.getElementById("alfajor").style.color = "blue";
document.getElementById("edad").innerHTML = edad;
document.getElementById("Departamento").innerHTML = Departamento;

