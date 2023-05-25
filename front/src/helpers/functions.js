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