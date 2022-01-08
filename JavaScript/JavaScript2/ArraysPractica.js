let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length) //.length() te dice el numero de arrays.

secretMessage.pop() //.pop() borra el ultimo array.

console.log(secretMessage.length)

secretMessage.push('to', 'Program') //.push() agrega 1 o mas arrays al final.

console.log(secretMessage.length) 

console.log(secretMessage.indexOf('easily')) //.indexOf() te indica cual es la posicion 
                                             // numerica del arrey.

secretMessage[7] = 'rigth' //Asi intercambie el valor del array 7 'easily'.

secretMessage.shift() //.shift() elimina el primer array de la lista.

secretMessage.unshift('Programming') //.unshift() agrega un array al inicio.

secretMessage.splice(6, 5, 'kown') //.splice(comienza, cuantos arrays, intercambio)

console.log(secretMessage.join(' ')) //.join() imprime en la consola el arrey entero.

