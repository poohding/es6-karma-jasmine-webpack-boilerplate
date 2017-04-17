class SpinnerView {
    constructor(value) {
        this.data = value;
    }

    render() {
        document.querySelector('.spinner__result').value = this.data;
    }
}

export {SpinnerView};
