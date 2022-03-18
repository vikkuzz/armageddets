export interface AsteroidState {
    asteroids: any[];
    loading: boolean;
    error: null| string;
    distance: string;
}

export enum AsteroidActionTypes {
    FETCH_ASTEROIDS = 'FETCH_ASTEROIDS',
    FETCH_ASTEROIDS_SUCCESS = 'FETCH_ASTEROIDS_SUCCESS',
    FETCH_ASTEROIDS_ERROR = 'FETCH_ASTEROIDS_ERROR',
    ASTEROIDS_MOON_DISTANCE = 'MOON_DISTANCE',
    ASTEROIDS_KILOMETERS_DISTANCE = 'KILOMETERS_DISTANCE',
}

interface FetchAsteroidsAction {
    type: AsteroidActionTypes.FETCH_ASTEROIDS;
}
interface FetchAsteroidsSuccessAction {
    type: AsteroidActionTypes.FETCH_ASTEROIDS_SUCCESS;
    payload: any[];
}
interface FetchAsteroidsErrorAction {
    type: AsteroidActionTypes.FETCH_ASTEROIDS_ERROR;
    payload: string;
}
interface FetchAsteroidsMoonDistance {
    type: AsteroidActionTypes.ASTEROIDS_MOON_DISTANCE;
    payload: string;
}
interface FetchAsteroidsKilometersDistance {
    type: AsteroidActionTypes.ASTEROIDS_KILOMETERS_DISTANCE;
    payload: string;
}

export type AsteroidAction = FetchAsteroidsAction|FetchAsteroidsSuccessAction|FetchAsteroidsErrorAction|FetchAsteroidsMoonDistance|FetchAsteroidsKilometersDistance;