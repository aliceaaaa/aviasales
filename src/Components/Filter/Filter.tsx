import React, { Component } from "react";
import styles from "./styles.module.css";

export interface IFilterProps {
  classes: typeof styles;
  isChecked: boolean;
  isDisabled: boolean;
  onClick: () => void | Promise<void>;
}

export default class Filter extends Component<IFilterProps> {
  render() {
    return <div className={styles["filter"]}>kjhdkhfksjhdf</div>;
  }
}
