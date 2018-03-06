export interface WeatherData{
    clock: string;
    wind: string;
    tempature: string;
    description: string;
}

export interface UpdatableTable {
    updateWeather(data: Array<WeatherData>);
    //om vi hade ett tåg skulle den skrivas här och också vara en callback
    updateTrain(data: Array<any>);
}

