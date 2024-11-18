const fs = require('fs');

//Registro de archivos
function registrar(nombre, edad, animal, color, enfermedad) {
  const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad
  };
  citas.push(nuevaCita);
  fs.writeFileSync('citas.json', JSON.stringify(citas));
  console.log(`Cita para ${nombre} registrada con éxito`);
}

//Lectura de archivos
function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8')); 
  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    console.log('Citas registradas:');
    citas.forEach(cita => {
      console.log(`- Nombre: ${cita.nombre}, Edad: ${cita.edad}, Tipo: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
    });
  }
}

//Exportación de funciones
module.exports = { registrar, leer };