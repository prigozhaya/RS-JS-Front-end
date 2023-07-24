import { Car, GarageCar, GarageState, WinnersState } from '../types';

class StateModule {
  private garageState: GarageState;
  private winnersState: WinnersState;

  constructor() {
    this.garageState = {
      totalCountCars: 1,
      currentPage: 1,
      cars:[],
      inputCreate: '',
      inputUpdate: '',
      selectedCar: '',
    };
    this.winnersState = {
      totalCountWinners: 3,
      currentPage: 1,
      winners: []
    };
  }

  setCars(arr: Array<Car>){
    this.garageState.cars = arr;
  }

  setSelectedCar(car: string){
    this.garageState.selectedCar = car;
  }

  getCars(): Array<Car> {
    return this.garageState.cars
  }

  getSelectedCar(): string {
    return this.garageState.selectedCar;
  }

  getGarageState(): GarageState {
    return this.garageState
  }

  getWinnersState(): WinnersState {
    return this.winnersState
  }

  setGarageState(state: GarageState) {
    this.garageState = { ...this.garageState, ...state }
  }

  setWinnersState(state: WinnersState) {
    this.winnersState = { ...this.winnersState, ...state }
  }
};

export default StateModule;
