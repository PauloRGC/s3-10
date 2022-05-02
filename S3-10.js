let arr = ["Rafel", "Daniel", "Manoel"];
function position (arr){
    let newArr = [];
    if ("Daniel" == arr[1]){
        newArr.push (arr[0]);
        arr[0] = arr[1];
        arr[1] = newArr;
        return "Daniel é o vencedor, este é o podio " + (arr);
    }else if("Daniel" == arr[2]){
        newArr.push(arr[1]);
        arr[1] = arr[2];
        arr[2] = newArr;
        return "Este é o podio " + (arr);
    }else{
        return "Daniel"
    }
}

let letra = ["nome", "dwuhdw7", "uhduwdh"]
function nome (letra){
    let qualquer = letra.join (" ");
    let arr = qualquer.split(" ")
    return arr;
}

