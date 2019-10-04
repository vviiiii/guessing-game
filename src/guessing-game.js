class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    //binary search algorithm
    guess() {
        if(this.max < this.min){
            return -1;
        }
        // console.log(this);
        return Math.ceil(this.min + (this.max - this.min) / 2);;
        
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
    
}


 module.exports = GuessingGame;
