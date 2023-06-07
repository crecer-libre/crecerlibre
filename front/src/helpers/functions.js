export const validarRut = (rut) => {
  rut = rut.replace(/[^0-9kK]/g, ''); // Eliminar cualquier caracter no numérico excepto 'k' o 'K'
  
  if (rut.length < 2) {
    return false;
  }
  
  var dv = rut.slice(-1).toUpperCase(); // Extraer el dígito verificador
  var rutSinDv = rut.slice(0, -1); // Obtener el RUT sin el dígito verificador
  
  var suma = 0;
  var factor = 2;
  
  // Calcular la suma ponderada de los dígitos del RUT
  for (var i = rutSinDv.length - 1; i >= 0; i--) {
    suma += parseInt(rutSinDv.charAt(i)) * factor;
    factor = factor === 7 ? 2 : factor + 1;
  }
  
  var dvCalculado = 11 - (suma % 11);
  dvCalculado = dvCalculado === 10 ? 'K' : dvCalculado.toString();
  
  return dv === dvCalculado;
}

export const validarNumeroCelularChileno = (numero) => {
  const regex = /^(\+?56)?(9)[98765432]\d{7}$/;
  return regex.test(numero);
};

export const formatearFecha = (fecha) => {
  // Crea un objeto Date con la fecha proporcionada
  var date = new Date(fecha);

  // Obtiene los componentes de la fecha
  var dia = date.getDate();
  var mes = date.getMonth() + 1; // Los meses empiezan en 0, por lo que se suma 1
  var anio = date.getFullYear();
  var horas = date.getHours() + 4;
  var minutos = date.getMinutes();

  // Asegura que los componentes tengan 2 dígitos
  dia = dia < 10 ? '0' + dia : dia;
  mes = mes < 10 ? '0' + mes : mes;
  horas = horas < 10 ? '0' + horas : horas;
  minutos = minutos < 10 ? '0' + minutos : minutos;

  // Devuelve la fecha formateada
  return dia + '/' + mes + '/' + anio + ' ' + horas + ':' + minutos;
}