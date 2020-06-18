import { combineReducers } from "redux";
import ticketsReducer from "./tickets/ticketsReducer";

export default combineReducers({
  tickets: ticketsReducer,
});
