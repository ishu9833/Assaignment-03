//01
function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
}

var myMile=feetToMile(9);
console.log(myMile);


//o2

function woodCalculator(chair, table, bad){
    var result = chair*1 + table*3 + bad*5 ;
    return result;

}
var totalWood = woodCalculator(10, 10, 10);
console.log(totalWood);


