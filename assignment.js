function feetToMile(feet)
        {
        let mile = feet/5280;
        if(feet<0){
            console.log("Distance Cannot be Negative");
            return 0;
            }
            else{
                return mile;
            }
        }
    var result = feetToMile(-1000000);
    console.log("Your Result is:", result.toFixed(2), "Miles");

function woodCalculator(chair, table, bed)
        {
        let chairWood =chair*1;
        let tableWood = table*3
        let bedWood = bed * 5;
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

function brickCalculator(floor)
        {
        var numberOfBricks;

        if(floor<=10){

        numberOfBricks=floor*15*1000;
        console.log("Required Number of bricks is:" ,numberOfBricks)
        return ;
        }

        if(floor<=20){
        numberOfBricks=floor*12*1000;
        console.log("Required Number of bricks is:" ,numberOfBricks)
        return;
        }

        else{
        numberOfBricks=floor*10*1000;
        console.log("Required Number of bricks is:" ,numberOfBricks)
        return;
        }
    }
    
    var neededEit = brickCalculator(11);

