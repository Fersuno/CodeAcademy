//hacer una funcion factorial

const factorial = num => {
    let resultado = 1;
    for (let i = num; i > 0; i--) {
      resultado *= i
    } 
    return resultado
  }
    
  factorial(6) //factorial de 6! es 720 = 6 * 5 * 4 * 3 * 2 * 1

//SubLength
const subLength = (str, letra) => {
    let letras = 0;
    let len = -1;
    
    for (let i=0; i<str.length; i++) {
      if (str[i] == letra) {
        letras++;
        if (letras > 2) {
          return 0;
        }
        if (len == -1) {
          len = i;
        } else {
          len = i - len + 1
        }
      }
    }
    if (letras < 2) {
      return 0;
    }
  
    return len;
};
  
subLength('caracas', 'a')

//lista, printe la lista separados por comas y los ultimos dos objetos separados por un y

const chucherias = lista => {
    let listaDePalabras = ''
  
    for (let i=0; i<lista.length; i++) {
      listaDePalabras += lista[i].item;
      if (i < lista.length - 2) {
        listaDePalabras += ', ';
      } else if (i == lista.length - 2){
        listaDePalabras += ' y ';
      }
    }
    
    return listaDePalabras;
  }

  chucherias( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
chucherias( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
chucherias( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'