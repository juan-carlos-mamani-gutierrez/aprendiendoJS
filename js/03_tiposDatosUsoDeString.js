/* string o cadena de texto */
/* forma de crear strings */
const producto = "Monitor de 20 Pulgadas";/* el mas usado  se puede usar comillas ''o "" */
const producto2 = string('Monitor de 20 Pulgadas');
const producto3 = new String('Monitor de 20 Pulgadas');

/* pero si tienes que meter un un collila dentro de tu cadena */
const producto4 = " Monitor de 20\" ";
const producto5 = 'Monitor de 20"';

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

/* metodos string */

/* length */
/* determina la cantidad de caracteres que tiene mi variable */
const prueba = 'hola'; /* tine 4 caracteres y con length nos tiene dar ese resultado */
console.log(prueba.length); /* y esto me arojara 4 en consola del navegador */

/* indexOf */
/* para buscar una parte de una cadena de texto  */
const prueba2 = 'aprendiendo javaScrip en mi tiempo libre';/* vamos buscar javaScrip */

console.log(prueba2.indexOf('javaScrip'));/*y esto no arojara 12 eso significa que desde el caracter
                                            12 se encuentra la palabra recuerda que se enpiesa a contrar
                                             desde la posion 0 y si el resultado es -1 no se encontro*/
/* otra forma de buscar es includes */
/* este te devuelve true y false  true siendo que encontro la palabra y false que no */
const prueba3 = 'aprendiendo javaScrip en mi tiempo libre';/* vamos buscar javaScrip */
console.log(prueba3.includes('javaScrip'));/* esto nos devolvio true eso significa que encotro la palabra */

/*  hay varios metodos que se pueden usar con string esto son unos cuantos */
