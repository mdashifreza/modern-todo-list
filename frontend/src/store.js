import { createStore } from "redux";
import { rootReducers } from "./redux/reducers";
export const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)