function woodCalculator(chair, table, bed){
    var chairWood =chair*1;
    var tableWood = table*3
    var bedWood = bed * 5;
    totalWood = chairWood + tableWood + bedWood;
    
    if(chair<0|| table<0|| bed<0){
    console.log("You Enter A negetive Value")
    return 0;
    }
    else{
        return totalWood;
    }
}
var neededWood = woodCalculator(10, 10, 10);
console.log("Total Needed Wood is:", neededWood, "Cubic Feet");


// function woodCalculator(neededWood){

// }
// var numberOfChair =10;
// var numberOfTable =10;
// var numberOfBed = 10;

// var chair =1*numberOfChair;
// var table =3*numberOfTable;
// var bed = 5*numberOfBed;
// var woodCalculator= chair+ table+ bed;
// console.log("Need" , chair, "Cubic Feet");
// console.log("Need" , table, "Cubic Feet");
// console.log("Need" , bed ,"Cubic Feet");
// console.log(woodCalculator)

function woodCalculator(neededWood){
    var chair =1*numberOfChair;
    var table =3*numberOfTable;
    var bed = 5*numberOfBed;
    var numberOfChair =10;
    var numberOfTable =10;
    var numberOfBed = 10;
    var neededWood = chair + table + bed;


console.log();
 }
