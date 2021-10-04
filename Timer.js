
class Timer {
    constructor (durationInput,startButton,pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;

        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
       this.intervalId = setInterval(this.tick, 20);
      
    }
    pause = () => {
        clearInterval(this.intervalId);
    }
    onDurationChange() {
        
    }
    tick = () => { 
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }     
    }

    // this is a getter,this will get the value.
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    // this is a setter,this will set the value
    set timeRemaining(time) {
        return this.durationInput.value = time.toFixed(2);
    }

}
