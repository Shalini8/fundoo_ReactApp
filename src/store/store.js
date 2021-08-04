import { createStore  } from "redux";
import ChangeTitleReducer from "../reducers/ChangeTitle.Reducer";
const store = createStore(ChangeTitleReducer);

export default store;