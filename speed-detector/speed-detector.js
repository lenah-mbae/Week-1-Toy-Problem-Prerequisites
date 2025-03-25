function speedDetector(){
    const speed = parseFloat(prompt("Enter the speed of the car: "));
    const points = Math.floor((speed - 70) / 5);
    if(points >= 12){
        return("License suspended");
    }
    else{
        return("Points: " + points);
    }

    if(speed <= 70){
        return("Ok");
        if (speed > 70){
            return("Points: " + points);
        }        
}
}

console.log(speedDetector());