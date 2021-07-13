export interface IAsteroid{
    id: number;
    name: string;
    estimated_diameter:{kilometers:{estimated_diameter_max: number}}
    distance: number;
    date: string;
    danger: boolean;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: any[];
    
}

export interface ICard {
    asteroid: IAsteroid
}