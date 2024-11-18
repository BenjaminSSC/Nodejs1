const operaciones = require('./operaciones');

//Aquí tuve que usar una destructuración de función sino no me dejaba agregar nuevas mascotas
const [,,operacion, ...args] = process.argv;

const operacionesDisponibles = [
  //Para registrar 
    { name: "registrar", func: () => {
      if (args.length === 5) {
        const [nombre, edad, animal, color, enfermedad] = args;
        operaciones.registrar(nombre, edad, animal, color, enfermedad);
      } else {
        console.error('Uso incorrecto. Debe proporcionar: registrar <nombre> <edad> <animal> <color> <enfermedad>');
      }
    }
  },
  //Para ver los registrados
  { name: "leer", func: () => operaciones.leer() }
];

operacionesDisponibles.forEach(op => {
  if(op.name === operacion) {
    op.func();
    return;
  }
});

if (!operacionesDisponibles.some(op => op.name === operacion)) {
  console.log("Operación no reconocida. Use 'registrar' o 'leer'.");
}