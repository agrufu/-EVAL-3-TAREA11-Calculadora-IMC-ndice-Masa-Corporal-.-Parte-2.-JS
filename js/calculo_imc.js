// Se define la función que realizará el cálculo
function calcularIMC() {
    // Se declaran las variables que intervienen en el script
    var nombre, edad, peso, altura, calculo, resultado;

    // Se recogen los datos introducidos por el usuario
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    peso = document.getElementById("peso").value;
    altura = (document.getElementById("altura").value) / 100;
    calculo, resultado;

    // Se calcula el IMC
    calculo = parseFloat(peso / (altura * altura));
    resultado = (nombre + " tiene " + edad + " años, pesa " + peso + "kg, tiene una altura de " + altura + "m; y tiene un IMC de " + calculo.toFixed(2));

    // Se envía el resultado a la etiqueta correspondiente
    document.getElementById("resultado").value = resultado;

    // Se muestran los datos por consola
    console.log(nombre);
    console.log(parseInt(edad));
    console.log(parseInt(peso));
    console.log(parseFloat(altura));

    // Se muesta el resultado del cálculo por consola
    console.log(calculo);
    console.log(resultado);
    return false;
}
