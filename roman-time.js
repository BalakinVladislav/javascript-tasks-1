var hours = process.argv[2];
var minutes = process.argv[3];
function arabtoroman(arab){
	switch(arab){
		case 1:
		    return'I';
		    break;
	    case 2:
		    return'II';
		    break;
		case 3:
		    return'III';
		    break;
        case 4:
		    return'IV';
		    break;
		case 5:
		    return'V';
		    break;
		case 6:
		    return'VI';
		    break;
		case 7:
		    return'VII';
		    break;
		case 8:
		    return'VIII';
		    break;
		case 9:
		    return'IX';
		    break;
		case 10:
		    return'X';
		    break;    
        case 20:
		    return'XX';
		    break;
		case 30:
		    return'XXX';
		    break;
		case 40:
		    return'XL';
		    break;
		case 50:
		    return'L';
		    break;
		default:
		return "N"
	}
}
if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60){
console.log("%s%s:%s%s", arabtoroman(Math.floor(hours / 10) * 10) , arabtoroman(hours % 10), arabtoroman(Math.floor(minutes / 10) * 10) , arabtoroman(minutes % 10));
}
else console.log("Время указано не верно");
