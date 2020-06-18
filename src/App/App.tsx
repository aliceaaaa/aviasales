import React, { Component } from "react";
import Checkbox from "../Components/UI/Checkbox";

export interface IAppProps {}

export interface IAppState {
  isChecked: boolean;
}

export default class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  render() {
    const { isChecked } = this.state;

    return (
      <div>
        <Checkbox
          isChecked={isChecked}
          isDisabled={false}
          onClick={() => this.setState({ isChecked: !isChecked })}
        />
      </div>
    );
  }
}
