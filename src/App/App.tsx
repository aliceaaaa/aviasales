import React, { Component } from "react";
import { connect } from "react-redux";
import Checkbox from "../Components/UI/Checkbox";
import Table from "../Components/UI/Table/Table";
import { IApplicationState } from "../store/IApplicationState";
import { onGetSearchId } from "../store/tickets/ticketsActions";

export interface IAppProps {
  searchId: string;
  onGetSearchId: () => void;
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
    this.props.onGetSearchId();
  }

  render() {
    const { isChecked } = this.state;
    console.log(this.props);
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

const mapStateToProps = (state: IApplicationState) => state;

const mapDispatchToProps = (dispatch: any) => ({
  onGetSearchId: () => dispatch(onGetSearchId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
