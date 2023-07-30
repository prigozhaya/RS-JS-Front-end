import { GarageCar, GarageState, Order, Sort, Views, Winner, WinnersState } from '../types';

class StateModule {
    private garageState: GarageState;
    private winnersState: WinnersState;
    currentview: Views;

    constructor() {
        this.garageState = {
            totalCountCars: 0,
            currentPage: 1,
            cars: [],
            inputCreate: '',
            colorCreate: '#000000',
            inputUpdate: '',
            colorUpdate: '#000000',
            selectedCar: '',
        };
        this.winnersState = {
            totalCountWinners: 3,
            sortType: Sort.Wins,
            order: Order.Asc,
            currentPage: 1,
            winners: [],
        };
        this.currentview = Views.Garage;
    }

    setCurrentPage(page: number) {
        this.garageState.currentPage = page;
    }

    setWinners(arr: Array<Winner>) {
        this.winnersState.winners = arr;
    }

    setInputCreate(input: string) {
        this.garageState.inputCreate = input;
    }

    setColorCreate(input: string) {
        this.garageState.colorCreate = input;
    }

    setInputUpdate(input: string) {
        this.garageState.inputUpdate = input;
    }

    setColorUpdate(input: string) {
        this.garageState.colorUpdate = input;
    }

    setCars(arr: Array<GarageCar>) {
        this.garageState.cars = arr;
    }

    setTotalCountCars(count: number) {
        this.garageState.totalCountCars = count;
    }

    setSelectedCar(car: string) {
        this.garageState.selectedCar = car;
    }

    setSortType(sortType: Sort) {
        this.winnersState.sortType = sortType;
    }

    setOreder(order: Order) {
        this.winnersState.order = order;
    }

    getCurrentPage(): number {
        return this.garageState.currentPage;
    }

    getWinners(): Array<Winner> {
        return this.winnersState.winners;
    }

    getInputCreate(): string {
        return this.garageState.inputCreate;
    }

    getColorCreate(): string {
        return this.garageState.colorCreate;
    }

    getInputUpdate(): string {
        return this.garageState.inputUpdate;
    }

    getColorUpdate(): string {
        return this.garageState.colorUpdate;
    }

    getCars(): Array<GarageCar> {
        return this.garageState.cars;
    }

    getTotalCountCars(): number {
        return this.garageState.totalCountCars;
    }

    getSelectedCar(): string {
        return this.garageState.selectedCar;
    }

    getGarageState(): GarageState {
        return this.garageState;
    }

    getWinnersState(): WinnersState {
        return this.winnersState;
    }

    getSortType(): Sort {
        return this.winnersState.sortType;
    }

    getOreder(): Order {
        return this.winnersState.order;
    }

    setGarageState(state: GarageState) {
        this.garageState = { ...this.garageState, ...state };
    }

    setWinnersState(state: WinnersState) {
        this.winnersState = { ...this.winnersState, ...state };
    }
}

export default StateModule;
