import { combineReducers } from "redux";
import formReducer from "./formReducer";
import mainReducer from "./mainReducer";
import editReducer from "./editReducer";
import editValueReducer from "./editValueReducer";
const rootReducer = combineReducers({
    formInput: formReducer,
    todos: mainReducer,
    isEditing: editReducer,
    newValue: editValueReducer
});

export default rootReducer