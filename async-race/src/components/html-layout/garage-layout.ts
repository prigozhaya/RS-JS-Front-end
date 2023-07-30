import HttpModule from '../http-module';
import StateModule from '../state-module';
import { Car, EngineData, EngineStatus, GarageCar, Winner } from '../types';
import GenerateCars from './helpers/cars-generator';
import GarageHtmlGenerator from './helpers/garage-html-generator';
import ViewRefresher from './helpers/view-refresher';
import WinnersLayout from './winners-layout';

class GarageLayout {
    state: StateModule;
    httpModule: HttpModule;
    winnersLayout: WinnersLayout;
    viewRefresher: ViewRefresher;
    garageHtmlGenerator: GarageHtmlGenerator;
    generateCars: GenerateCars;

    constructor(state: StateModule) {
        this.state = state;
        this.garageHtmlGenerator = new GarageHtmlGenerator();
        this.generateCars = new GenerateCars();
        this.httpModule = new HttpModule();
        this.winnersLayout = new WinnersLayout(this.state, this);
        this.viewRefresher = new ViewRefresher(this.state, this, this.winnersLayout);
    }
    generateCarConstructor(): Node {
        const carConstructor = document.createElement('section');
        carConstructor.innerHTML = this.garageHtmlGenerator.generateCarConstructorHtml(
            this.state.getInputCreate(),
            this.state.getColorCreate(),
            this.state.getInputUpdate(),
            this.state.getColorUpdate()
        );
        return carConstructor;
    }

