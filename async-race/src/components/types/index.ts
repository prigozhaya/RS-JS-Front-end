export enum Views {
    Garage = 'garage',
    Winners = 'winners',
}

export enum EngineStatus {
    Stopped = 'stopped',
    Started = 'started',
    Drive = 'drive',
}

export enum Sort {
    Id = 'id',
    Wins = 'wins',
    Time = 'time',
}

export enum Order {
    Asc = 'ASC',
    Desc = 'DESC',
}

export enum SelectedView {
    Garage = 'garage',
    Winners = 'winners',
}

export type Car = {
    id: number;
    color: string;
    name: string;
};

export type EngineData = {
    distance: number;
    velocity: number;
};

export type GarageCar = {
    color?: string;
    name?: string;
    id?: number;
    totalCount?: string | null;
};

export type Winner = {
    id: number;
    wins: number;
    time: number;
};

export type Winners = {
    id?: number;
    wins?: number;
    time?: number;
    totalCount?: string | null;
};

export type GarageState = {
    totalCountCars: number;
    currentPage: number;
    cars: Array<GarageCar>;
    inputCreate: string;
    colorCreate: string;
    inputUpdate: string;
    colorUpdate: string;
    selectedCar: string;
};

export type WinnersState = {
    totalCountWinners: number;
    currentPage: number;
    winners: Array<Winner>;
    sortType: Sort;
    order: Order;
};

export type Engine = {
    velocity: number;
    distance: number;
    status: EngineStatus;
};
