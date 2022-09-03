export default class App {

    factorial(numero) {
        let resultado = 1;

        for(let i = numero; i > 0; i = i - 1) {
            resultado = resultado * i;
        }

        return resultado
    }

    convertirAString(numero) {
        let s = "";
        let i = 1; 

        while(i <= numero) {
            s = s + "*"
            i = i + 1;
        }

        return s;
    }

    obtenerDivisibles(numero) {
        let divisible = 0
        let i = numero;

        do{

            if(numero % i == 0){
                divisible = divisible + 1;
            }
            i = i -1;
        }while(i > 0);

        return divisible; 
    }

    elevar(numero, potencia) {
         
    }
}

let app = new App();

console.log('Probando factorial');
console.log(app.factorial(5));
console.log('Probando convertirAString');
console.log(app.convertirAString(6));
console.log(app.convertirAString(10));
console.log('Probando obtenerDivisibles');
console.log(app.obtenerDivisibles(8));
console.log(app.obtenerDivisibles(5));
console.log('Probando elevar');
