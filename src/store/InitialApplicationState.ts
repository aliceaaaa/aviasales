import InitialTicketsState from "./tickets/InitialTicketsState";
import { IApplicationState } from "./IApplicationState";

const InitialApplicationState: IApplicationState = {
  tickets: InitialTicketsState,
};

export default InitialApplicationState;
