function timer(currentTime){
    const interval = setInterval(increment, 1000);
    function increment(){
        currentTime.setSeconds(currentTime.getSeconds()+1);
        console.clear();
        console.log(currentTime);
    }
    return interval;
}

const currentTime = new Date();

timer(currentTime);

// clearInterval(timer(currentTime));
//  the line currentTime.setSeconds(currentTime.getSeconds()+1) retrieves the current seconds value,
increments it by one, and sets the updated value as the new seconds component of the currentTime object.
This effectively increments the time by one second.
