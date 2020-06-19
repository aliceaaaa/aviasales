import { ITicketsState } from "./ITicketsState";
import { TAction } from "../Models";
import { types } from "./ticketsActions";
import InitialTicketsState from "./InitialTicketsState";

const ticketsReducer = (
  state: ITicketsState = InitialTicketsState,
  action: TAction
): ITicketsState => {
  switch (action.type) {
    case types.setTickets:
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
