import React, { Component } from "react";
import { connect } from "react-redux";
import { IApplicationState } from "../store/IApplicationState";
import { onGetTicketsSample } from "../store/tickets/ticketsActions";
import { ITicketModel } from "../store/Models";
import Checkbox from "../Components/UI/Checkbox";
import Table from "../Components/UI/Table/Table";

export interface IAppProps {
  searchId: string;
  stop: boolean;
  tickets: Array<ITicketModel>;
  hasPollingStopped: boolean;
  getTicketsSample: () => Promise<void>;
}

export interface IAppState {
  isChecked: boolean;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  componentDidMount() {
    const { getTicketsSample } = this.props;

    getTicketsSample();
  }

  render() {
    const { isChecked } = this.state;
    const { tickets } = this.props;
    return (
      <div>
        <Checkbox
          isChecked={isChecked}
          isDisabled={false}
          onClick={() => this.setState({ isChecked: !isChecked })}
        />
        <Table
          properties={["first", "second", "third"]}
          headers={["first", "second", "third"]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  tickets: state.tickets.tickets,
});

const mapDispatchToProps = (dispatch: any) => ({
  getTicketsSample: () => dispatch(onGetTicketsSample()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
