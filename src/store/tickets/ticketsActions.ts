import { TAction, ITicketModel } from "../Models";
import request from "../request";
import { Dispatch } from "redux";

export const types = {
  setTickets: "tickets/SET_TICKETS",
  setSearchId: "tickets/SET_SEARCH_ID",
};

export function onSetTicketsDataAction(tickets: Array<ITicketModel>): TAction {
  return {
    type: types.setTickets,
    payload: tickets,
  };
}

export function onSetTicketsSearchIdAction(searchId: string): TAction {
  console.log(searchId);
  return {
    type: types.setSearchId,
    payload: searchId,
  };
}

export function onGetSearchId() {
  return (dispatch: Dispatch) => {
    return request("https://front-test.beta.aviasales.ru/search").then(
      (response) => {
        console.log(response);

        dispatch(onSetTicketsSearchIdAction(response.searchId));
      }
    );
  };
}
