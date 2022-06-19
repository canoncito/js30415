let nombre = prompt("Ingrese su nombre para saber si me debe la renta");


while (nombre != "Don Ramon") 
{
    switch (nombre) 
    {
        case "Quico":
            alert("No me debes nada");
            break;
        
        case "Chavo del 8":
            alert("No me debes nada");
            break;
        case "Doña florinda":
            alert("No me debes nada");
            break;
        default:
            alert("Seguramente seas don ramon y me debes la renta, confirmame la identidad por favor");
            break;
    }
    nombre = prompt("Ingrese su nombre para saber si me debe la renta");
}

