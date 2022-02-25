function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros"); 
    
        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object");
    
        if(typeof arr !== 'number') throw new TypeError("Num precisa ser do tipo Number");
    
        if(arr.length !== num) throw new RangeError("Tamanho Inválido");
        
        return arr;
    } catch (error) {
        if(error instanceof ReferenceError) {
            console.log("Este erro é do tipo ReferenceError!");
            console.log(error.message);
        }
        else if(error instanceof TypeError) {
            console.log("Este erro é do tipo TypeError!");
            console.log(error.message);
        }
        else if(error instanceof RangeError) {
            console.log("Este erro é do tipo RageError!");
            console.log(error.message);
        } else {
            console.log("Tipo de erro não encontrado:" + error);
        }
    }
}

console.log(validaArray([], 5)); // RangeError
//console.log(validaArray()); ReferenceError
//console.log(validaArray([], 'a')); TypeError


