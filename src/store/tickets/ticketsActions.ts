import { TAction, ITicketModel } from "../Models";
import { Dispatch } from "redux";
import request from "../request";

export const types = {
  setTickets: "tickets/SET_TICKETS",
};

export function onSetTicketsSampleAction(
  tickets: Array<ITicketModel>
): TAction {
  return {
    type: types.setTickets,
    payload: tickets,
  };
}

export function onGetTicketsSample() {
  return async (dispatch: Dispatch) => {
    let stop = false;
    let ticketssample: Array<ITicketModel> = [];

    while (!stop) {
      let searchIdResponse = await request(
        "https://front-test.beta.aviasales.ru/search"
      );

      let ticketsResponse = await request(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchIdResponse.searchId}`
      );

      if (ticketsResponse) {
        ticketssample = ticketsResponse.tickets;
        stop = ticketsResponse.stop;

        dispatch(onSetTicketsSampleAction(ticketssample));
      }
    }
  };
}
