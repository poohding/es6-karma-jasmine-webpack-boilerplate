class SpinnerModel {
    constructor(value = 100) {
        this.data = value;
    }

    increase(value = 1) {
        this.data += value;
    }

    decrease(value = 1) {
        this.data -= value;
    }

    getData() {
        return this.data;
    }
}

export {SpinnerModel};
