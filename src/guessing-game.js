class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this._guess = Math.ceil((this.max - this.min) / 2) + this.min;
        return this._guess;
    }

    lower() {
        this.setRange(this.min, this._guess);
        this.guess();
    }

    greater() {
        this.setRange(this._guess, this.max);
        this.guess();
    }
}

module.exports = GuessingGame;