import React, { Component } from "react";
import styles from "./styles.module.css";

export interface ITableProps {
  classes: typeof styles;
}

export default class Table extends Component<ITableProps> {
  render() {
    return <div className={styles["table"]}>kjhdkhfksjhdf</div>;
  }
}
