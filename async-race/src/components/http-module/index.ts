import { Car, EngineData, EngineStatus, GarageCar, Order, Sort, Winner, Winners } from '../types';

class HttpModule {
    readonly URL = 'http://localhost:3000';

    //GET Get Garage Cars /garage?_page=[integer]&_limit=[integer]
    async GaragegetCars(page?: number, limit?: number): Promise<Array<GarageCar> | Error | undefined> {
        try {
            let url = this.URL + '/garage';
            if (page && limit) {
                url += `?_page=${page}&_limit=${limit}`;
            }
            return fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        const totalCount = response.headers.get('X-Total-Count');

                        return response
                            .json()
                            .then((data: Array<GarageCar>) => {
                                data.unshift({ totalCount });
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('GetCars server error');
        }
    }

    //GET Get Cars /garage?_page=[integer]&_limit=[integer]
    async getCars(page?: number, limit?: number): Promise<Array<Car> | Error | undefined> {
        try {
            let url = this.URL + '/garage';
            if (page && limit) {
                url += `?_page=${page}&_limit=${limit}`;
            }
            return fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: Array<Car>) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('GetCars server error');
        }
    }

    //GET Get Car /garage/:id
    async getCar(id: number): Promise<Car | Error | undefined> {
        try {
            const url = this.URL + '/garage/' + id;
            return fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: Car) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('GetCar server error');
        }
    }

    //POST Create Car /garage
    async createCar(name: string, color: string): Promise<object | Error | undefined> {
        try {
            const url = this.URL + '/garage';
            const carData = {
                name: name,
                color: color,
            };

            return fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(carData),
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('CreateCars server error');
        }
    }

    //DELETE Delete Car /garage/:id
    async deleteCar(id: number): Promise<object | Error | undefined> {
        try {
            const url = this.URL + '/garage/' + id;

            return fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('deleteCar server error');
        }
    }

    //PUT Update Car /garage/:id
    async updateCar(id: number, name: string, color: string): Promise<object | Error | undefined> {
        try {
            const url = this.URL + '/garage/' + id;

            const carData = {
                name: name,
                color: color,
            };

            return fetch(url, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(carData),
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('UpdeteCars server error');
        }
    }

    //PATCH Start / Stop Car's Engine /engine?id=[integer]&status=['started'|'stopped']
    async startStopEngine(id: number, status: EngineStatus): Promise<EngineData | Error | undefined> {
        try {
            const url = this.URL + `/engine/?id=${id}&status=${status}`;

            return fetch(url, {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: EngineData) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('startStopEngine server error');
        }
    }

    //PATCH Switch Car's Engine to Drive Mode /engine?id=[integer]&status=['drive']
    async startEngineDriveMode(id: number): Promise<object | Error | undefined> {
        try {
            const url = this.URL + `/engine/?id=${id}&status=${EngineStatus.Drive}`;

            return fetch(url, {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('switchCarsEngine server error');
        }
    }

    //GET Get Winners /winners?_page=[integer]&_limit=[integer]&_sort=['id'|'wins'|'time']&_order=['ASC'|'DESC']
    async getWinners(
        page?: number,
        limit?: number,
        sort: Sort = Sort.Wins,
        order: Order = Order.Asc
    ): Promise<Array<Winners> | Error | undefined> {
        try {
            let url = this.URL + '/winners?';
            if (page && limit) {
                url += `_page=${page}&_limit=${limit}&`;
            }
            url += `_sort=${sort}&_order=${order}`;

            return fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        const totalCount = response.headers.get('X-Total-Count');

                        return response
                            .json()
                            .then((data: Array<Winners>) => {
                                data.unshift({ totalCount });
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('GetCars server error');
        }
    }
    //GET Get Garage Winners /winners?_page=[integer]&_limit=[integer]&_sort=['id'|'wins'|'time']&_order=['ASC'|'DESC']
    async getGarageWinners(
        sort: Sort = Sort.Wins,
        order: Order = Order.Asc,
        page?: number,
        limit?: number
    ): Promise<Array<Winner> | Error | undefined> {
        try {
            let url = this.URL + '/winners?';
            if (page && limit) {
                url += `_page=${page}&_limit=${limit}&`;
            }
            url += `_sort=${sort}&_order=${order}`;

            return fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: Array<Winner>) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('GetCars server error');
        }
    }

    //GET Get Winner /winners/:id
    async getWinner(id: number): Promise<object | Error | undefined> {
        try {
            const url = this.URL + '/winners?' + id;
            return fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('GetCar server error');
        }
    }
    //POST Create Winner /winners
    async createWinner(id: number, wins: number, time: number): Promise<object | Error | undefined> {
        try {
            const url = this.URL + '/winners';
            const winnerData = {
                id: id,
                wins: wins,
                time: time,
            };

            return fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(winnerData),
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('createWinner server error');
        }
    }

    //DELETE Delete Winner /winners/:id
    async deleteWinner(id: number): Promise<object | Error | undefined> {
        try {
            const url = this.URL + '/winners' + id;

            return fetch(url, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('deleteWinner server error');
        }
    }

    //PUT Update Winner /winners/:id
    async updateWinner(id: number, wins: number, time: number): Promise<object | Error | undefined> {
        try {
            const url = this.URL + '/winners' + id;
            const winnerData = {
                wins: wins,
                time: time,
            };

            return fetch(url, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(winnerData),
            })
                .then((response) => {
                    if (!response.ok) {
                        return response
                            .text()
                            .then((data) => {
                                return new Error(`Status: ${response.status} Message: ${data}`);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    } else {
                        return response
                            .json()
                            .then((data: object) => {
                                return Promise.resolve(data);
                            })
                            .catch((x) => {
                                console.log(x.message);
                                return Error(x.message);
                            });
                    }
                })
                .catch((x) => {
                    console.log(x.message);
                    return Error(x.message);
                });
        } catch (e) {
            console.log(e);
            return Error('updateWinner server error');
        }
    }
}

export default HttpModule;
