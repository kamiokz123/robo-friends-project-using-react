import {createStore , applyMiddleware , combineReducers} from "redux";
import { createLogger } from "redux-logger";
import  ThunkMiddleware  from "redux-thunk";
import { onSearchChange , onRequestRobots} from "./reducers/reducer";

const logger = createLogger()
const rootReducer = combineReducers({onSearchChange,onRequestRobots});

export const  Store = createStore(rootReducer,applyMiddleware(ThunkMiddleware,logger));