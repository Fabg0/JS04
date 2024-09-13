// Objeto para una tarea
let tarea = {
    descripcion: "Revisar mis pendientes",
    completado: false,
    completar: function() {
        this.completado = true;
    }
};

// Arreglo de tareas
let tareas = [
    tarea,
    { descripcion: "Alimentar al perro", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Hacer ejercicio", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Hacer tarea", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Estudiar", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Tender la cama", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Lavar los servicios", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Hacer las compras", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Ir a clase", completado: false, completar: function() { this.completado = true; } },
    { descripcion: "Hacer el desayuno", completado: false, completar: function() { this.completado = true; } }
];

// Función mostrar tareas
function mostrarTareas(tareas) {
    tareas.forEach((tarea, index) => {
        document.write(`${index + 1}. ${tarea.descripcion} - ${tarea.completado ? "Completado" : "Pendiente"}<br>`);
    });
}

// Función para marcar una tarea como completada
function marcarComoCompletado(tarea, index) {
    if (tareas[index]) {
        tareas[index].completar();
    }
}

document.write("Tareas iniciales: <br>");
mostrarTareas(tareas);

// Marcar tareas como completadas
marcarComoCompletado(tareas, 0);
marcarComoCompletado(tareas, 2);
marcarComoCompletado(tareas, 5);
marcarComoCompletado(tareas, 8);

// Mostrar tareas después de completar algunas
document.write("<br>Tareas después de completar algunas:<br>");
mostrarTareas(tareas);
