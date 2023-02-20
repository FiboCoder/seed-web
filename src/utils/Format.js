export class Format{

    static findWeek(timeStamp){

        let dateBase = new Date();
        let converted = new Date(timeStamp);

        let dayNumber = converted.getDate();

        if((dateBase.getMonth() + 1) == (converted.getMonth() + 1)){

            if(dayNumber >= 1 && dayNumber <= 7){

                return 1;
            }else if(dayNumber >= 8 && dayNumber <= 14){

                return 2;

            }else if(dayNumber >= 15 && dayNumber <= 21){

                return 3;
                
            }else if(dayNumber >= 22 && dayNumber <= 28){

                return 4;
                
            }else if(dayNumber >= 29 && dayNumber <= 31){

                return 5;
                
            }
        }
    }

    static getDayOfTimestamp(timestamp){

        return new Date(timestamp).getDay();
    }

    static intToReal(value){

        let fValue = value.replace(/\D/g, "");
        fValue = fValue.replace(/(\d)(\d{2})$/, "$1,$2");
        fValue = fValue.replace(/(?=(\d{3})+(\D))\B/g, ".");

        return fValue;
    }

    static intToCurrency(value){

        let fValue = value.replace(/\D/g, "");
        fValue = fValue.replace(/(\d)(\d{2})$/, "$1.$2");

        return fValue;
    }
}