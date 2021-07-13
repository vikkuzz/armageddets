export interface AsteroidState {
    asteroids: any[];
    loading: boolean;
    error: null| string;
}

export enum AsteroidActionTypes {
    FETCH_ASTEROIDS = 'FETCH_ASTEROIDS',
    FETCH_ASTEROIDS_SUCCESS = 'FETCH_ASTEROIDS_SUCCESS',
    FETCH_ASTEROIDS_ERROR = 'FETCH_ASTEROIDS_ERROR',
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

export type AsteroidAction = FetchAsteroidsAction|FetchAsteroidsSuccessAction|FetchAsteroidsErrorAction;