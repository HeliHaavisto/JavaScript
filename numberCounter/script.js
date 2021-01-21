let number =Math.floor(Math.random()*100);

let result= " on ";


     let numerot = ["nolla","yksi", "kaksi", "kolme", "neljä", "viisi", "kuusi", "seitsemän", "kahdeksan", "yhdeksän", "kymmenen"]; 

    if( 0 <= number && number <= 10){

        console.log( number + " " + numerot[Number(number)]);

    } else if (10 < number && number <=19) {
        let remainer = number -10;
        switch(remainer) {
            case 1:
                result += numerot[1];
                break;
            case 2:
                result += numerot[2];
                break;
            case 3:
                result += numerot[3];
                break;
            case 4:
                result += numerot[4];
                break;
            case 5:
                result += numerot[5];
                break;
            case 6:
                result += numerot[6];
                break;
            case 7:
                result += numerot[7];
                break;
            case 8:
                result += numerot[8];
                break;
            case 9:
                result += numerot[9];
                break;
            default:
                break;
        }
        result += "toista";
        console.log(number + result);
    } else if (20 <= number && number <= 99) {
        let module = Math.floor(number / 10);
        let remainer = number % 10;
        switch(module) {
            case 1:
                result += numerot[1];
                break;
            case 2:
                result += numerot[2];
                break;
            case 3:
                result += numerot[3];
                break;
            case 4:
                result += numerot[4];
                break;
            case 5:
                result += numerot[5];
                break;
            case 6:
                result += numerot[6];
                break;
            case 7:
                result += numerot[7];
                break;
            case 8:
                result += numerot[8];
                break;
            case 9:
                result += numerot[9];
                break;
            default:
                break;
        }
        result +="kymmentä";

        switch (remainer) {
            case 1:
                result += numerot[1];
                break;
            case 2:
                result += numerot[2];
                break;
            case 3:
                result += numerot[3];
                break;
            case 4:
                result += numerot[4];
                break;
            case 5:
                result += numerot[5];
                break;
            case 6:
                result += numerot[6];
                break;
            case 7:
                result += numerot[7];
                break;
            case 8:
                result += numerot[8];
                break;
            case 9:
                result += numerot[9];
                break;
            default:
                break;
        }
        console.log(number + result);
    } else {
        result = "sata"
        console.log(number + result);

    }



    





