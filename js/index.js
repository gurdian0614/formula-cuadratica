function calcular() {
    let a = parseInt(document.getElementById('va').value)
    let b = parseInt(document.getElementById('vb').value)
    let c = parseInt(document.getElementById('vc').value)

    if (a === 0) {
        error("Valor a no debe ser igual a 0")
    } else {
        let operacion = b * b - 4 * a * c

        if (operacion >= 0) {
            let x1 = (-b + Math.sqrt(operacion)) / (2 * a)
            let x2 = (-b - Math.sqrt(operacion)) / (2 * a)

            document.getElementById('x1').value = x1
            document.getElementById('x2').value = x2
        } else {
            error("La raíz cuadrada no puede ser negativa")
        }
    }
}

function error(text) {
    Swal.fire({
        icon: "error",
        title: "Error en Fórmula cuadrática",
        text: text
    });
}