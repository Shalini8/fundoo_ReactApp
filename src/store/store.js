import ChangeTitleReducer from "../reducers/ChangeTitle.Reducer";
import abcReducer from "../reducers/AbcReducer";
import { createStore , combineReducers } from "redux";


const store1 = combineReducers({ChangeTitleReducer,abcReducer});
const store = createStore(store1);
// const store = createStore(ChangeTitleReducer);

export default store;