import { ITicketsState } from "./ITicketsState";
import { TAction } from "../Models";
import { types } from "./ticketsActions";
import InitialTicketsState from "./InitialTicketsState";

const ticketsReducer = (
  state: ITicketsState = InitialTicketsState,
  action: TAction
): ITicketsState => {
  console.log(action.payload);
  switch (action.type) {
    case types.setTickets:
      return {
        ...state,
        tickets: action.payload,
      };
    case types.setSearchId:
      console.log("here");
      return {
        ...state,
        searchId: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
