import { combineReducers } from "redux";
import { SapperReducer } from "./SapperReducer";

export const rootReducer = combineReducers({
    sapper: SapperReducer,
})

export type RootState = ReturnType<typeof rootReducer>