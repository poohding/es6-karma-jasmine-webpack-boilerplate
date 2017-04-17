import {SpinnerModel} from './spinner.model';
import {SpinnerView} from './spinner.view';

class SpinnerController {
    constructor() {
        this.addHandler();
    }

    init() {
        this.spinnerModel = new SpinnerModel();
        this.spinnerView = new SpinnerView();

        this.spinnerView.data = this.spinnerModel.getData();
        this.spinnerView.render();
    }

    addHandler() {
        const that = this;

        document.querySelector('.spinner__increase').addEventListener('click', (e) => {
            e.preventDefault();

            that.onClickIncrease();
        });

        document.querySelector('.spinner__decrease').addEventListener('click', (e) => {
            e.preventDefault();

            that.onClickDecrease();
        });

        document.getElementById('frmSpinner').addEventListener('submit', (e) => {
            e.preventDefault();

            that.onSubmit();
        });
    }

    onClickIncrease() {
        this.spinnerModel.increase();
        this.spinnerView.data = this.spinnerModel.getData();
        this.spinnerView.render();
    }

    onClickDecrease() {
        this.spinnerModel.decrease();
        this.spinnerView.data = this.spinnerModel.getData();
        this.spinnerView.render();
    }

    onSubmit() {
        this.spinnerView.showData(this.spinnerModel.getData());
    }
}

export {SpinnerController};
