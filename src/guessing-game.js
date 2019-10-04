class GuessingGame {
    // create empty game object 
    constructor() {
        this.answer = 0;
        this.min = 0;
        this.max = 0;
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
        this.answer = Math.round(this.max - (this.max - this.min)/2);
        // console.log(this);
        return this.answer;
        
    }

    lower() {
        this.max = this.answer;
    }

    greater() {
        this.min = this.answer;
    }
    
}


 module.exports = GuessingGame;
