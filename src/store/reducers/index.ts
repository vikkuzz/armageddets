import { combineReducers } from "redux";
import { asteroidReducer } from "./asteroidReducer";


export const rootReducer = combineReducers({
    asteroid: asteroidReducer,
});

export type RootState = ReturnType<typeof rootReducer>;