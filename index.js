
// store data--where?



class Timer {
    constructor (durationInput,startButton,pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        this.tick();
       this.intervalId = setInterval(this.tick, 1000);
      
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    onDurationChange() {
        
    }
    tick = () => { 
        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        }
       
            
    }

    // this is a getter,this will get the value.
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    // this is a setter,this will set the value
    set timeRemaining(time) {
        return this.durationInput.value = time;
    }

}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');


const timer = new Timer(durationInput, startButton, pauseButton);