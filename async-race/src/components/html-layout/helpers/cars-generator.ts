import data from '../../../data/index.json' assert { type: 'json' };
import HttpModule from '../../http-module';

class GenerateCars {
    httpModule: HttpModule;

    constructor() {
        this.httpModule = new HttpModule();
    }

    generateRandColor() {
        const MAX_COLOR_CODE = 256;

        const red = Math.floor(Math.random() * MAX_COLOR_CODE),
            green = Math.floor(Math.random() * MAX_COLOR_CODE),
            blue = Math.floor(Math.random() * MAX_COLOR_CODE);

        const r = red.toString(16).length < 2 ? `0${red.toString(16)}` : red.toString(16),
            g = green.toString(16).length < 2 ? `0${green.toString(16)}` : green.toString(16),
            b = blue.toString(16).length < 2 ? `0${blue.toString(16)}` : blue.toString(16);

        return `#${r}${g}${b}`;
    }

    generateRandModel() {
        const CAR_ARRAY_LENGTH = 256;
        const carModels = data;
        const carBrand = carModels.carsBrands[Math.floor(Math.random() * CAR_ARRAY_LENGTH)];
        const carModel = carModels.carsModels[Math.floor(Math.random() * CAR_ARRAY_LENGTH)];
        return `${carBrand} ${carModel}`;
    }

    generateCars(): void {
        for (let i = 0; i < 100; i++) {
            try {
                this.httpModule
                    .createCar(this.generateRandModel(), this.generateRandColor())
                    .then((data: object | Error | undefined) => {
                        data;
                    })
                    .catch((x) => {
                        throw x;
                    });
            } catch (e) {
                console.log(e);
            }
        }
    }
}

export default GenerateCars;