    generateCarRace(): Node {
        const carRace = document.createElement('section');
        carRace.classList.add('carRace');

        try {
            this.httpModule
                .getGarageWinners(this.state.getSortType(), this.state.getOreder())
                .then((data: Winner[] | Error | undefined) => {
                    if (data !== undefined && !(data instanceof Error)) {
                        this.state.setWinners(data);
                    }
                })
                .catch((x) => {
                    console.log(x);
                });

            this.httpModule
                .GaragegetCars()
                .then((data: Array<GarageCar> | Error | undefined) => {
                    if (data !== undefined && !(data instanceof Error)) {
                        this.state.setCars(data);
                    }
                })
                .catch((x) => {
                    console.log(x);
                });
        } catch (e) {
            console.log(e);
        }

        try {
            this.httpModule
                .GaragegetCars(this.state.getCurrentPage(), 7)
                .then((data: Array<GarageCar> | Error | undefined) => {
                    if (typeof data === 'object' && !(data instanceof Error)) {
                        carRace.innerHTML = `<div><h3>GARAGE(<span id="car-count">${data[0].totalCount}</span>)</h3></div>`;

                        for (let i = 1; i < data.length; i++) {
                            carRace.innerHTML += this.garageHtmlGenerator.generateRaceTrackHtml(
                                i,
                                data[i].id,
                                data[i].name,
                                data[i].color
                            );
                        }

                        const deleteButtons = document.querySelectorAll(
                            '.car-delete-button'
                        ) as NodeListOf<HTMLElement>;
                        deleteButtons.forEach((elem: HTMLElement) => {
                            elem.addEventListener('click', () => {
                                this.httpModule
                                    .deleteCar(Number(elem.dataset.deleteCarId))
                                    .then((data: object | Error | undefined) => {
                                        data;
                                    })
                                    .catch((x) => {
                                        console.log(x);
                                    });

                                if (this.state.getWinners().find((el) => el.id === Number(elem.dataset.deleteCarId))) {
                                    this.httpModule
                                        .deleteWinner(Number(elem.dataset.deleteCarId))
                                        .then((data: object | Error | undefined) => {
                                            data;
                                        })
                                        .catch((x) => {
                                            console.log(x);
                                        });
                                }

                                this.viewRefresher.refreshView(this.state.currentview);
                            });
                        });

                        const selectButtons = document.querySelectorAll(
                            '.car-select-button'
                        ) as NodeListOf<HTMLElement>;
                        selectButtons.forEach((elem: HTMLElement) => {
                            elem.addEventListener('click', () => {
                                this.state.setSelectedCar(`${elem.dataset.selectCarId}`);
                                const input = document.getElementById('update-input') as HTMLInputElement;
                                const updateCarModel = document.querySelector(
                                    `[data-model-car-id="${elem.dataset.selectCarId}"]`
                                );
                                if (updateCarModel) {
                                    input.value = updateCarModel.textContent as string;
                                }
                                const colorInput = document.getElementById('update-color-picker') as HTMLInputElement;
                                const updateCarColor = document.querySelector(
                                    `[data-color-car-id="${elem.dataset.selectCarId}"]`
                                ) as HTMLInputElement;
                                if (updateCarColor) {
                                    colorInput.value = updateCarColor?.getAttribute('fill') as string;
                                }
                            });
                        });

                        for (let i = 0; i < data.length; i++) {
                            const startEngineButton = document.getElementById(`start-engine${i}`);
                            startEngineButton?.addEventListener('click', () => {
                                try {
                                    let time = 0;

                                    this.httpModule
                                        .startStopEngine(Number(startEngineButton.dataset.carId), EngineStatus.Started)
                                        .then((engineData: EngineData | Error | undefined) => {
                                            if (!(engineData instanceof Error)) {
                                                time = +(
                                                    Number(engineData?.distance) /
                                                    1000 /
                                                    Number(engineData?.velocity)
                                                ).toFixed(2);
                                            }
                                        })
                                        .catch((x) => {
                                            console.log(x);
                                        });
                                    this.httpModule
                                        .startEngineDriveMode(Number(startEngineButton.dataset.carId))
                                        .then((engineData: object | Error | undefined) => {
                                            const car = document.getElementById(`car${i}`);
                                            const returnEngineButton = document.getElementById(
                                                `return-engine${i}`
                                            ) as HTMLButtonElement;
                                            if (car && !(engineData instanceof Error)) {
                                                car.style.transition = `all ${time}s linear`;
                                                car.classList.add('car-move');
                                                const staertButton = startEngineButton as HTMLButtonElement;
                                                staertButton.disabled = true;
                                                returnEngineButton.disabled = false;
                                            }
                                        })
                                        .catch((x) => {
                                            console.log(x);
                                        });
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                        }

                        for (let i = 0; i < data.length; i++) {
                            const returnEngineButton = document.getElementById(
                                `return-engine${i}`
                            ) as HTMLButtonElement;
                            returnEngineButton?.addEventListener('click', () => {
                                try {
                                    let time = 0;

                                    this.httpModule
                                        .startStopEngine(
                                            Number(returnEngineButton.dataset.returnCarId),
                                            EngineStatus.Stopped
                                        )
                                        .then((engineData: EngineData | Error | undefined) => {
                                            if (!(engineData instanceof Error)) {
                                                time = +(
                                                    Number(engineData?.distance) /
                                                    1000 /
                                                    Number(engineData?.velocity)
                                                ).toFixed(2);
                                            }
                                        })
                                        .catch((x) => {
                                            console.log(x);
                                        });
                                    const car = document.getElementById(`car${i}`);
                                    const startEngineButton = document.getElementById(
                                        `start-engine${i}`
                                    ) as HTMLButtonElement;
                                    if (car) {
                                        car.style.transition = `all ${time}s linear`;
                                        car.classList.remove('car-move');
                                        const staertButton = startEngineButton as HTMLButtonElement;
                                        staertButton.disabled = false;
                                        returnEngineButton.disabled = true;
                                    }
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                        }
                    }
                })
                .catch((x) => {
                    throw x;
                });

            this.httpModule
                .getCars()
                .then((data: Array<Car> | Error | undefined) => {
                    if (typeof data === 'object' && !(data instanceof Error)) {
                        this.state.setCars(data);
                    }
                })
                .catch((x) => {
                    throw x;
                });
        } catch (e) {
            console.log(e);
        }

        return carRace;
    }

    addCarConstructorFunctionality() {
        const createButton = document.getElementById('create-button');
        createButton?.addEventListener('click', () => {
            const input = document.getElementById('create-input') as HTMLInputElement;
            const colorPicker = document.getElementById('create-color-picker') as HTMLInputElement;

            try {
                this.httpModule
                    .createCar(input.value, colorPicker.value)
                    .then((data: object | Error | undefined) => {
                        data;
                    })
                    .catch((x) => {
                        throw x;
                    });
            } catch (e) {
                console.log(e);
            }
            this.viewRefresher.refreshView(this.state.currentview);
        });

        const updateButton = document.getElementById('update-button');
        updateButton?.addEventListener('click', () => {
            const input = document.getElementById('update-input') as HTMLInputElement;
            const colorPicker = document.getElementById('update-color-picker') as HTMLInputElement;

            try {
                this.httpModule
                    .updateCar(Number(this.state.getSelectedCar()), input.value, colorPicker.value)
                    .then((data: object | Error | undefined) => {
                        data;
                    })
                    .catch((x) => {
                        throw x;
                    });
            } catch (e) {
                console.log(e);
            }
            this.viewRefresher.refreshView(this.state.currentview);
        });

        const inputCreate = document.getElementById('create-input') as HTMLInputElement;
        inputCreate?.addEventListener('blur', () => {
            this.state.setInputCreate(inputCreate.value);
        });

        const createColorPicker = document.getElementById('create-color-picker') as HTMLInputElement;
        createColorPicker?.addEventListener('blur', () => {
            this.state.setColorCreate(createColorPicker.value);
        });

        const inputUpdate = document.getElementById('update-input') as HTMLInputElement;
        inputUpdate?.addEventListener('blur', () => {
            this.state.setInputUpdate(inputUpdate.value);
        });

        const updateColorPicker = document.getElementById('update-color-picker') as HTMLInputElement;
        updateColorPicker?.addEventListener('blur', () => {
            this.state.setColorUpdate(updateColorPicker.value);
        });

        const generateCarsButton = document.getElementById('generate-cars') as HTMLInputElement;
        generateCarsButton?.addEventListener('click', () => {
            this.generateCars.generateCars();
            this.viewRefresher.refreshView(this.state.currentview);
        });
    }

    createPagination() {
        const pagination = document.createElement('section');
        pagination.classList.add('pagination');

        const previousPageButton = document.createElement('button');
        previousPageButton.classList.add('previous-page');
        previousPageButton.innerHTML = `←<span class="flare"></span>`;

        const page = document.createElement('h3');
        page.innerHTML = `(<span id="car-count">${this.state.getCurrentPage()}</span>)`;

        const nextPageButton = document.createElement('button');
        nextPageButton.classList.add('next-page');
        nextPageButton.innerHTML = `→<span class="flare"></span>`;

        pagination.appendChild(previousPageButton);
        pagination.appendChild(page);
        pagination.appendChild(nextPageButton);

        nextPageButton?.addEventListener('click', () => {
            const currentPage = this.state.getCurrentPage();
            this.state.setCurrentPage(currentPage + 1);
            this.viewRefresher.refreshView(this.state.currentview);
        });

        previousPageButton?.addEventListener('click', () => {
            const currentPage = this.state.getCurrentPage();
            if (currentPage > 1) {
                this.state.setCurrentPage(currentPage - 1);
                this.viewRefresher.refreshView(this.state.currentview);
            }
        });

        return pagination;
    }
}

export default GarageLayout;
