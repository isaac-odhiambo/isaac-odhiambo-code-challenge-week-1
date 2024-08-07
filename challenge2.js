function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}


speedDetector(80);  
speedDetector(60);  
speedDetector(130); 