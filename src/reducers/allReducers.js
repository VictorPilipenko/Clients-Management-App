import { combineReducers } from "redux";
import clientsReducer from './clients';
import clientReducer from './client';
import filtersReducer from './filters';


const allReducers = combineReducers({
    clients: clientsReducer,
	client: clientReducer,
    filters: filtersReducer
});

export default allReducers