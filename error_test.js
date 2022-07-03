function validate(array, number) {
    if (!array || !number) {
        throw new ReferenceError("Envie os parametros");
    }

    if (typeof array !== 'object') {
        throw new TypeError("Array precisa ser do tipo object");
    }
    if (typeof number !== 'number') {
        throw new TypeError("Number precisa ser do tipo number");
    }

    if (array.length !== number) {
        throw new RangeError("Tamanho do array e invalido");;
    }
    return array;
}

let array =[2, 4, 6, 10, 15, 30];

try {
    //console.log(validate());
    //console.log(validate(5,5));
    //console.log(validate(array,"abacaxi"));
    //console.log(validate(array,5));
    console.log(validate(array,6));
    
} catch(e) {
    if (e instanceof ReferenceError) {
        console.log("ReferenceError!");
        console.log(e.message);

    }else if (e instanceof TypeError) {
        console.log("TypeError!");
        console.log(e.message);
        
    } else if (e instanceof RangeError) {
        console.log("RangeError!");
        console.log(e.message);
    } else {
        console.log("Tipo de erro nao esperado");
    }

}
